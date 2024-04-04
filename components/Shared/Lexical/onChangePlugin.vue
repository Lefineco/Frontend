<script setup>
import { useLexicalComposer } from 'lexical-vue'

const emit = defineEmits(['change'])
const editor = useLexicalComposer()

onMounted(() => {
	const unregister = editor.registerUpdateListener(({ editorState }) => {
		emit('change', editorState)
	})

	onUnmounted(() => {
		unregister()
	})
})
</script>