const modal = {
	wrapper: 'relative z-50',
	inner: 'fixed inset-0 overflow-y-auto',
	container: 'flex min-h-full items-center justify-center',
	padding: 'p-4 sm:p-0',
	base: 'modal-base relative text-left rtl:text-right overflow-hidden sm:my-8 w-full flex flex-col',
	overlay: {
		base: 'fixed !bg-black/60 inset-0 transition-opacity',
		transition: {
			enter: 'ease-in-out duration-300',
			enterFrom: 'opacity-0',
			enterTo: 'opacity-100',
			leave: 'ease-in-out duration-200',
			leaveFrom: 'opacity-100',
			leaveTo: 'opacity-0',
		},
	},
	background: 'bg-zinc-950 dark:bg-zinc-950',
	ring: 'ring dark:ring-white/5',
	rounded: 'rounded-2xl',
	shadow: 'shadow-xl',
	width: 'sm:max-w-lg',
	height: '',
	transition: {
		enter: 'ease-in-out duration-300',
		enterFrom: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
		enterTo: 'opacity-100 translate-y-0 sm:scale-100',
		leave: 'ease-in-out duration-200',
		leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
		leaveTo: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
	},
}

export default modal
