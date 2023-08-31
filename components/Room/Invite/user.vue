<script setup lang="ts">
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
const filteredFriends = ref(friends)

watch(() => search, () => {
  const lowerCaseSearch = search.toLowerCase()
  filteredFriends.value = friends.filter(friend => friend.friend.toLowerCase().includes(lowerCaseSearch))
})
</script>
//TODO useFuse Olarak Yapılacak

<template>
  <div v-if="filteredFriends.length === 0" class="text-">
    Sonuç bulunamadı
  </div>
  <div v-for="(friend, index) in filteredFriends" :key="index" class="flex justify-between items-center bg-gray-600 p-2 rounded-lg">
    <div class="flex items-center justify-center gap-2">
      <UAvatar size="lg" src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
      <span>{{ friend.friend }}</span>
    </div>
    <UCheckbox />
  </div>
</template>

<style scoped>

</style>
