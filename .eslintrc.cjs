module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'prettier'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'prettier', 'import', 'simple-import-sort'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true }
		],
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'prettier/prettier': [
			'error',
			{
				arrowParens: 'avoid',
				useTabs: true,
				tabWidth: 2,
				printWidth: 80,
				trailingComma: 'none',
				semi: false,
				bracketSameLine: false,
				bracketSpacing: true,
				endOfLine: 'lf',
				singleAttributePerLine: true,
				singleQuote: true,
				jsxSingleQuote: true,
				quoteProps: 'as-needed',
				proseWrap: 'preserve',
				plugins: ['prettier-plugin-tailwindcss']
			}
		]
	}
}
