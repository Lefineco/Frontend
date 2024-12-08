<script setup lang="ts">
import type { Form } from '#ui/types'
import useAuth from '@/composables/service/auth'
import useAsync from '@/composables/helper/async'
import { registerSchema } from '~/composables/schemas/auth'
import type { RegisterSchema } from '~/composables/schemas/auth'

definePageMeta({
	layout: 'blank',
})

const { signUp } = useAuth()
const { loading, makeAsyncOperation } = useAsync()

const form = ref<Form<RegisterSchema>>()
const values = ref<Partial<RegisterSchema>>({
	email: undefined,
	password: undefined,
	passwordConfirm: undefined,
})

async function onSubmit() {
	await form.value!.validate()
	makeAsyncOperation(async () => {
		await signUp(values.value as RegisterSchema)
	})
}
</script>

<template>
	<UForm
		ref="form"
		:schema="registerSchema"
		:state="values"
		:validate-on="['submit']"
		class="register-container"
		@submit.prevent="onSubmit"
	>
		<SharedLogo to="/" />
		<div class="header">
			<div class="header-box">
				<h1 class="register-title">
					Register
				</h1>
				<span class="sub-text">or</span>
				<NuxtLink
					to="login"
					class="login-title"
				>
					Login
				</NuxtLink>
			</div>

			<p class="sub-text">
				How do I get started blazein dolor at?
			</p>

			<UButton
				icon="i-logos-google-icon"
				variant="soft"
				color="white"
				label="Sign in with Google"
				block
			/>

			<p class="sub-text">
				or
			</p>

			<UFormGroup name="email" size="xs">
				<UInput
					v-model="values.email"
					icon="i-ph-envelope"
					placeholder="Email"
				/>
			</UFormGroup>
			<UFormGroup name="password" size="xs">
				<SharedInputPassword v-model="values.password" placeholder="Password" />
			</UFormGroup>
			<UFormGroup name="passwordConfirm" size="xs">
				<SharedInputPassword
					v-model="values.passwordConfirm"
					placeholder="Confirm Password"
				/>
			</UFormGroup>

			<div class="footer">
				<UCheckbox label="Remember me" />
				<NuxtLink to="/auth/forgot" class="text-[#BFA8FC]">
					Forgot Password?
				</NuxtLink>
			</div>

			<UButton label="Sign Up" block type="submit" :loading="loading" />
		</div>
	</UForm>
</template>

<style lang="postcss" scoped>
.register-container{
	@apply relative w-full gap-12 flex flex-col items-center justify-center text-white z-0 h-[100vh];
}
.sub-text{
	@apply text-sm text-gray-400
}
.header{
	@apply w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 flex flex-col gap-4
}
.header-box{
	@apply flex gap-2 items-end
}
.register-title{
	@apply text-3xl font-bold capitalize
}
.login-title{
	@apply text-[#BFA8FC] underline font-semibold capitalize
}
.footer{
	@apply flex items-center justify-between text-sm
}
</style>
