const avatar = {
	wrapper: 'relative select-none inline-flex items-center justify-center flex-shrink-0',
	background: 'bg-white/20 dark:bg-white/10 truncate',
	rounded: 'rounded-full',
	text: 'font-medium leading-none text-zinc-900 dark:text-white truncate',
	placeholder: 'font-medium leading-none text-white dark:text-white truncate',
	size: {
		'3xs': 'h-4 w-4 text-[8px]',
		'2xs': 'h-5 w-5 text-[10px]',
		'xs': 'h-6 w-6 text-xs',
		'sm': 'h-8 w-8 text-sm',
		'md': 'h-10 w-10 text-base',
		'lg': 'h-12 w-12 text-lg',
		'xl': 'h-14 w-14 text-xl',
		'2xl': 'h-16 w-16 text-2xl',
		'3xl': 'h-20 w-20 text-3xl',
		'4xl': 'h-24 w-24 text-3xl',
		'custom': 'h-24 w-24 text-3xl',

	},
	chip: {
		base: 'absolute rounded-full ring-1 ring-white dark:ring-zinc-900 flex items-center justify-center text-white dark:text-zinc-900 font-semibold',
		background: 'bg-{color}-500 dark:bg-{color}-400',
		position: {
			'top-right': 'top-0 right-0',
			'bottom-right': 'bottom-0 right-0',
			'top-left': 'top-0 left-0',
			'bottom-left': 'bottom-0 left-0',
		},
		size: {
			'3xs': 'h-[4px] min-w-[4px] text-[4px] p-px',
			'2xs': 'h-[5px] min-w-[5px] text-[5px] p-px',
			'xs': 'h-1.5 min-w-[0.375rem] text-[6px] p-px',
			'sm': 'h-2 min-w-[0.5rem] text-[7px] p-0.5',
			'md': 'h-2.5 min-w-[0.625rem] text-[8px] p-0.5',
			'lg': 'h-3 min-w-[0.75rem] text-[10px] p-0.5',
			'xl': 'h-3.5 min-w-[0.875rem] text-[11px] p-1',
			'2xl': 'h-4 min-w-[1rem] text-[12px] p-1',
			'3xl': 'h-5 min-w-[1.25rem] text-[14px] p-1',
		},
	},
	icon: {
		base: 'text-zinc-500 dark:text-zinc-400 flex-shrink-0',
		size: {
			'3xs': 'h-2 w-2',
			'2xs': 'h-2.5 w-2.5',
			'xs': 'h-3 w-3',
			'sm': 'h-4 w-4',
			'md': 'h-5 w-5',
			'lg': 'h-6 w-6',
			'xl': 'h-7 w-7',
			'2xl': 'h-8 w-8',
			'3xl': 'h-10 w-10',
		},
	},
	default: {
		size: 'sm',
		chipColor: null,
		chipPosition: 'top-right',
	},
}

export default avatar
