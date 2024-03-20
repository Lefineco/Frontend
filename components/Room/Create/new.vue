<script setup lang="ts">
const suggestions = [
	{ id: 'youtube', label: 'YouTube', icon: 'i-simple-icons-youtube' },
	{ id: 'vimeo', label: 'Vimeo', icon: 'i-simple-icons-vimeo' },
]

const isOpen = defineModel<boolean>()
</script>

<template>
	<Teleport to="body">
		<UModal v-model="isOpen">
			<UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800/50' }">
				<UInput icon="i-ph-magnifying-glass-bold" placeholder="Search, Video or Movie" size="md" />
				<div class="flex gap-4 flex-shrink-1">

					<UButton v-for="item in suggestions" :key="item.id" :icon="item.icon" class="mt-2 w-full inline-flex flex-shrink-1" color="white" variant="soft" size="xl" />
				</div>
			</UCard>
		</UModal>
	</Teleport>
</template>
