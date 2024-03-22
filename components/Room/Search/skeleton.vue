<template>
	<div class="h-full flex flex-col items-center text-white/30 max-h-64 overflow-hidden pt-2 px-4 gap-1">
		<div
			v-for="i in 4" :key="i" class="w-full flex items-center gap-2 px-4 py-2"
			:style="{ opacity: (i / 4) * 1 }"
		>
			<USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-md' }" />

			<div class="w-full flex flex-col gap-2 items-start">
				<USkeleton class="h-3.5 w-[200px]" />
				<USkeleton class="h-3 w-[250px]" />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
