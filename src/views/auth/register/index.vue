<template>
  <div class="register">
    <div class="flex w-full flex-col gap-0.5 pb-6">
      <div class="flex items-end gap-2">
        <h3 class="inline-block">Register</h3>
        <p class="inline-block text-white/70">
          Or
          <a href="#" class="text-base">Login</a>
        </p>
      </div>
      <p class="text-sm text-white/50">
        How do i get started blazein dolor at?
      </p>
    </div>
    <form class="auth">
      <BaseButton class="gap-2" variant="constract" size="sm">
        <svg
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#a)">
            <path
              d="M23.5 12.2c0-1 0-1.7-.3-2.4h-11v4.4h6.5a5.9 5.9 0 0 1-2.4 3.9v.1l3.5 2.8h.2c2.2-2 3.5-5.1 3.5-8.8Z"
              fill="#4285F4"
            />
            <path
              d="M12.2 24c3.2 0 5.9-1.1 7.8-3l-3.7-2.9a7 7 0 0 1-10.7-3.8h-.2l-3.6 2.9v.1c1.9 4 5.8 6.6 10.4 6.6Z"
              fill="#34A853"
            />
            <path
              d="M5.6 14.3a7.5 7.5 0 0 1 0-4.7v-.2L1.8 6.5h-.1a12.2 12.2 0 0 0 0 10.8l3.8-3Z"
              fill="#FBBC05"
            />
            <path
              d="M12.2 4.6c2.2 0 3.7 1 4.6 1.8L20 3.1A11.7 11.7 0 0 0 1.8 6.6l3.7 3c1-2.9 3.6-5 6.7-5Z"
              fill="#EB4335"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" transform="translate(.5)" d="M0 0H23V24H0z" />
            </clipPath>
          </defs>
        </svg>
        Sign Up with Google
      </BaseButton>
      <p class="text-sm font-medium text-zinc-500">Or</p>
      <div class="form">
        <BaseFormInput
          v-model="register.username"
          name="username"
          placeholder="Username or Email"
          :icon="{ icon: UserIcon, direction: 'left' }"
        />
        <BaseFormInput
          v-model="register.password"
          name="current-password"
          placeholder="Password"
          type="password"
        />
        <BaseFormInput
          v-model="register.checkPassword"
          name="repeat-password"
          placeholder="Password"
          type="password"
        />
      </div>
      <div class="actions">
        <BaseButton size="sm">Register</BaseButton>
        <BaseButton
          size="sm"
          variant="secondary"
          @click="router.push('/login')"
        >
          Login
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { UserIcon } from '@heroicons/vue/20/solid';
import { useRouter } from 'vue-router';

const router = useRouter();
const register = reactive({
  username: '',
  password: '',
  checkPassword: '',
  remember: false,
});
</script>

<style lang="postcss" scoped>
.register {
  @apply flex flex-col justify-center items-center w-full max-w-xs;
  .auth {
    @apply w-full flex flex-col gap-4 select-none;

    .form {
      @apply flex flex-col gap-2;
    }
    .actions {
      @apply flex flex-col gap-3;
    }
  }
}
</style>
