module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		// 'vue/setup-compiler-macros': true
	},
	globals: {
		defineProps: readonly
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'overrides': [],
	'parser': ['@typescript-eslint/parser', 'vue-eslint-parser'],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
	},
	'plugins': [
		'vue',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};
