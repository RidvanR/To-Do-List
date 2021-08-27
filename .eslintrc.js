module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'linebreak-style': 'off',
				'no-tabs': ['error', { allowIndentationTabs: true }],
				indent: ['error', 'tab'],
			},
		},
		{
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			rules: {
				'react/jsx-indent': ['error', 'tab', { checkAttributes: true, indentLogicalExpressions: true }],
				'react/jsx-indent-props': ['error', 'tab'],
				'linebreak-style': 'off',
				'no-tabs': ['error', { allowIndentationTabs: true }],
				indent: ['error', 'tab'],
			},
		},
	],
};
