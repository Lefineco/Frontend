<script setup lang="ts">
interface Props {
  name: string
  avatar?: string
  source: string
  createDate: string
  description: string
}

withDefaults(defineProps<Props>(), {
  name: 'Cansu Altun',
  avatar: '',
  source: '',
  viewers: '',
  description: 'Selamlar , Ben deneme yazısıyım :)',
  createDate: '2 Days Ago',
})
</script>

<template>
  <div class="w-full p-5 flex flex-col gap-4 rounded-3xl bg-white/5 border border-white/5">
    <div class="flex justify-between">
      <div class="flex gap-2 items-center">
        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          size="xl"
        />
        <div>
          <p class="text-lg">
            {{ name }}
          </p>
          <p class="text-xs text-gray-500">
            Recommended
          </p>
        </div>
      </div>
      <p class="text-sm text-[#ffffff80]">
        {{ createDate }}
      </p>
    </div>
    <p class="text-sm">
      {{ description }}
    </p>
    <div class="flex flex-wrap items-center justify-center gap-4">
      <img
        class="h-60 flex-1 object-cover rounded-3xl"
        src="@/assets/testimage.svg"
      >
      <img
        class="h-60 flex-1 object-cover rounded-3xl"
        src="@/assets/testimage.svg"
      >
    </div>
    <div>
      <UButton variant="ghost" color="white" icon="i-ph-heart" label="154" />
      <UButton variant="ghost" color="white" icon="i-ph-chat-teardrop-dots" label="40" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>

</style>
