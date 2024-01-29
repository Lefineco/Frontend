<script lang="ts" setup>
import type { RealtimeChannel } from '@supabase/supabase-js'
import { getVideoID } from '~/composables/helper'
import type { Database } from '~/server/types/supabase'

definePageMeta({
	layout: 'blank',
})

let roomChannel: RealtimeChannel

const route = useRoute<'rooms-id'>()
const user = useSupabaseUser()
const supabase = useSupabaseClient<Database>()
const player = ref()
const realtimeResponse = ref()

const { data } = await supabase
	.from('rooms')
	.select('*, participants(id, is_owner, profiles(*))')
	.filter('id', 'eq', route.params.id)
	.single()

const is_owner
	= data?.participants?.find(p => p.is_owner)?.profiles?.id === user.value?.id

async function onChange() {
	// TODO; replace realtime Table to Brodcast Channel and Sync Function
	roomChannel.send({
		type: 'broadcast',
		event: 'player',
		payload: {
			on_play: true,
			current_time: player.value?.getPlayerInstance().currentTime,
		},
	})
}

const realtimeResponseWatch = watch(realtimeResponse, () => {
	if (realtimeResponse.value?.on_play !== undefined && !is_owner) {
		const playerInstance = player.value?.getPlayerInstance()

		if (realtimeResponse.value.on_play)
			playerInstance.play()
		else playerInstance.pause()
	}

	if (realtimeResponse.value?.current_time !== undefined && !is_owner) {
		const playerInstance = player.value?.getPlayerInstance()

		playerInstance.currentTime = realtimeResponse.value.current_time
	}
})

// TODO; replace realtime Table to Brodcast Channel and Sync Function

onMounted(async () => {
	const playerInstance = await player.value?.getPlayerInstance()

	roomChannel = supabase
		.channel(`player_${route.params.id}`)
		.on(
			'postgres_changes',
			{
				event: '*',
				schema: 'public',
				table: 'rooms',
				filter: `id=eq.${route.params.id}`,
			},
			(payload) => {
				realtimeResponse.value = payload.new
			},
		)
		.subscribe()

	roomChannel = supabase.channel(route.params.id)

	roomChannel.on('broadcast', {
		event: 'player',
	}, (res) => {
		realtimeResponse.value = res.payload
	}).subscribe()

	if (data?.url) {
		try {
			playerInstance.autoplay = true
			playerInstance.currentTime = data.current_time
			playerInstance.on('play', onChange)
			playerInstance.on('pause', onChange)
			playerInstance.on('seeked', onChange)
		}
		catch (error) {
			// eslint-disable-next-line no-console
			console.debug(error)
		}

		if (!is_owner)
			return false
	}
})

onUnmounted(() => {
	supabase.removeChannel(roomChannel)
	realtimeResponseWatch()
})
</script>

<template>
	<div class="room-page">
		<LayoutHeader />

		<div class="wrapper">
			<div class="player-container">
				<ClientOnly>
					<SharedPlayer
						ref="player" :type="data?.platform" :video-id="getVideoID(data?.url)"
						class="h-2/3 rounded-2xl overflow-hidden" :is-owner="is_owner"
					/>

					<template #fallback>
						<div class="h-2/3 rounded-2xl overflow-hidden w-full bg-white/5 animate-pulse" />
					</template>
				</ClientOnly>
			</div>

			<div class="chat-container">
				<div class="header">
					<div class="header-text-box">
						<span class="header-title">
							{{ data?.title }}
						</span>

						<span class="header-text">
							{{ data?.description }}
						</span>
					</div>

					<RoomParticipants v-if="data" :participants="data.participants" />
				</div>

				<RoomChat :room-id="data?.id || 'Lefine'" />
			</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.room-page {
	@apply flex flex-col h-full w-full max-w-[1700px] mx-auto;

	.wrapper {
		@apply flex overflow-hidden h-full w-full p-6 gap-8;

		.player-container {
			@apply h-full w-2/3 overflow-hidden;
		}

		.chat-container {
			@apply flex flex-col h-full w-1/3 bg-white/5 rounded-2xl;

			.header {
				@apply p-4 flex justify-between items-center w-full border-b border-white/5;
			}

			.header-text-box {
				@apply flex flex-col w-2/3;
			}

			.header-title {
				@apply text-lg truncate;
			}

			.header-text {
				@apply text-sm w-full truncate text-white/50;
			}

		}
	}
}
</style>
