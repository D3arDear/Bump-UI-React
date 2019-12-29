const path = require("path")
// 由于需要绝对路径所以用这个 path
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
	// mode: "development",
	entry: {
		bui: "./lib/index.tsx",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	output: {
		// 输出到哪
		path: path.resolve(__dirname, "dist/lib"),
		library: "BUI",
		libraryTarget: "umd",
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader",
			},
			{
				test: /\.svg$/,
				loader: "svg-sprite-loader",
			},
		],
	},
	// plugins: [
	//   new HtmlWebpackPlugin({
	//     title: "BUI",
	//     template: "index.html"
	//   })
	// ]
	// externals: {
	//   react: {
	//     commonjs: "react",
	//     commonjs2: "react",
	//     amd: "react",
	//     root: "React"
	//   },
	//   "react-dom": {
	//     commonjs: "react-dom",
	//     commonjs2: "react-dom",
	//     amd: "react-dom",
	//     root: "ReactDOM"
	//   }
	// }
}
