import type { AuthError } from '@supabase/supabase-js'

import type { LoginSchema } from 'components/Auth/Login/schema'
import type { RegisterSchema } from 'components/Auth/Register/schema'

function useAuth() {
  const supabase = useSupabaseClient()
  const toast = useToast()
  const router = useRouter()

  const errorToast = (error: AuthError | null) => {
    return toast.add({
      id: 'error',
      title: error?.name,
      description: error?.message,
      icon: 'i-octicon-desktop-download-24',
      timeout: 2000,
      color: 'red',
    })
  }

  const successToast = (title: string) => toast.add({
    id: 'success',
    title,
    icon: 'i-octicon-desktop-download-24',
    timeout: 2000,
    color: 'green',
  })

  const signIn = async (payload: LoginSchema) => {
    const { error } = await supabase.auth.signInWithPassword(payload)

    if (error) {
      errorToast(error)
    }

    else {
      successToast('Signed in successfully!')
      router.push('/')
    }
  }

  const signUp = async (payload: RegisterSchema) => {
    const { error } = await supabase.auth.signUp(payload)

    if (error) {
      errorToast(error)
    }

    else {
      successToast('Signed up successfully!')
      router.push('/')
    }
  }

  return { signIn, signUp }
}

export default useAuth
