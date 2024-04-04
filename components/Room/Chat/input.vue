<script setup lang="ts">
interface Props {
	sendMessage: (message: string) => void
}

const props = defineProps<Props>()

const messageVal = ref('')

async function sendData() {
	props.sendMessage(messageVal.value)
}

</script>

<template>
	<div class="px-4">
		<SharedLexical v-model="messageVal" placeholder="Write Something...">
			<template #trailing>
				<UButton variant="soft" color="white" icon="i-ph-paper-plane-tilt-fill" @click="sendData" />
			</template>
		</SharedLexical>
		<!-- <UInput
			v-model="messageVal" placeholder="Write Something..."
			:ui="{ base: '!px-12 !text-sm', icon: { trailing: { pointer: '' }, leading: { pointer: '' } } }"
			@keyup.enter="sendData"
		>
			<template #leading>
				<UPopover :popper="{ placement: 'top-start' }" :ui="emojiPopoverUI" overlay>
					<UButton variant="soft" color="white" icon="i-ph-smiley" />
					<template #panel>
						<div class="flex h-10 gap-1">
							<SharedEmoji
								v-for="emoji in emojiArtboard" :key="emoji" :emoji="emoji"
								class="w-[50px] h-14 -mt-5 cursor-pointer" @click="addEmojiToMessage(emoji)"
							/>
						</div>
					</template>
				</UPopover>
			</template>
			<template #trailing>
				<UButton variant="soft" color="white" icon="i-ph-paper-plane-tilt-fill" @click="sendData" />
			</template>
		</UInput> -->
	</div>
</template>

<style scoped></style>
