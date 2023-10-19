const checkhox = {
  wrapper: 'relative flex items-start',
  base: 'h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-white/10 focus:ring-offset-transparent',
  rounded: 'rounded-full',
  color: 'text-{color}-500 dark:text-{color}-400',
  background: 'bg-white/5 dark:bg-white/5',
  border: 'border border-white/10 dark:border-white/10',
  ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
  label: 'font-medium cursor-pointer select-none text-gray-500 dark:text-gray-200',
  required: 'ml-2 text-red-500 dark:text-red-400',
  help: 'text-xs text-gray-500 dark:text-gray-400',
  default: {
    color: 'primary',
  },
}

export default checkhox
