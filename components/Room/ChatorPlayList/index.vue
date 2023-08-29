<script setup lang="ts">
const items = [{
  label: 'Chat',
  slot: 'Chat',
}, {
  label: 'Play List',
  slot: 'PlayList',
}]
</script>

<!-- h-[calc(100%-48px)] -->
<!-- , list: { base: '!h-[10%]' } -->
<template>
  <UTabs class="flex flex-col h-full gap-2 justify-between" :items="items" :ui="{ container: 'relative w-full h-full !m-0', base: 'h-full' }">
    <template #Chat>
      <RoomChatorPlayListChat />
    </template>

    <template #PlayList>
      <RoomChatorPlayListPlayList />
    </template>
  </UTabs>
</template>
