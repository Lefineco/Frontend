const formGroup = {
  wrapper: '',
  label: {
    wrapper: 'flex content-center items-center justify-between',
    base: 'block font-medium text-foreground',
    required: 'after:content-[\'*\'] after:ms-0.5 after:text-red-500 dark:after:text-red-400',
  },
  size: {
    '2xs': 'text-xs',
    'xs': '!text-xs',
    'sm': 'text-sm',
    'md': 'text-sm',
    'lg': 'text-sm',
    'xl': 'text-base',
  },
  container: 'mt-1 relative',
  description: 'text-zinc-500 dark:text-zinc-400',
  hint: 'text-zinc-500 dark:text-zinc-400',
  help: 'mt-2 text-zinc-500 dark:text-zinc-400',
  error: 'mt-2 text-red-500 dark:text-red-400',
}

export default formGroup
