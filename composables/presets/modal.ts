const modal = {
  wrapper: 'relative z-50',
  inner: 'fixed inset-0 overflow-y-auto p-10',
  container: 'flex min-h-full items-center justify-center text-center border-2 border-white/5 rounded-xl',
  padding: 'p-4 sm:p-0',
  base: 'relative text-left rtl:text-right overflow-hidden sm:my-8 w-full flex flex-col',
  overlay: {
    base: 'fixed !bg-black/60 backdrop-blur-sm inset-0 transition-opacity',
    transition: {
      enter: 'ease-out duration-300',
      enterFrom: 'opacity-0',
      enterTo: 'opacity-100',
      leave: 'ease-in duration-200',
      leaveFrom: 'opacity-100',
      leaveTo: 'opacity-0',
    },
  },
  background: 'bg-zinc-900',
  ring: '',
  rounded: 'rounded-lg',
  shadow: 'shadow-xl',
  width: 'sm:max-w-lg',
  height: '',
  transition: {
    enter: 'ease-out duration-300',
    enterFrom: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
    enterTo: 'opacity-100 translate-y-0 sm:scale-100',
    leave: 'ease-in duration-200',
    leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
    leaveTo: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
  },
}

export default modal
