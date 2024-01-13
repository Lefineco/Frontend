import antfu from '@antfu/eslint-config'

export default antfu({
	stylistic: {
		indent: 'tab',
		quotes: 'single',
	},

	rules: {
		'no-trailing-spaces': ['error', { skipBlankLines: true, ignoreComments: true }],
	},

	ignores: [
		'package.json',
		'package-lock.json',
		'server/types/supabase.ts',
		'node_modules',
	],
})
