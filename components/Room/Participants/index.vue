<script setup lang="ts">
import { useJoinRoom, useLeaveRoom } from '~/composables/service/room'
import type { TableRows } from '~/server/types'
import type { Database } from '~/server/types/supabase'

interface Props {
  participants: {
    id: string
    is_owner: boolean | null
    profiles: TableRows<'profiles'> | null
  }[] | null
}

defineProps<Props>()

const route = useRoute<'rooms-id'>()
const supabase = useSupabaseClient<Database>()
const user = useSupabaseUser()
const profile = ref()

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
  if (profile.value)
    return

  useJoinRoom(route.params.id, user.value?.id, false)
})

onUnmounted(() => {
  useLeaveRoom(route.params.id, user.value?.id)
})
</script>

<template>
  <UAvatarGroup size="sm" :max="3">
    <template v-for="participant in participants" :key="participant.id">
      <UAvatar
        v-if="participant.profiles"
        :src="participant.profiles.avatar_url || ''"
        :alt="participant.profiles.full_name || ''"
      />
    </template>
    <template v-if="participants?.length ?? 0 <= 2">
      <UAvatar v-for="i in 3 - (participants?.length ?? 0)" :key="i" />
    </template>
  </UAvatarGroup>
</template>

<style scoped></style>
