import { DecoratorNode, type EditorConfig, type LexicalCommand, type LexicalNode, type NodeKey, type SerializedLexicalNode, type Spread, createCommand } from 'lexical'
import type { Component } from 'vue'
import Emoji from '@/components/Shared/emoji.vue'

export type SerializedEmojiNode = Spread<
	{
		emojiName: string
		type: 'emoji'
		version: 1
	},
	SerializedLexicalNode
>

export class EmojiNode extends DecoratorNode
	<Component> {
	__emoji: string

	static getType(): string {
		return 'emoji'
	}

	static importJSON(serializedNode: SerializedEmojiNode): EmojiNode {
		const node = $createEmojiNode(serializedNode.emojiName)
		return node
	}

	static clone(node: EmojiNode): EmojiNode {
		return new EmojiNode(node.__emoji, node.__key)
	}

	constructor(emoji: string, key?: NodeKey) {
		super(key)
		this.__emoji = emoji
	}

	createDOM(_config: EditorConfig): HTMLElement {
		const div = document.createElement('div')
		div.style.display = 'contents'
		return div
	}

	exportJSON(): SerializedEmojiNode {
		return {
			emojiName: this.__emoji,
			type: 'emoji',
			version: 1,
		}
	}

	updateDOM(): false {
		return false
	}

	setURL(emoji: string): void {
		const writable = this.getWritable()
		writable.__emoji = emoji
	}

	isKeyboardSelectable(): boolean {
		return true
	}

	decorate(): Component {
		return h('div', { class: 'h-4 w-5 relative mx-1.5' }, [
			h(Emoji, { emoji: this.__emoji, class: 'h-10 w-10 absolute top-1/2 -translate-y-1/2 -mt-1 -translate-x-1/2 left-1/2' }),
		])
	}
}

export function $createEmojiNode(emoji: string): EmojiNode {
	return new EmojiNode(emoji)
}

export function $isEmojiNode(node?: LexicalNode) {
	return node instanceof EmojiNode
}

export const INSERT_EMOJI_COMMAND: LexicalCommand<string> = createCommand()
