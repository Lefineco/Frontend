<script setup lang="ts">
const user = useSupabaseUser()

computed(() => {
	if (user.value)
		reloadNuxtApp({ force: true })
})
</script>

<template>
	<div class="lefine">
		<div class="wrapper">
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</div>

		<SharedNotification />
	</div>
</template>

<style lang="postcss" scoped>
.lefine {
	@apply h-full flex flex-col;

	.wrapper {
		@apply h-full w-full;
	}
}
</style>
