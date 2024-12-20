<script setup lang="ts">
import type { PreviewData } from './types'
import type { VideoPreviewContent } from '~/server/types'
import { checkVideoPlatform } from '@/composables/helper'
import type { RoomSchema } from '~/server/validation'
import type { Database } from '~/server/types/supabase'
import { useJoinRoom } from '~/composables/service/room'

const isOpen = defineModel<boolean>()
const url = ref('')
const deboundedUrl = refDebounced(url, 1000)
const previewData = ref<PreviewData | null>(null)
const user = useSupabaseUser()
const supabase = useSupabaseClient<Database>()

const previewVideo = watch([deboundedUrl], async () => {
	previewData.value = null

	if (!checkVideoPlatform(url.value))
		return null

	const { data, error } = await useFetch<VideoPreviewContent | null>(
		'/api/scrape/video',
		{
			method: 'POST',
			body: JSON.stringify({
				url: url.value,
			}),
		},
	)

	previewData.value = {
		data: data.value,
		error: error.value?.message,
	}
})

const watchOpen = watch([isOpen], (isOpen) => {
	if (isOpen) {
		url.value = ''
		previewData.value = null
	}
})

const values = ref<Partial<RoomSchema>>({
	title: undefined,
	url: undefined,
})

async function createRoom() {
	const { data } = await supabase
		.from('rooms')
		.insert([
			{
				...previewData.value?.data,
				title: values.value.title || previewData.value?.data?.title,
			},
		])
		.select()
		.single()

	if (data) {
		isOpen.value = false
		useJoinRoom(data.id, user.value?.id, true)
	}
}

onUnmounted(() => {
	previewVideo()
	watchOpen()
})
</script>

<template>
	<Teleport to="body">
		<UModal id="video" v-model="isOpen" class="relative">
			<UCard
				:ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800/50' }"
			>
				<template #header>
					<div class="flex items-center justify-between">
						<h3
							class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
						>
							Create Room
						</h3>
						<UButton
							color="gray"
							variant="ghost"
							icon="i-ph-x-bold"
							class="-my-1"
							@click="isOpen = false"
						/>
					</div>
				</template>
				<RoomCreatePreview
					v-if="deboundedUrl && checkVideoPlatform(deboundedUrl)"
					class="mb-4"
					:preview-data="previewData"
				/>
				<UForm :state="values">
					<div class="flex flex-col gap-4">
						<UFormGroup name="title">
							<UInput placeholder="Room Name (Optional)" />
						</UFormGroup>
						<UFormGroup name="url">
							<UInput v-model="url" placeholder="Video URL" />
						</UFormGroup>
						<UButton
							class="disabled:!opacity-50 disabled:!cursor-not-allowed"
							block
							label="Create Room"
							:disabled="
								Boolean(
									!url.length
										|| !deboundedUrl
										|| !previewData?.data
										|| !checkVideoPlatform(url),
								)
							"
							:loading="
								Boolean(
									url.length
										&& deboundedUrl
										&& checkVideoPlatform(url)
										&& !previewData?.data,
								)
							"
							@click="createRoom"
						/>
					</div>
				</UForm>
			</UCard>
		</UModal>
	</Teleport>
</template>
