<script setup lang="ts">
const emit = defineEmits(['closeModals'])
const isOpen = false
function closeModal() {
  emit('closeModals', isOpen)
}
const inputValues = ref('http://localhost:3000/rooms/1')
const copiedText = ref('')
function copied() {
  navigator.clipboard.writeText(inputValues.value)
    .then(() => {
      copiedText.value = inputValues.value
    })
    .catch((error) => {
      console.error('Copy failed:', error)
    })
}
</script>

<template>
  <div>
    <div>
      <UCard
        :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' } "
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Invite Friends
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="closeModal"
            />
          </div>
        </template>
        <div class="mb-5">
          <p class="mb-2">
            You can copy this room link and share with friends.
          </p>
          <div class="flex  justify-between items-center bg-gray-700 py-1 px-2 rounded-xl">
            <p class="text-sm">{{ inputValues }}</p>
            <UButton variant="text" icon="i-ph-copy" @click="copied" />
          </div>
        </div>
   
        <div class="flex relative gap-5 flex-col overflow-scroll max-h-[350px] ">
          <RoomInviteUser />
        </div>
        <div class="flex  justify-end gap-3">
          <UButton>Invite</UButton>
          <UButton class="backdrop-blur-sm" variant="secondary" @click="closeModal">
            Cancel
          </UButton>
        </div>
      </UCard>
    </div>
  </div>
</template>

<style scoped>

</style>
