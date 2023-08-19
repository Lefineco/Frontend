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
  <div class="px-4">
    <UTabs class="h-full" :items="items">
      <template #Chat>
        <RoomChatorPlayListChat />
      </template>
    </UTabs>
  </div>
</template>
