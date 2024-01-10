<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import type { GroupedMessages } from './index.vue'

interface Props {
  data: GroupedMessages
}

const props = defineProps<Props>()
const user = useSupabaseUser()
const me = props.data[0] === user?.value?.id
const timeAgo = (time: string) => useTimeAgo(new Date(time)).value
</script>

<template>
  <div class="messageGroup" :class="twMerge('message', me ? 'me' : 'you')">
    <UAvatar
      v-if="!me"
      :src="props.data[1][0].avatar_url || ''"
      size="xs"
      :rounded="true"
      :ui="{ base: 'inline-block' }"
      class="sticky top-0"
    />
    <TransitionGroup name="message" tag="div" class="messageWrapper">
      <template v-for="messages in props.data[1]" :key="messages.id">
        <div
          v-if="messages.message"
          :data-current-time="timeAgo(messages.created_at)"
          :class="twMerge('message', me ? 'me' : 'you')"
        >
          {{ messages.message }}
        </div>
      </template>
    </TransitionGroup>
  </div>
</template>

<style lang="postcss" scoped>
.messageGroup {
  @apply flex relative gap-2;

  .messageWrapper {
    @apply flex flex-col gap-2 max-w-[80%] w-full overflow-hidden;
  }
  &.me {
    @apply flex-row-reverse;

    .messageWrapper {
      @apply items-end;
      .message {
        @apply bg-purple-400/20 first:rounded-tr-3xl first:rounded-br-xl last:rounded-br-3xl last:rounded-tr-xl rounded-r-xl rounded-l-3xl;
      }
    }
  }
  &.you {
    @apply flex-row;

    .messageWrapper {
      @apply items-start;
      .message {
        @apply after:right-0 bg-gray-700/80 first:rounded-tl-3xl first:rounded-bl-xl last:rounded-bl-3xl last:rounded-tl-xl rounded-l-xl rounded-r-3xl;
      }
    }
  }

  .message {
    @apply transition-all text-sm after:text-xs gap-2 px-5 py-2.5 max-w-full break-all;
  }
}
</style>
