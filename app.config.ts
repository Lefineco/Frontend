import presets from '~/composables/presets'

export default defineAppConfig({
	ui: {
		primary: 'purple',
		gray: 'zinc',
		...presets,
	},
})
