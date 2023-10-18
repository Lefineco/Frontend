// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootTag: 'main',
    rootId: 'lefine',
    head: {
      title: 'Lefine',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      ],
    },
  },
  css: ['~/assets/main.css', 'plyr/dist/plyr.css'],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@vue-macros/nuxt',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/supabase',
    '@hypernym/nuxt-anime',
    '@vueuse/nuxt',
    '@nuxtjs/storybook',
  ],
  macros: {
    setupSFC: true,
    defineModels: true,
  },
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
  },
  ui: {
    icons: ['ph', 'logos', 'mdi'],
  },
  supabase: {
    redirect: false,
  },
  tailwindcss: {
    viewer: false,
  },
  experimental: {
    typedPages: true,
    typescriptBundlerResolution: true,
  },
  typescript: {
    strict: true,
  },
})