import { getIconCollections } from '@egoist/tailwindcss-icons'
import { vite as vidstack } from 'vidstack/plugins'
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
			htmlAttrs: {
				lang: 'en',
			},
			link: [
				{ rel: 'dns-prefetch', href: 'https://api.fontshare.com' },
			],
		},
	},
	vue: {
		compilerOptions: {
			isCustomElement: tag => tag.startsWith('media-'),
		},
	},
	css: [
		'~/assets/styles/main.css',
		'notivue/notifications.css',
		'notivue/animations.css',
	],
	notivue: {
		position: 'bottom-right',
		enqueue: true,
		limit: 5,
	},
	postcss: {
		plugins: {
			'postcss-nested': {},
			'postcss-mixins': {},
			'cssnano': {},
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
		'notivue/nuxt',
		'@nuxtjs/partytown',
		'@nuxtjs/fontaine',
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
		plugins: [
			vidstack({ include: /player\// }),
		],
	},
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
						...platform,
					},
				},
				...getIconCollections(['ph', 'logos', 'simple-icons']),
			},
		},
	},
	image: {
		dir: 'assets/media',
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
		sharedPrerenderData: true,
	},
	typescript: {
		strict: true,
	},
	nitro: {
		experimental: {
			asyncContext: true,
		},
	},
	runtimeConfig: {
		tmbdToken: import.meta.env.TMBD_API_KEY
	},
})
