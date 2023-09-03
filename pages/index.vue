<script setup lang="ts">
const rooms = ref<any>([])
const supabase = useSupabaseClient()

async function fetchParticipants() {
  const { data } = await supabase
    .from('rooms')
    .select('*, participants(*)')

  rooms.value = data
}

onMounted(fetchParticipants)
</script>

<template>
  <div class="page">
    <div class="p-5 w-full">
      <HomeBanner />
    </div>
    <div class="p-5 w-full">
      <div class="flex justify-between items-start">
        <p class="text-md md:text-xl">
          Popular Live Rooms
        </p>
        <UButton
          to="/rooms"
          trailing
          variant="secondary"
          icon="i-ph-arrow-right"
        >
          Daha Fazla
        </UButton>
      </div>
      <div class="py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <CardsRoom v-for="(item, idx) in rooms" :key="idx" :data="item" />
      </div>
    </div>
    <!-- <div class="p-5 w-full">
      <div class="flex justify-between items-start">
        <p class="text-md md:text-xl">
          Recommended Lefiners
        </p>
        <UButton to="/lefiners"  trailing variant="secondary" icon="i-ph-arrow-right">
          Daha Fazla
        </UButton>
      </div>
      <div class="py-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-4">
        <CardsProfile />
      </div>
    </div>

    <div class="p-5 w-full">
      <div class="flex justify-between items-start">
        <p class="text-md md:text-xl break-words tracking-wide">
          Recommended Videos
        </p>
        <UButton to="/videos" trailing variant="secondary" icon="i-ph-arrow-right">
          Daha Fazla
        </UButton>
      </div>
      <div class=" py-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
        <CardsVideos />
      </div>
    </div> -->
  </div>
</template>

<style scoped></style>
