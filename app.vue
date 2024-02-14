<script setup lang="ts">
const user = useSupabaseUser()

computed(() => {
	if (user.value)
		reloadNuxtApp({ force: true })
})
</script>

<template>
		<div class="application">
			<NuxtLayout>
				<NuxtPage />
				<SharedNotification />
			</NuxtLayout>
		</div>
</template>

<style lang="postcss" scoped>
.application {
	@apply h-full flex flex-col;
}
</style>