<script setup lang="ts">
import { useLexicalComposer } from 'lexical-vue'
import { $getRoot, CLEAR_EDITOR_COMMAND } from 'lexical'
import { INSERT_EMOJI_COMMAND } from './emojiNode'
import { emojiArtboard } from '~/constants/general'

const editor = useLexicalComposer()

const emojiPopoverUI = {
	overlay: {
		background: 'dark:bg-black/20 backdrop-blur-sm',
	},
	base: 'overflow-visible',
}

function addEmojiToMessage(emoji: string) {
	editor.dispatchCommand(INSERT_EMOJI_COMMAND, emoji)
}
</script>

<template>
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
