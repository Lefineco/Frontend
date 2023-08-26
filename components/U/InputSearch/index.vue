<script setup lang="ts">
const val = defineModel<string>()
</script>

<template>
  <UInput
    v-model="val"
    size="sm"
    icon="i-heroicons-magnifying-glass-20-solid"
    :ui="{ icon: { trailing: { pointer: '' } } }"
  >
    <template #trailing>
      <UButton
        v-show="val"
        color="gray"
        variant="link"
        icon="i-heroicons-x-mark-20-solid"
        :padded="false"
        @click="val = ''"
      />
    </template>
  </UInput>
</template>
