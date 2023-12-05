const { generateSW } = require('workbox-build')

generateSW({
  globDirectory: 'dist/',
	globPatterns: [
		'**/*.{png,ico,svg,html,woff2}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'dist/sw.js',
  sourcemap: false
})
