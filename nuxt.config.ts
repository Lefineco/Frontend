// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootTag: 'main',
    rootId: 'lefine',
  },
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
    '@nuxtjs/supabase',
  ],
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
    config: {
      content: [
        'presets/**/**.{js,ts}',
      ],
    },
    viewer: false,
  },
  experimental: {
    typedPages: true,
    watcher: 'parcel',
  },
})
