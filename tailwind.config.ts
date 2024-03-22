import type { Config } from 'tailwindcss'
import vidstack from 'vidstack/tailwind.cjs'
import animate from 'tailwindcss-animate'

type TailwindConfig = Config extends { theme: infer T } ? { theme: T } : never

export default {
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {
			colors: {
				'media-brand': 'rgb(var(--media-brand) / <alpha-value>)',
				'media-focus': 'rgb(var(--media-focus) / <alpha-value>)',
			},
		},
	},
	plugins: [
		animate,
		vidstack({
			prefix: 'media',
			webComponents: true,
		}),
		customVariants,
	],

	// Safelisting some classes to avoid content purge
	safelist: [
		'safelisted',
		{
			pattern: /i-(lefine)-*/,
		},
		'i-simple-icons-youtube',
		'i-simple-icons-vimeo',
		'i-ph-film-reel-fill'
	],
} as TailwindConfig

function customVariants({ addVariant, matchVariant }: { addVariant: (name: string, value: string[]) => void; matchVariant: (name: string, value: (value: any) => string) => void}) {
	// Strict version of `.group` to help with nesting.
	matchVariant('parent-data', (value: any) => `.parent[data-${value}] > &`)

	addVariant('hocus', ['&:hover', '&:focus-visible'])
	addVariant('group-hocus', ['.group:hover &', '.group:focus-visible &'])
}
