import { transitions } from '@/composables/transitions'

const messageTransition = transitions({
	enter: {
		opacity: [0, 1],
		duration: 100,
		easing: 'easeInQuart',
	},
	leave: {
		opacity: [1, 0],
		duration: 300,
		easing: 'easeOutQuart',
	},
})

export { messageTransition }
