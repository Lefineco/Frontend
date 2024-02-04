import type { AuthError } from '@supabase/supabase-js'
import type { ForgotPasswordEmailSchema, ForgotPasswordSchema, LoginSchema, RegisterSchema } from '@/composables/schemas/auth'

function useAuth() {
	const supabase = useSupabaseClient()
	const router = useRouter()
	const loading = ref(false)

	const errorToast = (error: AuthError | null) => push.error({
		title: error?.name,
		message: error?.message,
	})

	const successToast = (title: string) => push.success({
		title,
		message: 'Welcome back!',
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
