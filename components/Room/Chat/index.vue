<script lang="ts" setup>
import type { Undefinable } from '@0fatihyildiz/fast-ts-utilities'

interface Props {
  roomId: Undefinable<string>
}

interface MessageProps {
  uuid: string
  message: string
}

const props = defineProps<Props>()

const Message = defineComponent(({ message }: MessageProps) => {
  return () =>
    h(
      'div',
      { class: 'message' },
      message,
    )
})
</script>

<template>
  <div class="chat">
    <div class="w-full h-full overflow-y-scroll px-4">
      <!-- ... -->
      <!-- <div
        class=""
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quisquam fugit sunt sed ea ex. Explicabo distinctio modi rem assumenda!
      </div> -->
      <Message />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.chat {
  @apply flex flex-col w-full h-full py-4 overflow-y-scroll;

  .message {
    @apply ms-auto relative flex text-sm items-center
    after:relative after:right-0 after:bottom-[-14px]
    after:text-gray-500 after:text-xs after:content-[attr(data-current-time)]
    w-fit gap-2 px-5 py-2.5 rounded-3xl bg-purple-400/20;
  }
}
</style>
