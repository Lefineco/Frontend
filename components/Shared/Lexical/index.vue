<script setup lang="ts">
import { $getRoot, $getSelection, type CreateEditorArgs, type EditorState, TextNode } from 'lexical'
import { LexicalAutoFocusPlugin, LexicalClearEditorPlugin, LexicalComposer, LexicalContentEditable, LexicalHistoryPlugin, LexicalPlainTextPlugin } from 'lexical-vue'
import { EmojiNode } from './emojiNode'
import presets from '~/composables/presets'

interface Props {
	placeholder: string
}

defineProps<Props>()

const config: CreateEditorArgs = {
	namespace: 'Lexical',
	onError(error) {
		console.error(error)
	},
	nodes: [EmojiNode],
	editable: true,
}

const vModel = defineModel()

function onChange(editorState: EditorState) {
	editorState.read(() => {
		// const text = $getRoot().getTextContent()?.trim()
		// if (text)
		vModel.value = editorState.toJSON()

		const test = $getSelection()?.getNodes()
	})
}
</script>

<template>
	<div :class="presets.input.wrapper">
		<ClientOnly>
			<LexicalComposer :initial-config="config">
				<LexicalPlainTextPlugin>
					<template #contentEditable>
						<div class="relative">
							<div class="absolute left-2 inset-y-0 flex items-center z-10">
								<SharedLexicalAddEmoji />
							</div>
							<LexicalContentEditable
								class="lexical"
								:class="[presets.input.base, presets.input.variant.solid, presets.input.rounded, presets.input.color.white.solid, presets.input.size.sm, presets.input.padding.lg, presets.input.leading.padding.lg, presets.input.trailing.padding.lg]"
							/>
							<div class="absolute right-2 inset-y-0 flex items-center z-10">
								<slot name="trailing" />
							</div>
						</div>
					</template>
					<template #placeholder>
						<div
							class="text-white/50 absolute top-1/2 -translate-y-1/2 pointer-events-none"
							:class="[presets.input.padding.lg, presets.input.leading.padding.lg]"
						>
							{{ placeholder }}
						</div>
					</template>
				</LexicalPlainTextPlugin>
				<LexicalAutoFocusPlugin />
				<LexicalHistoryPlugin />
				<SharedLexicalEmojiPlugin />
				<SharedLexicalOnChangePlugin @change="onChange" />
				<LexicalClearEditorPlugin />
			</LexicalComposer>
		</ClientOnly>
	</div>
</template>

<style lang="postcss">
.lexical {

	p {
		@apply flex flex-wrap break-words;
	}
}
</style>
