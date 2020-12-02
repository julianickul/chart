const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 

module.exports = {
	entry: { 
		main: "./src/pages/index.js"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js"
	},
	resolve: {
		extensions: ['.js', '.scss']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: "/node_modules/",
				loader: "babel-loader"
			},
			{ 
				test: /\.pug$/,
				use: ["pug-loader"]
			},
			{
				test: /\.s(a|c)ss$/i,
				use: [
					//"style-loader",
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
							modules: false,
						}
					},
					{
					loader: 'postcss-loader',
					options: {
						sourceMap: true,
					}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					/*{
					loader: "style-loader"
					},*/
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true, importLoaders: 1 }
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
						}
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif|woff|woff2)$/,
				loader: "file-loader",
				options: {
					name: './images/[name].[ext]'
				}
			},
			/*{
				test: /\.html$/,
				loader: "html-loader",
			}*/
			/*{
				test: /\.css$/,
				loader: [
				  MiniCssExtractPlugin.loader,
				  {
					loader: "css-loader",
					options: {
					  importLoaders: 1
					}
				  },
				  "postcss-loader"
				],
			},*/
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/pages/index.pug",
			filename: "./index.html",
		}),
		new MiniCssExtractPlugin({
			filename:'[name].css',
		})
	]
}
