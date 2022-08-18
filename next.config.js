const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
	env: {
		API_HOST: process.env.API_HOST
	},
	images: {}
})
