<script setup lang="ts">
import { ref } from 'vue'
import type { DropdownItem } from '#ui/types'

import { navigationLinks } from '~/composables/helper'

const user = useSupabaseUser()

const supabase = useSupabaseClient()

function signOut() {
	supabase.auth.signOut()
	reloadNuxtApp({ force: true })
}

const items: DropdownItem[][] = [
	[
		{
			label: user.value?.email ? user.value.email : '',
			slot: 'account',
			disabled: true,
		},
	],
	[
		{
			label: 'Settings',
			to: '/profile',
			icon: 'i-ph-gear-six',
		},
	],
	[
		{
			label: 'Changelog',
			icon: 'i-ph-megaphone-simple',
			href: 'https://github.com/Lefineco/Frontend/releases',
		},
		{
			label: 'Status',
			icon: 'i-ph-cell-signal-full',
			href: 'https://lefine.statuspage.io/',
		},
	],
	[
		{
			label: 'Sign out',
			icon: 'i-ph-sign-out',
			click: signOut,
		},
	],
]

const crateRoomModal = ref(false)

// const isOpen = ref(false)

const links = [
	{
		label: 'Feeds',
		icon: ['i-ph-play-circle', 'i-ph-play-circle-fill'],
		to: '/',
	},
	{
		label: 'Community',
		icon: ['i-ph-users-three', 'i-ph-users-three-fill'],
		to: '/community',
	},
]

defineShortcuts({
	meta_k: {
		usingInput: true,
		handler: () => {
			crateRoomModal.value = true
		},
	},
})
</script>

<template>
	<div class="header">
		<div class="wrapper">
			<div class="progress" />
			<!-- <UModal v-model="isOpen">
				<RoomCreateNew />
			</UModal> -->

			<div class="flex gap-12 items-center">
				<SharedLogo to="/" />

				<UVerticalNavigation
					:ui="{
						base: 'transition before:!bg-transparent text-xs font-semibold',
						active: '',
						icon: {
							base: 'transition flex-shrink-0 w-5 h-5 m-1',
							inactive: 'text-white/50 dark:group-hover:text-gray-200',
						},
					}" class="navigation" :links="navigationLinks(links)"
				/>
			</div>

			<div class="space-x-6 flex items-center justify-center pr-6">
				<ClientOnly>
					<div v-if="user" class="flex gap-4 items-center">
						<!-- <UButton color="white" variant="soft" @click="isOpen = true">
							Test1
						</UButton> -->
						<UButton color="white" variant="soft" @click="crateRoomModal = !crateRoomModal">
							Create Room
							<UKbd>⌘ + K</UKbd>
						</UButton>
						<RoomCreate v-model="crateRoomModal" />
						<UDropdown
							:items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
							:popper="{ placement: 'bottom-end' }"
						>
							<UAvatar class="avatar-frame" size="sm" :src="user.user_metadata.picture" :alt="user.user_metadata.name" />

							<template #account="{ item }">
								<div class="text-left">
									<p class="text-xs opacity-80">
										Signed in as
									</p>
									<span class="text-sm font-medium">
										{{ item.label }}
									</span>
								</div>
							</template>
						</UDropdown>
					</div>
					<div v-else class="space-x-4 flex">
						<UButton to="/auth/login" label="Button" color="white">
							Login
						</UButton>
						<UButton to="/auth/register" label="Button" variant="soft" color="white">
							Register
						</UButton>
					</div>
					<template #fallback>
						<USkeleton class="h-8 w-8" :ui="{ rounded: 'rounded-full' }" />
					</template>
				</ClientOnly>
			</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.header {
	@apply border-b border-white/10 sm:py-3 w-full space-x-5;

	.wrapper {
		@apply max-w-[1700px] mx-auto flex justify-between items-center px-6;

		.progress {
			@apply absolute inset-x-0 h-0.5 -top-0.5 bg-violet-950;
		}
	}

	.avatar-frame {
		@apply ring-1 ring-offset-2 ring-offset-black ring-primary-500
	}
}
</style>
