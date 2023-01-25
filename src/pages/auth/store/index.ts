import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '',
    isLoggedIn: '',
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
    },
  },
});
