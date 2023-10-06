<script setup lang="ts">
import { useFuse } from '@vueuse/integrations/useFuse'

interface Props {
  search: string
}
const { search } = defineProps<Props>()

const friends = [
  { friend: 'Emre Yıldız' },
  { friend: 'Fikret Orman' },
  { friend: 'Serdar Dikme' },
  { friend: 'Cimili İbo' },
  { friend: 'Volkan Konak' },
  { friend: 'Fatih Terim' },
  { friend: 'Furkan Erdoğan' },
  { friend: 'Özde Gürhan' },
  { friend: 'Taner' },
  { friend: 'Cansu Altun' },
  { friend: 'Fatih Yıldız' },
]

const filteredFriends = computed(() => {
  const { results } = useFuse(search, friends || [], {
    fuseOptions: {
      keys: ['friend'],
    },
    resultLimit: 8,
    matchAllWhenSearchEmpty: true,
  })
  return results.value
})
</script>

<template>
  <div v-if="filteredFriends.length === 0" class="text-">
    Sonuç bulunamadı
  </div>
  <div
    v-for="(friend, index) in filteredFriends"
    :key="index"
    class="flex justify-between items-center bg-gray-600 p-2 rounded-lg"
  >
    <div class="flex items-center justify-center gap-2">
      <UAvatar
        size="lg"
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
      />
      <span>{{ friend.item.friend }}</span>
    </div>
    <UCheckbox />
  </div>
</template>

<style scoped></style>
