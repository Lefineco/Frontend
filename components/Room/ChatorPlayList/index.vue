<script setup lang="ts">
const items = [{
  label: 'Chat',
  slot: 'Chat',
}, {
  label: 'Play List',
  content: 'Play List',
}]
</script>

<template>
  <div class="flex flex-col px-4 h-full">
    <UTabs class="h-full" :items="items" :ui="{ container: 'relative w-full h-full', base: 'w-full h-full' }">
      <template #Chat>
        <RoomChatorPlayListChat />
      </template>
    </UTabs>
  </div>
</template>
