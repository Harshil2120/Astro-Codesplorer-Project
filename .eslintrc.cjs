module.exports = {
	extends: [
		'@astrojs/eslint-config',
		'plugin:astro/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'astro/no-conflict-set-directives': 'error',
		'astro/no-unused-define-vars-in-style': 'error',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-uses-react': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
	},
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			rules: {
				'no-unused-vars': 'off',
			},
		},
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			extends: ['@typescript-eslint/recommended'],
			rules: {
				'@typescript-eslint/no-unused-vars': 'error',
				'@typescript-eslint/no-explicit-any': 'warn',
			},
		},
	],
};
