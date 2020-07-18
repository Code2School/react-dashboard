// Environments
const PROD_ENV = 'production';

// Plugins
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Config
const path = require('path');

module.exports = (env, argv) => {
	return ({
		entry: {
			app: './src/index.js',
		},
		output: {
			path: path.resolve(__dirname, 'dist/'),
			filename: '[name].[contenthash:8].js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader'
					}
				},
				{
					test: /\.html$/,
					use: {
						loader: 'html-loader'
					}
				},
				{
					test: /\.less$/,
					use: [
						{
							loader: !(argv.mode === PROD_ENV) ? 'style-loader' : MiniCssExtractPlugin.loader // creates style nodes from JS strings
						},
						{
							loader: 'css-loader', // translates CSS into CommonJS
							options: {
								modules: { // enable css modules
									auto: true,
									localIdentName: "[name]_[local]__[hash:base64:5]"
								},
							}
						},
						{
							loader: 'less-loader' // compiles LESS to CSS
						}
					]
				},
				{
					test: /\.css$/,
					use: [
						{
							loader: !(argv.mode === PROD_ENV) ? 'style-loader' : MiniCssExtractPlugin.loader // creates style nodes from JS strings
						},
						{
							loader: 'css-loader' // translates CSS into CommonJS
						}
					]
				},
				{
					test: /\.(png|svg|jpg|gif)$/,
					use: [
						'url-loader',
					],
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					use: [
						'url-loader',
					],
				},
			]
		},
		resolve: {extensions: ["*", ".js", ".jsx", ".json"]},
		devServer: {
			host: '0.0.0.0',
			port: 3000
		},
		plugins: [
			new HTMLWebpackPlugin({
				template: './src/index.html',
				filename: './index.html',
				inject: 'body'
			}),
			new MiniCssExtractPlugin({
				filename: '[name].[contenthash:8].css'
			})
		],
		optimization: {
			runtimeChunk: 'single',
			splitChunks: {
				cacheGroups: {
					commons: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
						priority: 1
					}
				}

			}
		}
	});
};
