<script setup lang="ts">
const { label } = defineProps<{
	label: string
}>()
</script>

<template>
	<media-menu>
		<RoomPlayerMenusSubmenuButton :label="label">
			<template #icon>
				<slot name="icon" />
			</template>
		</RoomPlayerMenusSubmenuButton>
		<media-menu-items
			class="hidden w-full flex-col items-start justify-center outline-none data-[keyboard]:mt-[3px] data-[open]:inline-block"
		>
			<slot name="content" />
		</media-menu-items>
	</media-menu>
</template>
