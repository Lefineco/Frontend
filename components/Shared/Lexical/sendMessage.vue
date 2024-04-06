<script setup lang="ts">
import { COMMAND_PRIORITY_LOW, KEY_ENTER_COMMAND, type LexicalEditor } from 'lexical'
import { useLexicalComposer } from 'lexical-vue'
import { $generateHtmlFromNodes } from '@lexical/html'
import { clearEditorSkipCollab } from '~/composables/helper/lexical'

interface Props {
	sendMessage: (message: string) => void
}

const props = defineProps<Props>()

const editor = useLexicalComposer()

async function sendData() {
	const htmlResult = await generateHtmlFromNodes(editor)
	props.sendMessage(htmlResult)
	clearEditorSkipCollab(editor)
}

function clearHTMLTags(strToSanitize: string) {
	return strToSanitize.replace(/(<([^>]+)>)/gi, '').replace(/(:\S+:)/g, (match) => {
		return ` ${match} `
	})
}

async function generateHtmlFromNodes(editor: LexicalEditor) {
	let htmlString = ''
	editor._editorState.read(() => {
		htmlString = $generateHtmlFromNodes(editor)
	})

	return clearHTMLTags(htmlString)
}

onMounted(() => {
	editor.registerCommand(KEY_ENTER_COMMAND, (_event: KeyboardEvent) => {
		sendData()
		return false
	}, COMMAND_PRIORITY_LOW)
})
</script>

<template>
	<UButton variant="soft" color="white" icon="i-ph-paper-plane-tilt-fill" @click="sendData" />
</template>

<style scoped></style>
