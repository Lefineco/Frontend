<script setup lang="ts">
import type { MenuPlacement, TooltipPlacement } from 'vidstack'

const { placement, tooltipPlacement } = defineProps<{
	placement: MenuPlacement
	tooltipPlacement: TooltipPlacement
}>()
</script>

<template>
	<RoomPlayerMenusMenu :placement="placement" :tooltip-placement="tooltipPlacement">
		<template #button>
			<media-icon
				class="h-8 w-8 transform transition-transform duration-200 ease-out group-data-[open]:rotate-90"
				type="settings"
			/>
		</template>
		<template #content>
			<RoomPlayerMenusCaptionSubmenu />
		</template>
		<template #tooltip-content>
			<span>Settings</span>
		</template>
	</RoomPlayerMenusMenu>
</template>
