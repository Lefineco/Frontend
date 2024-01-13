const toggle = {
	base: 'transition relative inline-flex h-5 w-9 flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none',
	rounded: 'rounded-full',
	ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-900',
	active: 'bg-{color}-500 dark:bg-{color}-400',
	inactive: 'bg-zinc-200 dark:bg-zinc-700',
	container: {
		base: 'pointer-events-none relative inline-block h-3.5 w-3.5 self-center rounded-full bg-white dark:bg-zinc-900 shadow transform ring-0 transition ease-in-out duration-200',
		active: 'translate-x-4 rtl:-translate-x-4 bg-pink',
		inactive: 'translate-x-0.5 rtl:-translate-x-0',
	},
	icon: {
		base: 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
		active: 'opacity-100 ease-in duration-200',
		inactive: 'opacity-0 ease-out duration-100',
		on: 'h-2 w-2 text-{color}-500 dark:text-{color}-400',
		off: 'h-2 w-2 text-zinc-400 dark:text-zinc-500',
	},
	default: {
		onIcon: null,
		offIcon: null,
		color: 'primary',
	},
}

export default toggle
