const path = require("path")
const webpack = require("webpack")
const exec = require("child_process").exec
const EttyPlugin = require("../etty-webpack-plugin/dist").default

console.log("\n\n")
console.log(`\x1b[32m\x1b[1m You are running devserver\x1b[0m`)
console.log("\n\n")

const Reset = "\x1b[0m"
const Bright = "\x1b[1m"
const Dim = "\x1b[2m"
const Underscore = "\x1b[4m"
const Blink = "\x1b[5m"
const Reverse = "\x1b[7m"
const Hidden = "\x1b[8m"

const FgBlack = "\x1b[30m"
const FgRed = "\x1b[31m"
const FgGreen = "\x1b[32m"
const FgYellow = "\x1b[33m"
const FgBlue = "\x1b[34m"
const FgMagenta = "\x1b[35m"
const FgCyan = "\x1b[36m"
const FgWhite = "\x1b[37m"

const BgBlack = "\x1b[40m"
const BgRed = "\x1b[41m"
const BgGreen = "\x1b[42m"
const BgYellow = "\x1b[43m"
const BgBlue = "\x1b[44m"
const BgMagenta = "\x1b[45m"
const BgCyan = "\x1b[46m"
const BgWhite = "\x1b[47m"

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
		new EttyPlugin()
		// {
		// 	apply: compiler => {
		// 		compiler.hooks.beforeCompile.tapPromise("Kappa", () => {
		// 			return new Promise((resolve, reject) => {
		// 				var ettyLog = `${Dim}${FgYellow}｢etty｣${Reset}:`
	
		// 				console.log(`${FgBlue}ℹ ${ettyLog} Compiling translations...`)
	
		// 				exec("npm run etty", (error, stdout) => {
		// 					if (error) {
		// 						console.log(`${FgRed}✖ ${ettyLog} Failed to compile translations.\n${FgRed}`)
		// 						return reject(new Error("Probably you did not create a translations folder"))
		// 					}
							
		// 					stdout.split("\n").forEach(str => {
		// 						if (str && !str.startsWith("> ", 0))
		// 							console.log(`${FgGreen}✔ ${ettyLog} ${str}`)
		// 					})
		// 					resolve()
		// 				})
		// 			})
		// 		})
		// 	}
		// }
	],
}

module.exports = config