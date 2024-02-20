import { transitions } from '@/composables/transitions'

const joinTransition = transitions({
	enter: {
		opacity: [0, 1],
        translateY: [100, 0],
		duration: 400,
		easing: 'easeInOutCubic',
	},
	leave: {
		opacity: [1, 0],
        translateY: [0, 100],
		duration: 300,
		easing: 'easeInOutCubic',
	},
})

export { joinTransition }
