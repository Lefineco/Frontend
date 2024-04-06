<script setup lang="ts">
import { useLexicalComposer } from 'lexical-vue'
import { clearEditorSkipCollab } from '~/composables/helper/lexical'

interface Props {
	sendMessage: (message: string) => void
}

defineProps<Props>()

// const messageVal = ref('')
</script>

<template>
	<div class="px-4">
		<SharedLexical placeholder="Write Something..." :send-message="sendMessage" />
	</div>
</template>

<style scoped></style>
