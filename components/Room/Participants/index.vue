<script setup lang="ts">
import type { RealtimeChannel } from '@supabase/supabase-js'
import { useJoinRoom, useLeaveRoom } from '~/composables/service/room'
import type { Database } from '~/server/types/supabase'

const route = useRoute<'rooms-id'>()
const supabase = useSupabaseClient<Database>()
const user = useSupabaseUser()
const profile = ref()
const participants = ref()

let roomChannel: RealtimeChannel

async function getParticipants() {
	const { data } = await supabase
		.from('participants')
		.select('id, is_owner, profiles(*)')
		.filter('room_id', 'eq', route.params.id)

	return data
}

if (user.value) {
	const { data } = await supabase
		.from('participants')
		.select('is_owner, profiles(*)')
		.filter('user_id', 'eq', user.value.id)
		.filter('room_id', 'eq', route.params.id)
		.single()

	profile.value = data
}

onMounted(async () => {
	participants.value = await getParticipants()

	roomChannel = supabase
		.channel(`participants_${route.params.id}`)
		.on(
			'postgres_changes',
			{
				event: '*',
				schema: 'public',
				table: 'participants',
				filter: `room_id=eq.${route.params.id}`,
			},
			async () => {
				participants.value = await getParticipants()
			},
		)
		.subscribe()

	if (profile.value)
		return

	useJoinRoom(route.params.id, user.value?.id, false)
})

onUnmounted(() => {
	useLeaveRoom(route.params.id, user.value?.id)
	supabase.removeChannel(roomChannel)
})
</script>

<template>
	<UPopover :popper="{ placement: 'bottom-end' }">
		<UButton
			color="black"
			label=""
			trailing-icon="i-ph-caret-down"
		>
			<UAvatarGroup size="sm" :max="2">
				<template v-for="participant in participants" :key="participant.id">
					<UAvatar
						v-if="participant.profiles"
						size="sm"
						:src="participant.profiles.avatar_url || ''"
						:alt="participant.profiles.full_name || ''"
					/>
				</template>
			</UAvatarGroup>
		</UButton>
		<template #panel>
			<div class="p-4 flex gap-3 flex-col">
				<div
					v-for="participant in participants"
					:key="participant.id"
					class="flex gap-3 items-center"
				>
					<UAvatar
						v-if="participant.profiles"
						:src="participant.profiles.avatar_url || ''"
						:alt="participant.profiles.full_name || ''"
					/><span class="w-36 truncate">
						{{ participant.profiles.full_name }}
					</span>
				</div>
			</div>
		</template>
	</UPopover>
</template>
