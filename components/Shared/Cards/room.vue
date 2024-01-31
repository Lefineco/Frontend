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
	const img = document.createElement('img')

	img.src = props.data.thumbnail || ''

	imgIsLoaded.value = await useImageIsLoaded(image || '')
})
</script>

<template>
	<UButton class="button" variant="ghost" color="white" @click="router.push(`/rooms/${props.data.id}`)">
		<div class="button-header">
			<div class="button-info-container">
				<UAvatar :src="owner?.profiles?.avatar_url || ''" size="xs" :alt="ownerName" class="user-avatar" />
				<span class="provide-text">
					<span class="provide-text-user-name">Provide by</span>
					{{ ownerName.split(' ')[0] }}
				</span>
			</div>
			<UIcon :name="PLATFORM[props.data.platform as Platform]" class="w-16 h-4" />
		</div>
		<div class="relative w-full">
			<div class="video-img-container">
				<NuxtImg class="video-img" :src="imgIsLoaded ? image : 'room_thumbnail.png'" loading="lazy" preload />
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
	@apply relative rounded-3xl transition-all duration-200 hover:z-10 hover:scale-110 hover:bg-white/5 flex flex-col items-center justify-center;

	.button-header {
		@apply w-full flex justify-between py-2 px-2;
	}

	.button-info-container {
		@apply flex items-center justify-center gap-3;
	}
}

.user-avatar {
	@apply relative border border-white z-10 after:-z-10 after:content-[''] after:absolute after:inset-0 after:bg-white/20 after:rounded-full after:animate-ping;

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
