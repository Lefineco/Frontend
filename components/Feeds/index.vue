<script setup lang="ts">
interface Props {
  name: string;
  avatar: string;
  source: string;
  createDate: string;
  description: string;
}
// defineProps<Props>()
withDefaults(defineProps<Props>(), {
  name: "Cansu Altun",
  avatar: "",
  source: "",
  viewers: "",
  description: "Selamlar , Ben deneme yazısıyım :)",
  createDate: "2 Days Ago",
});
</script>
<template>
  <div
    class="w-[800px] h-[400px] flex flex-col rounded-[30px] bg-[#7B7A7A1A] border border-[#7b7a7a1a]"
  >
    <div class="flex flex-row items-start p-2">
      <div class="flex flex-row justify-between w-full p-4">
        <div class="flex flex-row gap-2">
          <div>
            <UAvatar
              src="https://avatars.githubusercontent.com/u/739984?v=4"
              size="xl"
            />
          </div>
          <div class="flex flex-col">
            <span class="text-lg">{{ name }}</span>
            <span class="text-xs text-gray-500">Recommended</span>
          </div>
        </div>
        <div>
          <p class="text-sm text-[#ffffff80]">{{ createDate }}</p>
        </div>
      </div>
    </div>
    <div>
      <p class="text-sm !ml-[25px] mb-2">{{ description }}</p>
    </div>
    <div class="flex flex-row items-center justify-center space-x-4">
      <img
        class="h-[240px] object-cover rounded-md border !border-[#7b7a7a1a]"
        src="../../assets/testimage.svg"
      />
      <img
        class="h-[240px] object-cover rounded-md border !border-[#7b7a7a1a]"
        src="../../assets/testimage.svg"
      />
    </div>
  </div>
</template>
