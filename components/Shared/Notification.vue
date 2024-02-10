<script setup lang="ts">
import type { NotificationType } from 'notivue'

interface StatusItem {
	color: 'green' | 'red' | 'blue' | 'yellow' | 'white'
	icon: string
}

type Status = {
	[key in NotificationType]: StatusItem;
}

const STATUS: Status = {
	'success': {
		color: 'green',
		icon: 'i-ph-check-circle-fill',
	},
	'error': {
		color: 'red',
		icon: 'i-ph-warning-circle-fill',
	},
	'info': {
		color: 'blue',
		icon: 'i-ph-info-fill',
	},
	'warning': {
		color: 'yellow',
		icon: 'i-ph-warning-fill',
	},
	'promise': {
		color: 'white',
		icon: '',
	},
	'promise-resolve': {
		color: 'green',
		icon: 'i-ph-check-circle-fill',
	},
	'promise-reject': {
		color: 'red',
		icon: 'i-ph-warning-circle-fill',
	},
}
</script>

<template>
	<Notivue v-slot="item">
		<UAlert
			:color="STATUS[item.type].color" class="w-96" :title="(item.title as string)"
			:description="(item.message as string)" 
			:icon="STATUS[item.type].icon" 
			:close-button="{
				icon: 'i-ph-x',
				color: 'white',
				variant: 'soft',
			}"
			@close="item.destroy"
		>
			<template #description>
				<div class="description">
					{{ item.message }}
					<UProgress v-if="item.type === 'promise'" class="mt-1" animation="carousel" size="sm" />
				</div>
			</template>
		</UAlert>
	</Notivue>
</template>

<style lang="postcss" scoped>
.description {
	@apply flex flex-col gap-2;
}
</style>
