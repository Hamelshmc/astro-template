module.exports = {
	arrowParens: 'always',
	bracketSameLine: true,
	bracketSpacing: true,
	endOfLine: 'lf',
	embeddedLanguageFormatting: 'auto',
	htmlWhitespaceSensitivity: 'css',
	printWidth: 100,
	proseWrap: 'preserve',
	quoteProps: 'as-needed',
	semi: true,
	singleAttributePerLine: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'none',
	useTabs: false,
	resolveGlobalModules: true,
	useEditorConfig: false,
	jsxSingleQuote: true,
	overrides: [
		{
			files: ['*.json', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false
			}
		}
	]
};
