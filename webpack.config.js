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
		library: "bui",
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
			{
				test: /\.s([ac])ss$/,
				use: [
					"style-loader", // 把 对象 变成一个 style 标签
					"css-loader", // 把 css 字符串 变成一个对象
					"sass-loader", // 以字符串的形式把 scss 变成 css
				],
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
