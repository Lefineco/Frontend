const dropdwon = {
  wrapper: 'relative inline-flex text-left rtl:text-right',
  container: 'z-20',
  width: 'w-48',
  height: '',
  background: 'bg-white dark:bg-white/10 backdrop-blur-lg',
  shadow: 'shadow-lg',
  rounded: 'rounded-md',
  ring: '',
  base: 'relative focus:outline-none overflow-y-auto scroll-py-1',
  divide: 'divide-y divide-black/10 dark:divide-white/5',
  padding: 'p-1',
  item: {
    base: 'group flex items-center gap-2 w-full !opacity-80',
    rounded: 'rounded-md',
    padding: 'px-2 py-1.5',
    size: 'text-sm',
    active: 'bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white',
    inactive: 'text-zinc-700 dark:text-zinc-200',
    disabled: 'cursor-not-allowed opacity-50',
    icon: {
      base: 'flex-shrink-0 h-4 w-4',
      active: 'text-zinc-500 dark:text-zinc-400',
      inactive: 'text-zinc-400 dark:text-zinc-500',
    },
    avatar: {
      base: 'flex-shrink-0',
      size: '3xs',
    },
    shortcuts: 'hidden md:inline-flex flex-shrink-0 gap-0.5 ms-auto',
  },
  transition: {
    enterActiveClass: 'transition duration-100 ease-out',
    enterFromClass: 'transform scale-95 opacity-0',
    enterToClass: 'transform scale-100 opacity-100',
    leaveActiveClass: 'transition duration-75 ease-in',
    leaveFromClass: 'transform scale-100 opacity-100',
    leaveToClass: 'transform scale-95 opacity-0',
  },
  popper: {
    placement: 'bottom-end',
    strategy: 'fixed',
  },
}

export default dropdwon
