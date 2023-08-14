import type { AuthError } from '@supabase/supabase-js'

import type { LoginSchema } from 'components/Auth/Login/schema'
import type { RegisterSchema } from 'components/Auth/Register/schema'

function useAuth() {
  const supabase = useSupabaseClient()
  const toast = useToast()
  const router = useRouter()
  const loading = ref(false)

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

  const successToast = (title: string) =>
    toast.add({
      id: 'success',
      title,
      icon: 'i-octicon-desktop-download-24',
      timeout: 2000,
      color: 'green',
    })

  const signIn = async (payload: LoginSchema) => {
    loading.value = true
    const { error } = await supabase.auth.signInWithPassword(payload)

    if (error) {
      errorToast(error)
    }
    else {
      successToast('Signed in successfully!')
      router.push('/')
    }
    loading.value = false
  }

  const signUp = async (payload: RegisterSchema) => {
    loading.value = true
    const { error } = await supabase.auth.signUp(payload)

    if (error) {
      errorToast(error)
    }
    else {
      successToast('Signed up successfully!')
      router.push('/')
    }
    loading.value = false
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      errorToast(error)
    }
    else {
      successToast('Sign Out successfully!')
      router.push('/')
    }
  }

  return { signIn, signUp, signOut }
}

export default useAuth
