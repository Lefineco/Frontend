<script setup lang="ts">
import { useFollow, useUnfollow } from '@/composables/service/profile'
import { PRIMARY, SECONDARY } from '~/constants/colors'
import { key } from '~/composables/helper/random'
import type { SupabaseLefiner } from '~/pages/index.vue'
import type { ArrayElement } from '~/server/types'

interface Props {
	data: ArrayElement<SupabaseLefiner>
}
const props = defineProps<Props>()

const user = useSupabaseUser()
const isFollower = computed(() =>
	Boolean(
		props.data?.follows?.at(0)?.follower_id === user.value?.id && user.value?.id,
	),
)

const follow = ref(isFollower.value)
const followLoad = ref(false)

function setFollow(val: boolean | undefined, load: boolean) {
	if (val !== undefined)
		follow.value = val
	followLoad.value = load
}

const KEY = props.data.full_name || props.data.id
</script>

<template>
	<UButton class="profile-container" variant="link" color="white">
		<div class="profile-card" :style="{ background: `linear-gradient(${SECONDARY[key(KEY)]}, ${PRIMARY[key(KEY)]})` }">
			<!-- TODO: supabase col -->
			<!-- <img class="h-full w-full object-cover rounded-[20px]" src="https://images.unsplash.com/photo-1693697117720-c5e098ecf350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"> -->
		</div>
		<div class="profile-bottom-container">
			<div class="profile-info">
				<UAvatar :src="data.avatar_url || ''" size="md" :alt="data?.full_name || ''" />
				<div class="profile-text-info-box">
					<span class="profile-user-name">{{ data.full_name }}</span>
					<span class="recommend-text">Recommended</span>
				</div>
			</div>
			<ClientOnly>
				<UButton
					class="m-3 backdrop-blur-sm" :variant="follow ? 'outline' : 'soft'" color="white" size="sm"
					:loading="followLoad" @click="() => {
						follow
							? useUnfollow(data?.id, setFollow)
							: useFollow(data?.id, setFollow)
					}
					"
				>
					{{ follow ? 'Unfollow' : 'Follow' }}
				</UButton>
				<template #fallback>
					<USkeleton class="h-8 w-16 m-3" :ui="{ background: '!bg-white/10' }" />
				</template>
			</ClientOnly>
		</div>
	</UButton>
</template>

<style lang="postcss" scoped>
.profile-container {
	@apply relative p-0 h-36 w-full flex flex-col items-center justify-center rounded-[20px]
}

.profile-card {
	@apply h-full w-full relative overflow-hidden rounded-2xl after:content-[''] after:absolute after:inset-0 after:bg-black/60
}

.profile-bottom-container {
	@apply absolute max-lg:items-center w-full flex-col flex lg:flex-row justify-between bottom-1 py-2 px-5
}

.profile-info {
	@apply flex flex-col lg:flex-row items-center justify-center gap-3
}

.profile-text-info-box {
	@apply flex flex-col items-center lg:items-start
}

.profile-user-name {
	@apply text-sm font-medium capitalize
}

.recommend-text {
	@apply text-xs text-zinc-400
}
</style>
