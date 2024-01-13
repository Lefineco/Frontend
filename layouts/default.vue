<template>
	<div class="layout">
		<LayoutHeader />
		<div class="wrapper">
			<!-- <LayoutSidebar class="w-20 p-4" /> -->
			<slot />
		</div>
	</div>
</template>

<style lang="postcss" scoped>
  .wrapper {
    @apply flex h-full items-start overflow-y-auto max-w-[1700px] mx-auto;
  }
</style>
