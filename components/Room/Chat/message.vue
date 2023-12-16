<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import type { TableRows } from '~/server/types'

interface Props {
  data: {
    created_at: string
    id: number
    message: string | null
    participants:
    | (string & {
      id: string
      users: TableRows<'users'> | null
    })
    | null
  }
}

const { data } = defineProps<Props>()

const user = useSupabaseUser()

const me = data?.participants?.id === user?.value?.id

const timeAgo = useTimeAgo(new Date(2021, 0, 1))
</script>

<template>
  <div
    :data-current-time="timeAgo"
    :class="twMerge('message', me ? 'me' : 'you')"
  >
    {{ data.message }}
    {{ data?.participants?.id }}
  </div>
</template>

<style lang="postcss" scoped>
.message {
  @apply text-sm after:text-xs w-fit gap-2 px-5 py-2.5 rounded-3xl;
  &.me {
    @apply bg-purple-400/20 float-right;
  }
  &.you {
    @apply rounded-bl-md after:right-0 bg-gray-700/80 float-left;
  }
}
</style>
