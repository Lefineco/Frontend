<script setup lang="ts">
import { PLATFORM } from '~/constants/general'
</script>

<template>
	<div class="logo-cloud">
		<h2 class="logo-cloud__title">
			Platforms available on Lefine
		</h2>
		<div class="logo-cloud__logos">
			<UIcon v-for="(name, index) in Object.values(PLATFORM)" :key="index" :name="name" class="w-28 h-6 mx-auto" />
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.logo-cloud {
	@apply mx-auto max-w-5xl px-6 lg:px-8;

	&__title {
		@apply text-center text-lg font-semibold leading-8 opacity-40;
	}

	&__logos {
		@apply mx-auto mt-10 grid max-w-lg items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-3 lg:mx-0 lg:max-w-none;
	}
}
</style>
