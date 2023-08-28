<script setup lang="ts">
const emit = defineEmits(['message'])
const inputValue = ref('')

const dataset = computed(() => ({
  message: inputValue.value,
  uuid: 'berke',
}))

function sendData() {
  if (inputValue.value !== '') {
    emit('message', dataset.value)
    inputValue.value = ''
  }
}
</script>

<template>
  <div>
    <UInput v-model="inputValue" variant="solid" placeholder="Write Something..." :ui="{ icon: { trailing: { pointer: '' }, leading: { pointer: '' } } }" class="!px-12" @keyup.enter="sendData">
      <template #leading>
        <UButton class="text-gray-600" variant="text" icon="i-ph-smiley" />
      </template>
      <template #trailing>
        <UButton class="text-gray-600 hover:text-white" variant="text" icon="i-ph-paper-plane-tilt-fill" @click="sendData" />
      </template>
    </UInput>
  </div>
</template>

<style scoped>

</style>
