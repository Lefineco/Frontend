// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/main.css'],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@nuxthq/ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@productdevbook/motion/nuxt',
  ],
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
  },
  ui: {
    icons: ['ph'],
  },
  tailwindcss: {
    config: {
      safelist: [
        'i-ph-circle-dashed',
      ],
    },
    viewer: false,
  },
  experimental: {
    typedPages: true,
    watcher: 'parcel',
  },
})