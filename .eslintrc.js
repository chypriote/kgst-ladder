module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: ['eslint:recommended', 'prettier', '@nuxtjs/eslint-config-typescript', 'plugin:vue/strongly-recommended', 'plugin:nuxt/recommended'],
	rules: {
		camelcase: 'off',
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'never',
				exports: 'never',
				functions: 'never',
			},
		],
		indent: ['error', 'tab'],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-prototype-builtins': 'off',
		'no-return-assign': 'error',
		'no-tab': 'off',
		'no-tabs': 'off',
		'number-leading-zero': 'off',
		'object-curly-spacing': ['error', 'always'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'vue/html-indent': 'off',
		'vue/html-self-closing': 'off',
		'vue/max-attributes-per-line': 'off',
		'vue/multiline-html-element-content-newline': 'off',
		'vue/html-closing-bracket-newline': 'off',
		'vue/no-v-html': 'error',
		'vue/prop-name-casing': 'off',
		'vue/singleline-html-element-content-newline': 'off',
		'vue/this-in-template': 'error',
		'@typescript-eslint/no-unused-vars': ['error', { args: 'after-used' }],
	},
}
