const notification = {
	wrapper: 'w-full pointer-events-auto',
	container: 'relative overflow-hidden',
	title: 'text-sm -mt-0.5 font-medium text-zinc-900 dark:text-white',
	description: 'mt-1 text-sm leading-4 text-zinc-500 dark:text-zinc-400',
	background: 'bg-white dark:bg-zinc-900',
	shadow: 'shadow-lg',
	rounded: 'rounded-lg',
	padding: 'p-4',
	ring: '',
	icon: {
		base: 'flex-shrink-0 w-5 h-5',
		color: 'text-{color}-500 dark:text-{color}-400',
	},
	avatar: {
		base: 'flex-shrink-0 self-center',
		size: 'md',
	},
	progress: {
		base: 'absolute bottom-0 end-0 start-0 h-0.5',
		background: 'bg-{color}-500/20 dark:bg-{color}-400/20',
	},
	transition: {
		enterActiveClass: 'transform ease-in-out duration-300 transition-all',
		enterFromClass: 'translate-y-2 opacity-0 translate-y-0 translate-x-2',
		enterToClass: 'translate-y-0 opacity-100 translate-x-0',
		leaveActiveClass: 'transition ease-in-out duration-200',
		leaveFromClass: 'opacity-100 translate-y-0 translate-x-2',
		leaveToClass: 'opacity-0 translate-x-0',
	},
	default: {
		color: 'primary',
		icon: null,
		closeButton: {
			icon: 'i-ph-x-bold',
			color: 'zinc',
			variant: 'link',
			padded: false,
		},
		actionButton: {
			size: 'xs',
			color: 'white',
		},
	},
}

export default notification
