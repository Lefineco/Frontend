<script setup lang="ts">
import { useJoinRoom, useLeaveRoom } from '~/composables/service/room'
import type { Database } from '~/server/types/supabase'

const route = useRoute<'rooms-id'>()
const supabase = useSupabaseClient<Database>()
const user = useSupabaseUser()
const profile = ref()
const participants = ref()

const participantsPresence = supabase.channel(route.params.id)

const userPresence = {
	user_id: user.value?.id,
	room_id: route.params.id,
	online_at: new Date().toISOString(),
}

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

	participantsPresence.on('presence', { event: 'sync' }, () => {
		const newState = participantsPresence.presenceState()
		console.log('sync', newState)
	}).subscribe(async (status) => {
		if (status !== 'SUBSCRIBED')
			return

		participantsPresence.track(userPresence)
	})

	window.addEventListener('unload', () => {
		participantsPresence.untrack()
	})
})
</script>

<template>
	<UAvatarGroup size="sm" :max="2">
		<template v-for="participant in participants" :key="participant.id">
			<UAvatar
				v-if="participant.profiles" size="sm" :src="participant.profiles.avatar_url || ''"
				:alt="participant.profiles.full_name || ''"
			/>
		</template>
	</UAvatarGroup>
</template>
