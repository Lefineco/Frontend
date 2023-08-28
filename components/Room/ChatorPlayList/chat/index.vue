<script setup lang="ts">
const messageData = reactive([

])

function veriyiAl(veri: { message: string; uuid: string }) {
  messageData.push({ ...veri })
}
</script>

<template>
  <div class="flex flex-col justify-between max-h-[600px] h-full  ">
    <div class="relative flex flex-col gap-7 overflow-scroll">
      <RoomChatorPlayListChatMessage v-for="(item, idx) in messageData" :key="idx" :message="item.message" :uuid="item.uuid" />
    </div>
    <RoomChatorPlayListChatInput @message="veriyiAl" />
  </div>
</template>

<style scoped>

</style>
