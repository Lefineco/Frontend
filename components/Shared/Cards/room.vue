<script setup lang="ts">
import { useImageIsLoaded } from '~/composables/helper'
import type { SupabaseRooms } from '~/pages/index.vue'
import type { ArrayElement, Platform } from '~/server/types'
import { PLATFORM } from '~/constants/general'

interface Props {
	data: ArrayElement<SupabaseRooms>
}

const props = defineProps<Props>()
const router = useRouter()
const imgIsLoaded = ref(false)

const owner = props.data.participants.find(
	participant => participant.is_owner,
)

const ownerName = owner?.profiles?.full_name || ''

const image = props.data.thumbnail || ''

onMounted(async () => {
	imgIsLoaded.value = await useImageIsLoaded(image || '')
})
</script>

<template>
	<UButton class="button group" variant="ghost" color="white" @click="router.push(`/rooms/${props.data.id}`)">
		<span class="play opacity-0 group-hover:opacity-100">
			<UIcon name="i-ph-play-fill" class="w-8 h-8" />
		</span>
		<div class="button-header">
			<div class="button-info-container">
				<UAvatar :src="owner?.profiles?.avatar_url || ''" size="xs" :alt="ownerName" />
				<span class="provide-text">
					<span class="provide-text-user-name">Provide by</span>
					{{ ownerName.split(' ')[0] }}
				</span>
			</div>
			<UIcon :name="PLATFORM[props.data.platform as Platform]" class="w-16 h-4" />
		</div>
		<div class="relative w-full">
			<div class="video-img-container">
				<NuxtImg class="video-img" :src="imgIsLoaded ? image : 'room_thumbnail.png'" quality="10" loading="lazy" preload />
			</div>
			<UAvatarGroup class="user-avatar-bottom" size="xs" :max="3">
				<UAvatar
					v-for="participant in props.data.participants" :key="participant.profiles?.id"
					:src="participant.profiles?.avatar_url || ''" :alt="participant.profiles?.full_name || ''"
				/>
			</UAvatarGroup>
		</div>
	</UButton>
</template>

<style lang="postcss" scoped>
.button {
	@apply relative rounded-3xl transition-all duration-200 hover:bg-white/5 flex flex-col items-center justify-center;

	.play {
		@apply transition-opacity duration-300 pointer-events-none absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4;
	}

	.button-header {
		@apply w-full flex justify-between py-2 px-2;
	}

	.button-info-container {
		@apply flex items-center justify-center gap-3;
	}
}

.provide-text {
	@apply text-sm text-left font-medium gap-1 w-36 truncate;

	.provide-text-user-name {
		@apply text-xs opacity-50 font-medium;
	}
}

.user-avatar-bottom {
	@apply absolute bottom-5 right-5 -space-x-1;
}

.video-img-container {
	@apply relative overflow-hidden rounded-2xl h-48 w-full after:content-[''] after:absolute after:inset-0 after:bg-black/60;

	.video-img {
		@apply w-full h-full object-cover rounded-[20px];
	}
}
</style>
