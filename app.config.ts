/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import presets from '~/composables/presets'

export default defineAppConfig({
  // @ts-ignore
  ui: {
    primary: 'indigo',
    gray: 'zinc',
    ...presets,
  },
})
