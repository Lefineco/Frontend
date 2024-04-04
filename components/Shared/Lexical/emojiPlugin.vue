<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useLexicalComposer } from 'lexical-vue'
import { $getSelection } from 'lexical'
import { $createEmojiNode, INSERT_EMOJI_COMMAND } from './emojiNode'

const editor = useLexicalComposer()

let unregisterListener: () => void

onMounted(() => {
	unregisterListener = editor.registerCommand(
		INSERT_EMOJI_COMMAND,
		(emoji) => {
			editor.update(() => {
				const selection = $getSelection()
				if (selection !== null)
					selection.insertNodes([$createEmojiNode(emoji)])
			})

			return true
		},
		0,
	)
})

onUnmounted(() => {
	unregisterListener?.()
})
</script>
