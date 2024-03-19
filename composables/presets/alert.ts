const alert = {
	wrapper: 'w-full relative overflow-hidden',
	inner: 'w-0 flex-1',
	title: 'text-sm font-medium',
	description: 'mt-1 text-sm leading-4 opacity-90',
	actions: 'flex items-center gap-2 mt-3 flex-shrink-0',
	shadow: '',
	rounded: 'rounded-lg',
	padding: 'p-4',
	gap: 'gap-3',
	icon: {
		base: 'flex-shrink-0 w-5 h-5 text-{color}-500',
	},
	avatar: {
		base: 'flex-shrink-0 self-center',
		size: 'md',
	},
	color: {
		white: {
			solid: 'dark:text-white/90 dark:bg-white/10 dark:ring-white/10',
		},
        red: {
            solid: 'dark:text-red-100 dark:bg-red-500/10 dark:ring-red-500/10',
        },
        blue: {
            solid: 'dark:text-blue-100 dark:bg-blue-500/10 dark:ring-blue-500/10',
        },
        green: {
            solid: 'dark:text-green-100 dark:bg-green-500/10 dark:ring-green-500/10',
        },
        yellow: {
            solid: 'dark:text-yellow-100 dark:bg-yellow-500/10 dark:ring-yellow-500/10',
        },
	},
	variant: {
		solid: 'bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900',
		outline: 'text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400',
		soft: 'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400',
		subtle: 'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25',
	},
	default: {
		color: 'white',
		variant: 'solid',
		icon: null,
		closeButton: null,
		actionButton: {
			size: 'xs',
			color: 'primary',
			variant: 'link',
		},
	},
}

export default alert
