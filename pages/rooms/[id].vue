<script lang="ts" setup>
import { getVideoID } from '~/composables/helper'
import type { Database } from '~/server/types/supabase'

definePageMeta({
	layout: 'blank',
})

const route = useRoute<'rooms-id'>()
const user = useSupabaseUser()
const supabase = useSupabaseClient<Database>()
const player = ref()

const { data } = await useAsyncData(
	'rooms',
	async () => {
		const { data } = await supabase
			.from('rooms')
			.select('*, participants(id, is_owner, profiles(*))')
			.filter('id', 'eq', route.params.id)
			.single()

		return data
	},
)

const is_owner = ref(false)

const roomChannel = supabase.channel(`player_${route.params.id}`)

function onChange() {
	roomChannel.send({
		type: 'broadcast',
		event: 'player',
		payload: {
			on_play: player.value?.getPlayerInstance().playing,
			current_time: player.value?.getPlayerInstance().currentTime,
		},
	})
}

// const realtimeResponseWatch = watch(realtimeResponse, () => {
// 	if (realtimeResponse.value?.on_play !== undefined && !is_owner) {
// 		const playerInstance = player.value?.getPlayerInstance()

// 		if (realtimeResponse.value.on_play)
// 			playerInstance.play()
// 		else playerInstance.pause()
// 	}

// 	if (realtimeResponse.value?.current_time !== undefined && !is_owner) {
// 		const playerInstance = player.value?.getPlayerInstance()

// 		playerInstance.currentTime = realtimeResponse.value.current_time
// 	}
// })

function getPlayerResponse(data: { current_time: number, on_play: boolean }) {
	const playerInstance = player.value?.getPlayerInstance()

	if (data.on_play)
		playerInstance?.play()
	else playerInstance?.pause()

	playerInstance.currentTime = data.current_time
}

const playerInstance = watchEffect(() => {
	if (!player.value?.getPlayerInstance())
		return false

	player.value.getPlayerInstance().on('play', onChange)
	player.value.getPlayerInstance().on('pause', onChange)
	player.value.getPlayerInstance().on('seeked', onChange)
})

onMounted(() => {
	roomChannel.on('broadcast', {
		event: 'player',
	}, res => getPlayerResponse(res.payload)).subscribe()

	is_owner.value = data.value?.participants?.find(p => p.is_owner)?.profiles?.id === user.value?.id
})

onUnmounted(() => {
	supabase.removeAllChannels()
	playerInstance()
})
</script>

<template>
	<div class="room-page">
		<LayoutHeader />

		<div class="wrapper">
			<div class="player-container">
				<ClientOnly>
					<SharedPlayer ref="player" :type="data?.platform" :video-id="getVideoID(data?.url)"
						class="h-2/3 rounded-2xl overflow-hidden" :is-owner="is_owner" />

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

				<RoomChat />
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
