<script lang="ts" setup>
import type { PlayerListenEvents } from '~/components/Room/Player/index.vue'
import { getVideoID } from '~/composables/helper'
import type { Database } from '~/server/types/supabase'
import type { BrodcastResponse } from '~/store/player'
import { usePlayerStore } from '~/store/player'

definePageMeta({
	layout: 'blank',
})

const route = useRoute<'rooms-id'>()
const user = useSupabaseUser()
const supabase = useSupabaseClient<Database>()
const playerStore = usePlayerStore()

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

const roomChannel = supabase.channel(`player_${route.params.id}`)

function onChange({ play, currentTime }: PlayerListenEvents) {
	if (!playerStore.isOwner)
		return

	roomChannel.send({
		type: 'broadcast',
		event: 'player',
		payload: {
			on_play: play,
			current_time: currentTime,
			type: playerStore.eventType,
		},
	})
}

function getPlayerResponse(data: BrodcastResponse) {
	playerStore.brodcastResponse = data

	if (playerStore.isOwner)
		return

	if (data.on_play && playerStore.isSynced)
		playerStore.remote?.play()
	else
		playerStore.remote?.pause()

	if (data.type)
		playerStore.remote?.seek(data.current_time)
}

onMounted(() => {
	roomChannel
		.on('broadcast', { event: 'player' }, res =>
			getPlayerResponse(res.payload))
		.subscribe((status) => {
			if (status !== 'SUBSCRIBED')
				return playerStore.isSynced = false
			else if (status === 'SUBSCRIBED')
				return playerStore.isSynced = true
		})

	playerStore.isOwner = data.value?.participants.find(p => p.is_owner)?.profiles?.id === user.value?.id
})

onUnmounted(() => {
	supabase.removeAllChannels()
})
</script>

<template>
	<div class="room-page">
		<LayoutHeader is-room-header />

		<div class="wrapper">
			<div class="player-container">
				<ClientOnly>
					<RoomPlayer
						:id="getVideoID(data?.url)" :type="data?.platform" :thumbnail="data?.thumbnail"
						@change="onChange"
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

				<RoomChat />
			</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.room-page {
	@apply flex flex-col h-[100vh] w-full;

	.wrapper {
		@apply max-w-[1700px] mx-auto flex flex-col lg:flex-row overflow-hidden h-full w-full p-6 gap-8;

		.player-container {
			@apply w-full;
		}

		.chat-container {
			@apply flex flex-col h-full w-full lg:w-1/3 bg-white/5 rounded-2xl;

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
