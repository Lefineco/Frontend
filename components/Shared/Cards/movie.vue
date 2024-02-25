<script setup lang="ts">
import { useImageIsLoaded } from '~/composables/helper'
import { PLATFORM } from '~/constants/general'
import type { Platform } from '~/server/types'
import type { Movie } from '~/server/types/tmbd'

interface Props {
	data: Movie
}

const props = defineProps<Props>()
const router = useRouter()
const imgIsLoaded = ref(false)

const image = `https://image.tmdb.org/t/p/w500/${props.data.backdrop_path}` || ''
onMounted(async () => {
	const img = document.createElement('img')

	img.src = image || ''

	imgIsLoaded.value = await useImageIsLoaded(image || '')
})
</script>

<template>
	<UButton class="button group p-0 hover:!rounded-b-0" variant="ghost" color="white" @click="router.push(`/rooms/${props.data.id}`)">
		<div class="relative w-full gap-2 pt-4 px-4">
			<div class="video-img-container">
				<NuxtImg class="video-img" :src="imgIsLoaded ? image : 'room_thumbnail.png'" loading="lazy" preload />
				<span class="play opacity-0 group-hover:opacity-100">
					<UIcon name="i-ph-play-fill" class="w-8 h-8" />
				</span>
			</div>
		</div>
		<div class="transition-all duration-100 scale-90 group-hover:scale-100 opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 bg-white/5 w-full text-left flex flex-col mt-2 gap-2 text-sm absolute max-h-sm pt-2 px-5 pb-5 rounded-b-3xl bottom-[-72px]">
			{{ props.data.title }}
			<div class="text-xs text-white/50 truncate">
				{{ props.data.overview }}
			</div>
		</div>
	</UButton>
</template>

<style lang="postcss" scoped>
.button {
	@apply relative rounded-t-3xl transition-all duration-200 hover:z-10 hover:scale-110 hover:bg-white/5 flex flex-col items-center justify-center;

	.video-img-container {
		@apply relative overflow-hidden rounded-2xl h-48 w-full after:content-[''] after:absolute after:inset-0 after:bg-black/60;

		.video-img {
			@apply w-full h-full object-cover rounded-[20px];
		}
	}
	.play {
		@apply transition-opacity duration-300 pointer-events-none absolute z-10 top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2;
	}

	.button-header {
		@apply w-full flex justify-between py-2 px-2;
	}

	.button-info-container {
		@apply flex items-center justify-center gap-3;
	}
}
</style>
