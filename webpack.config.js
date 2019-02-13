const path = require("path")
const webpack = require("webpack")
const exec = require("child_process").exec
const EttyPlugin = require("etty-webpack-plugin").default

console.log("\n\n")
console.log(`\x1b[32m\x1b[1m You are running devserver\x1b[0m`)
console.log("\n\n")

var config = {
	mode: "development",
	entry: {
		app: path.resolve(__dirname, "src/index.tsx")
	},
	output: {
		path: __dirname,
		filename: "dist/bundle.js",
		publicPath: "/"
	},

	devtool: "eval-source-map",
	devServer: {
		historyApiFallback: true,
		hot: true,
	},

	module: {
		rules: [
			{
				test: /\.(t|j)sx?$/,
				loader: "awesome-typescript-loader",
				exclude: /node_modules\/(?!superagent)/
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.(sa|c)ss$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							minimize: true
						}
					},
					{
						loader: "sass-loader",
						options: {
							includePaths: [
								path.resolve(__dirname, "src")
							]
						}
					}
				]
			},
		]
	},
	resolve: {
		modules: [
			"node_modules",
			path.resolve(__dirname, "src"),
		],
		extensions: [".js", ".jsx", ".sass", ".json", ".css", ".ts", ".tsx"]
	},
	performance: {
		hints: false,
	},
	parallelism: 2,
	plugins: [
		new EttyPlugin({
			locales: "./src/config/locales.json",
			template: "./src/config/template.json",
			compileTo: "./static/translations"
		})
	],
}

module.exports = config