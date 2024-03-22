const select = {
	wrapper: 'relative',
	base: 'font-medium border-transparent relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none',
	rounded: 'rounded-xl',
	placeholder: 'placeholder:text-white/50 dark:placeholder:text-white/50',
    file: {
        base: 'file:cursor-pointer file:rounded-l-md file:absolute file:left-0 file:inset-y-0 file:font-medium file:m-0 file:border-0 file:ring-1 file:ring-gray-300 dark:file:ring-gray-700 file:text-gray-900 dark:file:text-white file:bg-gray-50 hover:file:bg-gray-100 dark:file:bg-gray-800 dark:hover:file:bg-gray-700/50',
        padding: {
            '2xs': 'ps-[85px]',
            xs: 'ps-[87px]',
            sm: 'ps-[96px]',
            md: 'ps-[98px]',
            lg: 'ps-[100px]',
            xl: 'ps-[109px]',
        },
    },
	size: {
		'2xs': 'text-xs',
		'xs': 'text-xs',
		'sm': 'text-xs',
		'md': 'text-md',
		'lg': 'text-md',
		'xl': 'text-xl',
	},
	gap: {
		'2xs': 'gap-x-1',
		'xs': 'gap-x-1.5',
		'sm': 'gap-x-2',
		'md': 'gap-x-2',
		'lg': 'gap-x-2',
		'xl': 'gap-x-2',
	},
	padding: {
		'2xs': 'px-2 py-1',
		'xs': 'px-2.5 py-2',
		'sm': 'px-2.5 py-2.5',
		'md': 'px-3 py-2.5',
		'lg': 'px-3.5 py-2.5',
		'xl': 'px-4 py-2.5',
	},
    leading: {
        padding: {
            '2xs': 'ps-7',
            xs: 'ps-8',
            sm: 'ps-9',
            md: 'ps-10',
            lg: 'ps-11',
            xl: 'ps-12',
        },
    },
    trailing: {
        padding: {
            '2xs': 'pe-7',
            xs: 'pe-8',
            sm: 'pe-9',
            md: 'pe-10',
            lg: 'pe-11',
            xl: 'pe-12',
        },
    },
    color: {
		white: {
			solid: 'bg-white/5 text-zinc-900 dark:text-white focus:ring-2 focus:dark:bg-transparent focus:ring-primary-500 focus:ring-opacity-30 border focus:border-primary-500',
			outline: 'dark:text-white focus:ring-2 dark:ring-white/10 dark:bg-transparent focus:dark:ring-primary-500 focus:dark:ring-opacity-30 border focus:dark:border-primary-500',
		},
		gray: {
			solid: 'bg-white/20 text-zinc-900 dark:text-white focus:ring-2 focus:dark:bg-transparent focus:ring-primary-500 focus:ring-opacity-30 border focus:border-primary-500',
			outline: 'dark:text-white focus:ring-2 dark:ring-white/20 dark:bg-transparent focus:dark:ring-primary-500 focus:dark:ring-opacity-30 border focus:dark:border-primary-500',
		},
		red: {
			solid: 'bg-red-500/20 text-zinc-900 dark:text-white focus:ring-2 focus:dark:bg-transparent focus:ring-red-500 focus:ring-opacity-30 border focus:border-red-500',
			outline: 'dark:text-white border dark:border-red-500/30 focus:ring-2 dark:ring-red-500/30 dark:bg-transparent focus:dark:ring-red-500 focus:dark:ring-opacity-30 border focus:dark:border-red-500',
		},
    },
    variant: {
		solid: 'shadow-sm text-black dark:text-white',
		outline: 'shadow-sm text-black dark:text-white',
		none: 'bg-transparent focus:ring-0 focus:shadow-none',
    },
	icon: {
		base: 'flex-shrink-0',
		color: 'text-{color}-500 dark:text-{color}-500',
		size: {
			'2xs': 'h-3 w-3',
			'xs': 'h-3 w-3',
			'sm': 'h-4 w-4',
			'md': 'h-5 w-5',
			'lg': 'h-5 w-5',
			'xl': 'h-6 w-6',
		},
		leading: {
			wrapper: 'absolute inset-y-0 start-0 flex items-center',
			pointer: 'pointer-events-none',
			padding: {
				'2xs': 'ps-2',
				'xs': 'ps-2.5',
				'sm': 'ps-2.5',
				'md': 'ps-3',
				'lg': 'ps-3.5',
				'xl': 'ps-3.5',
			},
		},
		trailing: {
			wrapper: 'absolute inset-y-0 end-0 flex items-center',
			pointer: 'pointer-events-none',
			padding: {
				'2xs': 'pe-2',
				'xs': 'pe-2.5',
				'sm': 'pe-2.5',
				'md': 'pe-3',
				'lg': 'pe-3.5',
				'xl': 'pe-3.5',
			},
		},
	},
    default: {
		size: 'sm',
		color: 'white',
		variant: 'solid',
        loadingIcon: 'i-ph-circle-dashed-thin',
        trailingIcon: 'i-ph-caret-down-bold',
    },
}


export default select