import type { AuthError } from '@supabase/supabase-js'
import type { ForgotPasswordEmailSchema, ForgotPasswordSchema, LoginSchema, RegisterSchema } from '@/composables/schemas/auth'

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

	const forgotPasswordEmailSchemas = async (payload: ForgotPasswordEmailSchema) => {
		loading.value = true
		const { error } = await supabase.auth.resetPasswordForEmail(payload.email)
		if (error)
			errorToast(error)

		else
			successToast('Password reset email sent successfully!')

		loading.value = false
	}

	const forgotPassword = async (payload: ForgotPasswordSchema) => {
		loading.value = true
		const { error } = await supabase.auth.updateUser({ password: payload.password })
		if (error) {
			errorToast(error)
		}

		else {
			successToast('Password reset successfully!')
			router.push('/')
		}
		loading.value = false
	}
	return { signIn, signUp, forgotPasswordEmailSchemas, forgotPassword }
}

export default useAuth
