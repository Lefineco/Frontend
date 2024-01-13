const popover = {
	wrapper: 'relative',
	container: 'z-50 group',
	trigger: 'inline-flex w-full',
	width: '',
	background:
    'bg-zinc-100 dark:bg-white/10 text-zinc-900 backdrop-blur-lg dark:text-white',
	shadow: 'shadow-lg',
	rounded: 'rounded-md',
	ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
	base: 'overflow-hidden focus:outline-none relative',
	transition: {
		enterActiveClass: 'transition ease-out duration-200',
		enterFromClass: 'opacity-0 translate-y-1',
		enterToClass: 'opacity-100 translate-y-0',
		leaveActiveClass: 'transition ease-in duration-150',
		leaveFromClass: 'opacity-100 translate-y-0',
		leaveToClass: 'opacity-0 translate-y-1',
	},
	overlay: {
		base: 'fixed inset-0 transition-opacity z-50',
		background: 'bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white',
		transition: {
			enterActiveClass: 'transition duration-100 ease-out',
			enterFromClass: 'transform scale-95 opacity-0',
			enterToClass: 'transform scale-100 opacity-100',
			leaveActiveClass: 'transition duration-75 ease-in',
			leaveFromClass: 'transform scale-100 opacity-100',
			leaveToClass: 'transform scale-95 opacity-0',
		},
	},
	popper: {
		strategy: 'fixed',
	},
	arrow: {
		base: 'invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2',
		ring: 'before:ring-1 before:ring-gray-200 dark:before:ring-gray-800',
		rounded: 'before:rounded-sm',
		background: 'bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white',
		shadow: 'before:shadow',
		placement: 'group-data-[popper-placement*=\'right\']:-left-1 group-data-[popper-placement*=\'left\']:-right-1 group-data-[popper-placement*=\'top\']:-bottom-1 group-data-[popper-placement*=\'bottom\']:-top-1',
	},
}

export default popover
