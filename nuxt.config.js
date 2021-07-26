const isDev = process.env.context !== 'production'

export default {
	target: 'static',
	components: false,
	telemetry: false,
	dev: isDev,
	head: {
		title: 'kingsladder',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
		],
	},
	loading: {
		color: 'var(--text-color-primary)',
	},
	css: ['reset-css', 'hint.css/hint.min.css', '~/assets/app.css'],
	plugins: ['~/plugins/filters'],
	buildModules: [
		isDev ? ['@nuxtjs/eslint-module', { cache: true, fix: isDev }] : '',
		'@nuxt/typescript-build',
		'@nuxtjs/stylelint-module',
	].filter(Boolean),
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@nuxtjs/strapi',
		!isDev ? ['@nuxtjs/google-analytics', { id: process.env.google_analytics }] : '',
		['@nuxtjs/google-adsense', { id: `ca-pub-${process.env.adsense_id}` }],
	].filter(Boolean),
	strapi: {
		url: process.env.STRAPI_URL || 'http://localhost:1337',
	},
	pwa: {
		manifest: { lang: 'en' },
		icon: { fileName: 'favicon.png', theme_color: '#00d1b2', background_color: '#0f1923' },
		meta: { theme_color: '#0f1923' },
	},
	build: {
		devtools: isDev,
		terser: true,
		extend (config) {
			config.resolve.alias.vue = 'vue/dist/vue.esm.js'
		},
		transpile: ['lodash-es'],
		postcss: {
			parser: require('postcss-comment'),
			plugins: {
				'postcss-import': {},
				'postcss-nested': {},
				'postcss-custom-properties': {},
			},
		},
	},
}
