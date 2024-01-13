<script setup lang="ts">
const val = defineModel<string>()
</script>

<template>
	<UInput
		v-model="val"
		size="sm"
		icon="i-ph-magnifying-glass"
		:ui="{ icon: { trailing: { pointer: '' }, rounded: 'rounded-3xl' } }"
	>
		<template #trailing>
			<UButton
				v-show="val"
				color="gray"
				variant="link"
				icon="i-ph-x-bold"
				:padded="false"
				@click="val = ''"
			/>
		</template>
	</UInput>
</template>
