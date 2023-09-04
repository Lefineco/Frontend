// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootTag: 'main',
    rootId: 'lefine',
  },
  css: ['~/assets/main.css', 'plyr/dist/plyr.css'],
  devtools: {
    enabled: true,
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
    icons: ['ph', 'logos'],
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
  typescript: {
    strict: true,
  },
})
