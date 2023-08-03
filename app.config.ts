import presets from '~/composables/presets'

export default defineAppConfig({
  ui: {
    primary: 'indigo',
    gray: 'zinc',
    ...presets,
  },
})
