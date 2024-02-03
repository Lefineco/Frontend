<script setup lang="ts">
import type { Form } from '#ui/types'
import useAuth from '@/composables/service/auth'
import useAsync from '@/composables/helper/async'
import { loginSchema } from '~/composables/schemas/auth'
import type { LoginSchema } from '~/composables/schemas/auth'

definePageMeta({
	layout: 'blank',
	// middleware: 'auth',
})

const supabase = useSupabaseClient()

const form = ref<Form<LoginSchema> | null>(null)
const values = ref<Partial<LoginSchema>>({
	email: undefined,
	password: undefined,
})
async function onSubmit() {
	await form.value?.validate()
}
function signInWithGoogle() {
	supabase.auth.signInWithOAuth({
		provider: 'google',
	})
}
</script>

<template>
	<UForm
		ref="form"
		:schema="loginSchema"
		:state="values"
		class="login-container"
		:validate-on="['submit']"
		@submit.prevent="onSubmit"
	>
		<SharedLogo to="/" />
		<div class="form">
			<div class="header-box">
				<h1 class="header-title">
					Login
				</h1>
				<span class="sub-text">or</span>
				<NuxtLink
					to="register"
					class="text-[#BFA8FC] underline font-semibold capitalize"
				>
					Register
				</NuxtLink>
			</div>

			<p class="sub-text">
				How do I get started blazein dolor at?
			</p>

			<UButton
				icon="i-logos-google-icon"
				label="Sign in with Google"
				variant="soft"
				color="white"
				block
				@click="signInWithGoogle()"
			/>

			<p class="sub-text">
				or
			</p>

			<UFormGroup name="email" size="xs">
				<UInput
					v-model="values.email"
					icon="i-ph-user-fill"
					placeholder="Username or Email"
				/>
			</UFormGroup>
			<UFormGroup name="password" size="xs">
				<SharedInputPassword v-model="values.password" placeholder="Password" />
			</UFormGroup>

			<div class="footer-box">
				<UCheckbox label="Remember me" />
				<NuxtLink to="/auth/forgot" class="forgot-password">
					Forgot Password?
				</NuxtLink>
			</div>

			<UButton label="Sign In" block type="submit" />
		</div>
	</UForm>
</template>

<style lang="postcss" scoped>
.login-container{
	@apply relative w-full h-full gap-12 flex flex-col items-center justify-center text-white z-0

}
.form{
	@apply w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 flex flex-col gap-4
}
.header-box{
	@apply flex gap-2 items-end
}
.header-title{
	@apply text-3xl font-bold capitalize
}
.sub-text{
	@apply text-sm text-gray-400
}
.footer-box{
	@apply flex items-center justify-between text-sm
}
.forgot-password{
	@apply text-primary-300 font-medium text-xs
}
</style>
