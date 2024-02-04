<template>
	<div class="default-layout">
		<LayoutHeader />
		<slot />
		<LayoutFooter />
	</div>
</template>

<style lang="postcss" scoped>
.default-layout{
	@apply flex flex-col;
}
</style>