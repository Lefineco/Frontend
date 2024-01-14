import { getIconCollections } from '@egoist/tailwindcss-icons'
import platform from './composables/icons/platform'

export default defineNuxtConfig({
	app: {
		rootTag: 'main',
		rootId: 'lefine',
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			title: 'Lefine',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width,initial-scale=1' },
			],
		},
	},
	css: ['~/assets/styles/main.css', 'plyr/dist/plyr.css'],
	postcss: {
		plugins: {
			'postcss-nested': {},
			'postcss-mixins': {},
		},
	},
	colorMode: {
		preference: 'dark',
	},
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
		'@vueuse/nuxt',
		'@nuxt/image',
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
	// ui: {
	// 	icons: ['ph', 'logos'],
	// },
	ui: {
		icons: {
			// might solve stretch bug on generate, see https://github.com/egoist/tailwindcss-icons/issues/23
			extraProperties: {
				'-webkit-mask-size': 'contain',
				'-webkit-mask-position': 'center',
			},
			collections: {
				lefine: {
					icons: {
						...platform
					},
				},
				...getIconCollections(['ph', 'logos']),
			},
		},
	},
	supabase: {
		redirect: false,
	},
	tailwindcss: {
		viewer: false,
	},
	experimental: {
		typedPages: true,
		treeshakeClientOnly: true,
	},
	typescript: {
		strict: true,
	},
})
