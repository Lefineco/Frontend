import { $getRoot, type LexicalEditor } from 'lexical'
import Emoji from '@/components/Shared/emoji.vue'

function clearEditorSkipCollab(editor: LexicalEditor) {
	editor.update(
		() => {
			const root = $getRoot()
			root.clear()
			root.select()
		},
		{
			tag: 'skip-collab',
		},
	)
}



export { clearEditorSkipCollab }
