import anime from 'animejs'

interface Transition {
	enter: anime.AnimeParams
	leave: anime.AnimeParams
}

function transitions(transition: Transition) {
	const enter = (el: HTMLElement, done: () => void) => anime({
		targets: el,
		complete: done,
		...transition.enter,
	})

	const leave = (el: HTMLElement, done: () => void) => anime({
		targets: el,
		complete: done,
		...transition.leave,
	})

	return { enter, leave }
}

export { transitions }
