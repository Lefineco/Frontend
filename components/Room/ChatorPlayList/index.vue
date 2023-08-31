<script setup lang="ts">
const items = [{
  label: 'Chat',
  slot: 'Chat',
}, {
  label: 'Play List',
  slot: 'PlayList',
}]
</script>

<template>
  <UTabs class="flex flex-col h-full gap-2" :items="items" :ui="{ container: '!m-0 h-[calc(100%-48px)]', base: 'h-full' }">
    <template #Chat>
      <RoomChatorPlayListChat />
    </template>

    <template #PlayList>
      <RoomChatorPlayListPlayList />
    </template>
  </UTabs>
</template>
