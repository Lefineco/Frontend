import type { DOMExportOutput, EditorConfig, LexicalCommand, LexicalNode, NodeKey, SerializedLexicalNode, Spread, TextNode } from 'lexical'
import { DecoratorNode, createCommand } from 'lexical'
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
		div.setAttribute('data-lexical-emoji', this.__emoji)
		return div
	}

	exportJSON(): SerializedEmojiNode {
		return {
			emojiName: this.__emoji,
			type: 'emoji',
			version: 1,
		}
	}

	exportDOM(): DOMExportOutput {
		const element = document.createElement('span')
		element.setAttribute('data-lexical-emoji', 'true')
		element.textContent = `:${this.__emoji}:`
		return { element }
	}

	updateDOM(
		prevNode: TextNode,
		dom: HTMLElement,
		config: EditorConfig,
	): boolean {
		const inner = dom.firstChild
		if (inner === null)
			return true

		super.updateDOM(prevNode, inner as HTMLElement, config)
		return false
	}

	getTextContent(): string {
		return this.__emoji
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
			h(Emoji, { emoji: this.__emoji, preview: true, class: 'h-10 w-10 absolute top-1/2 -translate-y-1/2 -mt-1 -translate-x-1/2 left-1/2' }),
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
