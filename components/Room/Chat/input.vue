<script setup lang="ts">
interface Props {
  sendMessage: (message: string) => void
}

const props = defineProps<Props>()

const messageVal = ref('')

async function sendData() {
  props.sendMessage(messageVal.value)

  if (messageVal.value !== '')
    messageVal.value = ''
}
</script>

<template>
  <div class="px-4">
    <UInput
      v-model="messageVal"
      variant="solid"
      placeholder="Write Something..."
      size="md"
      :ui="{ base: '!px-12 !text-sm', icon: { trailing: { pointer: '' }, leading: { pointer: '' } } }"
      @keyup.enter="sendData"
    >
      <template #leading>
        <UButton variant="soft" color="white" icon="i-ph-smiley" />
      </template>
      <template #trailing>
        <UButton variant="soft" color="white" icon="i-ph-paper-plane-tilt-fill" @click="sendData" />
      </template>
    </UInput>
  </div>
</template>

<style scoped>

</style>
