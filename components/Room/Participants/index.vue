<script setup lang="ts">
import { useJoinRoom } from '~/composables/service/room'
import type { TableRows } from '~/server/types'
import type { Database } from '~/server/types/supabase'

const route = useRoute<'rooms-id'>()
const supabase = useSupabaseClient<Database>()
const user = useSupabaseUser()
const participants = ref()
const myPresence = ref()
const isOwner = ref(false)

const participantsPresence = supabase.channel(`presence_${route.params.id}`)

const userPresence = {
	user_id: user.value?.id,
	room_id: route.params.id,
	online_at: new Date().toISOString(),
	profiles: {
		name: user.value?.user_metadata.full_name,
		avatar_url: user.value?.user_metadata.avatar_url,
	},
	isOwner: isOwner.value,
}

onMounted(async () => {
	if (user.value) {
		const { data } = await supabase
			.from('participants')
			.select('is_owner, profiles(*)')
			.filter('user_id', 'eq', user.value.id)
			.filter('room_id', 'eq', route.params.id)
			.single()

		myPresence.value = data
		isOwner.value = Boolean(data?.is_owner)
	}

	participantsPresence.on('presence', { event: 'sync' }, () => {
		const newState = participantsPresence.presenceState()
		participants.value = Object.values(newState).map(value => value[0])
	}).subscribe(async (status) => {
		if (status !== 'SUBSCRIBED')
			return

		participantsPresence.track(userPresence)

		if (!myPresence.value)
			useJoinRoom(route.params.id, user.value?.id, (isOwner.value ? true : !participants.value?.length))
	})

	window.addEventListener('unload', () => {
		participantsPresence.untrack()
	})
})

onUnmounted(() => {
	supabase.removeChannel(participantsPresence)
})
</script>

<template>
	<UAvatarGroup size="sm" :max="2">
		<template v-for="participant in participants" :key="participant.presence_ref">
			<UAvatar
				v-if="participant.profiles" size="sm" :src="participant.profiles.avatar_url || ''"
				:alt="participant.profiles.name || ''"
			/>
		</template>
	</UAvatarGroup>
</template>
