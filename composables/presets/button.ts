const button = {
  base: 'transition-all active:scale-90 disabled:cursor-not-allowed disabled:opacity-75 disabled:active:scale-100 outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0',
  font: 'font-bold',
  rounded: 'rounded-md',
  size: {
    '2xs': 'text-xs',
    'xs': 'text-xs',
    'sm': 'text-xs',
    'md': 'text-sm',
    'lg': 'text-md',
    'xl': 'text-base',
    'custom': '',
  },
  gap: {
    '2xs': 'gap-x-1',
    'xs': 'gap-x-1.5',
    'sm': 'gap-x-1.5',
    'md': 'gap-x-2',
    'lg': 'gap-x-2.5',
    'xl': 'gap-x-2.5',
    'custom': '',
  },
  padding: {
    '2xs': 'px-3 py-1',
    'xs': 'px-4 py-1.5',
    'sm': 'px-4 py-2',
    'md': 'px-4 py-2.5',
    'lg': 'px-6 py-2.5',
    'xl': 'px-6 py-2.5',
  },
  square: {
    '2xs': 'p-1',
    'xs': 'p-1.5',
    'sm': 'p-1.5',
    'md': 'p-2',
    'lg': 'p-2.5',
    'xl': 'p-2.5',
    'custom': '',
  },
  variant: {
    primary:
      'shadow-sm text-white dark:text-white bg-{color}-500 hover:bg-{color}-600 focus-visible:outline focus-visible:outline-2',
    soft: '!text-white !bg-white/20 hover:bg-white/30 disabled:bg-white/5 disabled:text-white/30 focus-visible:ring-2 focus-visible:ring-inset',
    outline:
      'ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
    ghost:
      'text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
    link: 'text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
  },
  icon: {
    base: 'flex-shrink-0',
    size: {
      '2xs': 'h-4 w-4',
      'xs': 'h-4 w-4',
      'sm': 'h-5 w-5',
      'md': 'h-5 w-5',
      'lg': 'h-5 w-5',
      'xl': 'h-6 w-6',
    },
  },
  default: {
    size: 'sm',
    variant: 'primary',
    color: 'primary',
    loadingIcon: 'i-ph-circle-notch',
  },
}

export default button
