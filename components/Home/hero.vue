<script setup lang="ts">
import { push } from 'notivue'
</script>

<template>
	<div class="hero">
		<div class="hero__wrapper">
			<svg
				viewBox="0 0 1024 1024"
				class="hero__wrapper__background"
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
			<div class="hero__wrapper__content">
				<h2 class="title">
					Sync Your Movie Moments,
					<br>
					Experience Together
				</h2>
				<p class="description">
					Connect with friends around the world thanks to Lefine. Come together with friends from different
					geographies and have a shared entertainment experience!
				</p>
				<div class="actions">
					<UButton color="white" variant="soft" size="md" to="/rooms">
						Explore Rooms
					</UButton>
					<UButton
						variant="link" size="md" color="white" @click="push.promise({
							
							title: 'Coming Soon',
							message: 'This feature is coming soon!',
						})"
					>
						Create Room
					</UButton>
				</div>
			</div>

		</div>
		<hr class="hero__divider">
	</div>
</template>

<style lang="postcss" scoped>
.hero {
	@apply mx-auto pt-6 pb-24;

	&__wrapper {
		@apply relative isolate overflow-hidden pt-8 shadow-2xl pl-4 lg:flex lg:justify-center lg:gap-x-20 lg:pt-0;

		&__content {
			@apply mx-auto max-w-xl text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-center;

			.title {
				@apply bg-clip-text text-transparent bg-gradient-to-b from-white to-primary-500 text-3xl font-bold !leading-[1.2] tracking-tight sm:text-5xl;
			}

			.description {
				@apply mt-6 text-sm leading-8 text-white/60;
			}

			.actions {
				@apply mt-10 flex items-center justify-center gap-x-6;
			}
		}

		&__background {
			@apply absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0;
		}
	}

	&__divider {
		@apply w-full h-0.5 border-transparent border-0 bg-gradient-to-r from-transparent via-primary-300/80 to-transparent;
	}
}
</style>
