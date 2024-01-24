<script setup lang="ts">
const value = ref('')
</script>

<template>
	<div class="container">
		<UTextarea
			v-model="value" variant="none" :ui="{
				variant: {
					none: 'text-sm font-medium focus:ring-2 focus:ring-violet-500 p-4 rounded-t-3xl rounded-b-none',
				},
			}" placeholder="Write something or ask..."
		/>
		<hr class="divider">

		<div class="footer">
			<div>
				<UButton variant="ghost" color="white" icon="i-ph-image-square-fill" label="Add Photo" />
				<UButton variant="ghost" color="white" icon="i-ph-calendar" label="Create Activity" />
			</div>
			<UButton>Create Feed</UButton>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.container {
	@apply w-full flex flex-col rounded-3xl bg-white/5
}

.divider {
	@apply border-white/5
}

.footer {
	@apply flex items-center justify-between p-4
}
</style>
