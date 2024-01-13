<script setup lang="ts">
const showPassword = ref(false)
function togglePassword() {
	return showPassword.value = !showPassword.value
}
</script>

<template>
	<UInput icon="i-ph-lock" :ui="{ icon: { trailing: { pointer: '' } } }" :type="showPassword ? 'text' : 'password'">
		<template #trailing>
			<UButton
				color="gray"
				class="opacity-50 hover:opacity-100"
				variant="link"
				:icon="showPassword ? 'i-ph-eye-slash-fill' : 'i-ph-eye-fill'"
				:padded="false"
				@click="togglePassword"
			/>
		</template>
	</UInput>
</template>
