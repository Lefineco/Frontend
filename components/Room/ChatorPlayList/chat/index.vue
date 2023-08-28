<script setup lang="ts">
const messageData = reactive([
  {
    message: 'heleley',
    uuid: 'berke',
  },
  {
    message: 'heleley',
    uuid: 'berke',
  },
  {
    message: 'heleley',
    uuid: 'asd',
  },
])
const chatContainerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (chatContainerRef.value)
    chatContainerRef.value.scrollTop = chatContainerRef.value.scrollHeight
})

function scrollToBottom() {
  if (chatContainerRef.value)
    chatContainerRef.value.scrollTop = chatContainerRef.value.scrollHeight
}

function veriyiAl(veri: { message: string; uuid: string }) {
  messageData.push({ ...veri })
  scrollToBottom()
}
</script>

<template>
  <div class="flex flex-col justify-between max-h-[600px] h-full  ">
    <div ref="chatContainerRef" class="relative flex flex-col gap-7 overflow-scroll">
      <RoomChatorPlayListChatMessage v-for="(item, idx) in messageData" :key="idx" class=".chat-container" :message="item.message" :uuid="item.uuid" />
    </div>
    <RoomChatorPlayListChatInput @message="veriyiAl" />
  </div>
</template>

<style scoped>

</style>
