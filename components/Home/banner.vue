<template>
	<div class="banner">
		<div class="banner__wrapper">
			<svg
				viewBox="0 0 1024 1024"
				class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
				aria-hidden="true"
			>
				<circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
				<defs>
					<radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
						<stop stop-color="#7775D6" />
						<stop offset="1" stop-color="#E935C1" />
					</radialGradient>
				</defs>
			</svg>
			<div class="banner__wrapper__content">
				<h2 class="title">
					Sync Your Movie Moments,<br>
					Experience it<br>
					Together with Lefine!
				</h2>
				<p class="description">
					Connect with friends around the world thanks to Lefine. Come together with friends from different
					geographies and have a shared entertainment experience!
				</p>
				<div class="actions">
					<UButton color="white" to="/rooms">
						Explore Rooms
					</UButton>
					<UButton variant="link" color="white">
						Create Room
					</UButton>
				</div>
			</div>
			<div class="relative mt-12 h-80 lg:mt-8">
				<img
					class="absolute left-0 top-0 w-[57rem] max-w-none rounded-2xl bg-white/5 ring-1 ring-white/10"
					src="@/assets/media/banner.gif" alt="App screenshot" width="1824" height="1080"
				>
			</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.banner {
	@apply mx-auto sm:px-6 lg:px-4 pb-24;

	&__wrapper {
		@apply relative isolate overflow-hidden bg-gray-900 px-6 pt-8 shadow-2xl sm:rounded-3xl lg:flex lg:gap-x-20 lg:px-16 lg:pt-0;

		&__content {
			@apply mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left;

			.title {
				@apply text-3xl font-bold tracking-tight text-white sm:text-4xl;
			}

			.description {
				@apply mt-6 text-sm leading-8 text-gray-300;
			}

			.actions {
				@apply mt-10 flex items-center justify-center gap-x-6 lg:justify-start;
			}
		}
	}
}
</style>
