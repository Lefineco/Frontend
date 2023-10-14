const input = {
  wrapper: 'relative',
  base: 'border-transparent relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none font-semibold',
  rounded: 'rounded-md',
  placeholder: '!placeholder-white/60',
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
      'xs': 'ps-8',
      'sm': 'ps-9',
      'md': 'ps-10',
      'lg': 'ps-11',
      'xl': 'ps-12',
    },
  },
  trailing: {
    padding: {
      '2xs': 'pe-7',
      'xs': 'pe-8',
      'sm': 'pe-9',
      'md': 'pe-10',
      'lg': 'pe-11',
      'xl': 'pe-12',
    },
  },
  color: {
    white: {
      solid: 'shadow-sm bg-white/10 text-gray-900 dark:text-white focus:ring-2 focus:!bg-transparent focus:ring-primary-500 focus:ring-opacity-30 border focus:border-primary-500',
      outline: 'shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500',
    },
    gray: {
      solid: 'shadow-sm bg-white/10 text-gray-900 dark:text-white focus:ring-2 focus:!bg-transparent focus:ring-primary-500 dark:focus:ring-primary-400',
      outline: 'shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
    },
    red: {
      solid: 'shadow-sm bg-red-500/10 text-gray-900 dark:text-red-500 focus:ring-2 focus:!bg-transparent focus:border-transparent focus:ring-red-500 dark:focus:ring-red-400',
      outline: 'shadow-sm bg-transparent text-gray-900 dark:text-red-500 ring-1 ring-inset ring-red-300 dark:ring-red-700 focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400',
    },
  },

  variant: {
    solid: 'shadow-sm bg-white/10 text-black dark:text-white focus:!bg-transparent focus:ring-{color}-500 focus:border-{color}-500',
    outline: 'shadow-sm bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400',
    none: 'bg-transparent focus:ring-0 focus:shadow-none',
  },
  icon: {
    base: 'flex-shrink-0 !text-white/50',
    color: 'text-{color}-500 dark:text-{color}-400',
    size: {
      '2xs': 'h-4 w-4',
      'xs': 'h-4 w-4',
      'sm': 'h-5 w-5',
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
    loadingIcon: 'i-ph-circle-dashed',
  },
}

export default input
