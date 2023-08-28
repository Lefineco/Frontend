// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    rootTag: 'main',
    rootId: 'lefine',
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
    '@nuxthq/ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/supabase',
    '@hypernym/nuxt-anime',
    '@vueuse/nuxt',
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
    icons: ['ph', 'devicon'],
  },
  supabase: {
    redirect: false,
  },
  tailwindcss: {
    viewer: false,
  },
  experimental: {
    typedPages: true,
    watcher: 'parcel',
    typescriptBundlerResolution: true,
  },
})
