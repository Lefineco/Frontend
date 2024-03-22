<script setup lang="ts">
const suggestions = [
	{ id: 'youtube', label: 'YouTube', icon: 'i-simple-icons-youtube' },
	{ id: 'vimeo', label: 'Vimeo', icon: 'i-simple-icons-vimeo', disabled: true },
	{ id: 'custom', label: 'Custom', icon: 'i-ph-film-reel-fill', disabled: true },
]

const currentSearchablePlatform = ref(suggestions.at(0))

const isOpen = defineModel<boolean>()
</script>

<template>
	<Teleport to="body">
		<UModal v-model="isOpen">
			<UCard class="min-h-64" :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800/50', body: { padding: 'sm:pb-4 sm:px-2 sm:pt-0' } }">
				<div class="flex gap-2 items-center">
					<UInput class="w-full" icon="i-ph-magnifying-glass-bold" placeholder="Search, Video or Movie" size="sm" />
					<USelectMenu v-model="currentSearchablePlatform" :options="suggestions" placeholder="Platform" />
				</div>

				<!-- <div class="h-full flex flex-col items-center justify-center pt-2 text-white/30">
					<span class="i-ph-video-fill h-12 w-12" />

				</div> -->
				<div class="h-full flex flex-col items-center justify-center pt-12 text-white/30">
					<span class="i-ph-video-fill h-12 w-12" />

					<div class="text-sm font-medium">
						Video or movie not found :(
					</div>
				</div>
			</UCard>
		</UModal>
	</Teleport>
</template>
