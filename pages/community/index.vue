<script setup lang="ts">
import type { Lefiners } from '~/server/types'
import type { Database } from '~/server/types/supabase'
import { useGeneralStore } from '~/store'

const supabase = useSupabaseClient<Database>()
const store = useGeneralStore()

if (!store.lefiners?.length) {
	const { data } = await supabase
		.from('profiles')
		.select('*')
		.filter('full_name', 'neq', null)

	store.lefiners = data as Lefiners[]
}

const data2 = [
	{
		name: 'Reşat Akkus',
		createDate: '3 Days Ago',
		description: 'Deneme Canim',
		avatar: 'https',
	},
]
</script>

<template>
	<div class="page flex gap-5">
		<div class="community-box">
			<FeedsFormCreate />
			<template v-for="(item, idx) in data2">
				<Feeds
					v-if="item"
					:key="idx" 
					:data="item"
				/>
			</template>
		</div>
		<div class="user-container">
			<div class="user-box">
				<SharedCardsProfile v-for="(item, idx) in store.lefiners?.slice(0, 4)" :key="idx" :data="item" />
			</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.community-box {
	@apply w-full mx-auto space-y-6
}

.user-container {
	@apply pr-5 max-w-sm w-full flex-shrink-0 flex flex-col space-y-4;

	.user-box {
		@apply flex flex-col space-y-2
	}
}
</style>
