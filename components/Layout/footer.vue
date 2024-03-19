<script lang="ts" setup>
const FOOTER_URLS = [
  { label: 'Terms of Service', url: '/terms-of-service' },
  { label: 'Privacy', url: '/privacy' },
]
</script>

<template>
	<ClientOnly>
		<footer class="footer">
			<div class="footer__wrapper">
				<div class="footer__wrapper__section">
					<div class="footer__wrapper__section__content">
						<div
							class="links"
						>
              <NuxtLink
                v-for="url in FOOTER_URLS"
                :key="url.label"
                :to="url.url"
                class="link"
              >
                {{ url.label }}
              </NuxtLink>
						</div>
						<p class="copyright">
							© {{ new Date().getFullYear() }}
							Lefine All rights
							reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	</ClientOnly>
</template>

<style lang="postcss" scoped>
.footer {
  @apply mt-32 flex-none order-last;

  &__wrapper {
    @apply mx-auto w-full;

    &__section {
      @apply border-t border-zinc-100 py-10 dark:border-zinc-700/40;

      &__content {
        @apply relative mx-auto max-w-7xl px-12 flex flex-col items-center justify-between gap-6 sm:flex-row;
        
        .links {
          @apply flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200;

          .link {
            @apply transition text-white/80 hover:text-primary-500 dark:hover:text-primary-400;
          }
        }

        .copyright {
          @apply text-sm text-zinc-400 dark:text-zinc-500;
        }
      }
    }
  }
}
</style>
