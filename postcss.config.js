module.exports = {
	plugins: [
		require("autoprefixer"),
		require("postcss-sort-media-queries")({
			sort: "desktop-first",
		}),
	],
};
