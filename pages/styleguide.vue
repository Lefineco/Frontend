<script setup lang="ts">
import { toast } from '~/composables/helper/toast'

definePageMeta({
	layout: 'blank',
})

const modal = ref(false)

const toggle = ref(false)
</script>

<template>
	<UContainer class="main">
		<SharedLogo />
		<UCard class="w-full">
			<template #header>
				<h2>Logo</h2>
			</template>
			<div class="space-y-4">
				<SharedLogo size="xl" />
				<SharedLogo size="lg" />
				<SharedLogo size="md" />
				<SharedLogo />
				<SharedLogo size="xs" />
				<SharedLogo size="xs" is-non-color />
				<SharedLogo is-non-color icon />
			</div>
		</UCard>
		<UCard class="w-full">
			<template #header>
				<h2>Typography</h2>
			</template>
			<div class="space-y-4">
				<h1>Lefine</h1>
				<h2>Lefine</h2>
				<h3>Lefine</h3>
				<h4>Lefine</h4>
				<h5>Lefine</h5>
				<h6>Lefine</h6>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
					voluptatum, voluptate, quibusdam, quia voluptas quod quos
					exercitationem voluptatibus quas doloribus quidem. Quisquam
					voluptatum, voluptate, quibusdam, quia voluptas quod quos
					exercitationem voluptatibus quas doloribus quidem.
				</p>
				<p class="text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
					voluptatum, voluptate, quibusdam, quia voluptas quod quos
					exercitationem voluptatibus quas doloribus quidem. Quisquam
					voluptatum, voluptate, quibusdam, quia voluptas quod quos
					exercitationem voluptatibus quas doloribus quidem.
				</p>
			</div>
		</UCard>
		<UCard class="w-full">
			<template #header>
				<h2>Buttons</h2>
			</template>
			<div class="space-y-4">
				<div class="flex items-center gap-5">
					<UButton>Button Default</UButton>
					<UButton variant="soft">
						Button Soft
					</UButton>
					<UButton variant="solid">
						Button Solid
					</UButton>
					<UButton variant="outline">
						Button Outline
					</UButton>
					<UButton variant="ghost">
						Button Ghost
					</UButton>
					<UButton loading>
						Button Ghost
					</UButton>
					<UButton icon="i-ph-house-fill">
						Button with Icon
					</UButton>
				</div>
				<div class="flex items-center gap-5">
					<UButton color="white">
						Button Default
					</UButton>
					<UButton color="white" variant="soft">
						Button Soft
					</UButton>
					<UButton color="white" variant="solid">
						Button Solid
					</UButton>
					<UButton color="white" variant="outline">
						Button Outline
					</UButton>
					<UButton color="white" variant="ghost">
						Button Ghost
					</UButton>
					<UButton color="white" loading>
						Button Ghost
					</UButton>
					<UButton color="white" icon="i-ph-house-fill">
						Button with Icon
					</UButton>
				</div>
				<div class="flex items-center gap-5">
					<UButton color="green">
						Button Default
					</UButton>
					<UButton color="green" variant="soft">
						Button Soft
					</UButton>
					<UButton color="green" variant="solid">
						Button Solid
					</UButton>
					<UButton color="green" variant="outline">
						Button Outline
					</UButton>
					<UButton color="green" variant="ghost">
						Button Ghost
					</UButton>
					<UButton color="green" loading>
						Button Ghost
					</UButton>
					<UButton color="green" icon="i-ph-house-fill">
						Button with Icon
					</UButton>
				</div>
				<div class="flex items-center gap-5">
					<UButton color="red">
						Button Default
					</UButton>
					<UButton color="red" variant="soft">
						Button Soft
					</UButton>
					<UButton color="red" variant="solid">
						Button Solid
					</UButton>
					<UButton color="red" variant="outline">
						Button Outline
					</UButton>
					<UButton color="red" variant="ghost">
						Button Ghost
					</UButton>
					<UButton color="red" loading>
						Button Ghost
					</UButton>
					<UButton color="red" icon="i-ph-house-fill">
						Button with Icon
					</UButton>
				</div>
				<div class="flex items-center gap-5">
					<UButton color="yellow">
						Button Default
					</UButton>
					<UButton color="yellow" variant="soft">
						Button Soft
					</UButton>
					<UButton color="yellow" variant="solid">
						Button Solid
					</UButton>
					<UButton color="yellow" variant="outline">
						Button Outline
					</UButton>
					<UButton color="yellow" variant="ghost">
						Button Ghost
					</UButton>
					<UButton color="yellow" loading>
						Button Ghost
					</UButton>
					<UButton color="yellow" icon="i-ph-house-fill">
						Button with Icon
					</UButton>
				</div>
			</div>
		</UCard>
		<UCard class="w-full">
			<template #header>
				<h2>Inputs</h2>
			</template>
			<div class="space-y-4">
				<div class="flex items-center gap-5">
					<UInput placeholder="Input Default" />
					<UInput placeholder="Input Outline" variant="outline" />
					<UInput placeholder="Input Outline" loading />
					<UInput placeholder="Input Outline" icon="i-ph-house-fill" />
				</div>
				<div class="flex items-center gap-5">
					<UInput color="gray" placeholder="Input Default" />
					<UInput color="gray" placeholder="Input Outline" variant="outline" />
					<UInput color="gray" placeholder="Input Outline" loading />
					<UInput
						color="gray"
						placeholder="Input Outline"
						icon="i-ph-house-fill"
					/>
				</div>
				<div class="flex items-center gap-5">
					<UInput color="red" placeholder="Input Default" />
					<UInput color="red" placeholder="Input Outline" variant="outline" />
					<UInput color="red" placeholder="Input Outline" loading />
					<UInput
						color="red"
						placeholder="Input Outline"
						icon="i-ph-house-fill"
					/>
				</div>
			</div>
		</UCard>
		<UCard class="w-full">
			<template #header>
				<h2>Textarea</h2>
			</template>
			<div class="space-y-4">
				<div class="flex items-center gap-5">
					<UTextarea placeholder="Textarea Default" />
					<UTextarea placeholder="Textarea Default" variant="outline" />
				</div>
				<div class="flex items-center gap-5">
					<UTextarea color="gray" placeholder="Textarea Default" />
					<UTextarea
						color="gray"
						placeholder="Textarea Default"
						variant="outline"
					/>
				</div>
				<div class="flex items-center gap-5">
					<UTextarea color="red" placeholder="Textarea Default" />
					<UTextarea
						color="red"
						placeholder="Textarea Default"
						variant="outline"
					/>
				</div>
			</div>
		</UCard>
		<UCard class="w-full">
			<template #header>
				<h2>Checkbox</h2>
			</template>
			<div class="space-y-4">
				<div class="flex items-center gap-5">
					<UCheckbox label="label" help="help text" />
					<UCheckbox label="label" />
					<UCheckbox label="label required" required />
					<UCheckbox color="emerald" label="label diffrence color" />
				</div>
			</div>
		</UCard>
		<UCard class="w-full">
			<template #header>
				<h2>Toggle</h2>
			</template>
			<div class="space-y-4">
				<div class="flex items-center gap-5">
					<UToggle v-model="toggle" />
					<UToggle v-model="toggle" color="emerald" />
					<UToggle v-model="toggle" color="red" />
					<UToggle
						v-model="toggle"
						color="blue"
						on-icon="i-ph-check-bold"
						off-icon="i-ph-x-bold"
					/>
				</div>
			</div>
		</UCard>
		<UCard class="w-full">
			<template #header>
				<h2>Modal</h2>
			</template>
			<div class="space-y-4">
				<div class="flex items-center gap-5">
					<UButton label="Modal" variant="soft" @click="modal = true" />
					<UModal v-model="modal">
						<UCard
							:ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }"
						>
							<template #header>
								Modal Header
							</template>
							Content
							<template #footer>
								<p>Modal Footer</p>
							</template>
						</UCard>
					</UModal>
				</div>
			</div>
		</UCard>
		<UCard class="w-full">
			<template #header>
				<h2>Toast</h2>
			</template>
			<div class="space-y-4">
				<div class="flex items-center gap-5">
					<UButton
						label="Toast Success"
						variant="soft"
						color="emerald"
						@click="
							() => toast('Success', 'This procces succefully', 'success')
						"
					/>
					<UButton
						label="Toast Warning"
						variant="soft"
						color="yellow"
						@click="() => toast('Warning', 'This procces Warning', 'warning')"
					/>
					<UButton
						label="Toast Error"
						variant="soft"
						color="red"
						@click="() => toast('Error', 'This procces Error', 'error')"
					/>
				</div>
			</div>
		</UCard>
		<UCard class="w-full">
			<template #header>
				<h2>Avatar</h2>
			</template>
			<div class="space-y-4">
				<div class="flex items-center gap-5">
					<UAvatar size="3xs" alt="LE" />
					<UAvatar size="2xs" alt="LE" />
					<UAvatar size="xs" alt="LE" />
					<UAvatar size="sm" alt="LE" />
					<UAvatar size="md" alt="LE" />
					<UAvatar size="xl" alt="LE" />
					<UAvatar size="2xl" alt="LE" />
					<UAvatar size="3xl" alt="LE" />
				</div>
				<div class="flex items-center gap-5">
					<UAvatar
						src="https://avatars.githubusercontent.com/u/47571500"
						size="3xs"
						alt="LE"
					/>
					<UAvatar
						src="https://avatars.githubusercontent.com/u/47571500"
						size="2xs"
						alt="LE"
					/>
					<UAvatar
						src="https://avatars.githubusercontent.com/u/47571500"
						size="xs"
						alt="LE"
					/>
					<UAvatar
						src="https://avatars.githubusercontent.com/u/47571500"
						size="sm"
						alt="LE"
					/>
					<UAvatar
						src="https://avatars.githubusercontent.com/u/47571500"
						size="md"
						alt="LE"
					/>
					<UAvatar
						src="https://avatars.githubusercontent.com/u/47571500"
						size="xl"
						alt="LE"
					/>
					<UAvatar
						src="https://avatars.githubusercontent.com/u/47571500"
						size="2xl"
						alt="LE"
					/>
					<UAvatar
						src="https://avatars.githubusercontent.com/u/47571500"
						size="3xl"
						alt="LE"
					/>
				</div>
				<div class="flex items-center gap-5">
					<UAvatar
						chip-color="emerald"
						chip-position="bottom-right"
						src="https://avatars.githubusercontent.com/u/47571500"
						size="3xs"
						alt="LE"
					/>
					<UAvatar
						chip-color="emerald"
						chip-position="bottom-right"
						src="https://avatars.githubusercontent.com/u/47571500"
						size="2xs"
						alt="LE"
					/>
					<UAvatar
						chip-color="emerald"
						chip-position="bottom-right"
						src="https://avatars.githubusercontent.com/u/47571500"
						size="xs"
						alt="LE"
					/>
					<UAvatar
						chip-color="emerald"
						chip-position="bottom-right"
						src="https://avatars.githubusercontent.com/u/47571500"
						size="sm"
						alt="LE"
					/>
					<UAvatar
						chip-color="emerald"
						chip-position="bottom-right"
						src="https://avatars.githubusercontent.com/u/47571500"
						size="md"
						alt="LE"
					/>
					<UAvatar
						chip-color="emerald"
						chip-position="bottom-right"
						src="https://avatars.githubusercontent.com/u/47571500"
						size="xl"
						alt="LE"
					/>
					<UAvatar
						chip-color="emerald"
						chip-position="bottom-right"
						src="https://avatars.githubusercontent.com/u/47571500"
						size="2xl"
						alt="LE"
					/>
					<UAvatar
						chip-color="emerald"
						chip-position="bottom-right"
						src="https://avatars.githubusercontent.com/u/47571500"
						size="3xl"
						alt="LE"
					/>
				</div>
				<div class="flex items-center gap-5">
					<UAvatarGroup size="sm" :max="2">
						<UAvatar
							src="https://avatars.githubusercontent.com/u/47571500"
							alt="LE"
						/>
						<UAvatar
							src="https://lh3.googleusercontent.com/a/AAcHTtfquhuGZ0k6CnVsXbJ3aPxl8Sk1Qn6NRdCz9qBJOQ5sfMU=s96-c"
							alt="LE"
						/>
						<UAvatar
							src="https://avatars.githubusercontent.com/u/47571500"
							alt="LE"
						/>
					</UAvatarGroup>
				</div>
				<div class="flex items-center gap-5">
					<UAvatar
						chip-color="emerald"
						chip-position="bottom-right"
						chip-text="9+"
						src="https://avatars.githubusercontent.com/u/47571500"
						size="xl"
						alt="LE"
					/>
				</div>
			</div>
		</UCard>
	</UContainer>
</template>

<style lang="postcss" scoped>
.main {
  @apply p-12 flex flex-col space-y-6;
}
</style>
