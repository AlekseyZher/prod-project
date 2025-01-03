import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const bableLoader = {
		test: /\.(js|jsx|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [
					[
						'i18next-extract',
						{
							locales: ['ru', 'en'],
							// keyAsDefultValue: true
						},
					],
				],
			},
		},
	};

	const fileLoader = {
		test: /\.(png|jpg|gif)$/,
		use: [
			{
				loader: 'file-loader',
				options: {},
			},
		],
	};

	const cssLoader = buildCssLoaders(isDev);

	// Если не используем тайпскрипт - нужен babel-loader
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [fileLoader, svgLoader, bableLoader, typescriptLoader, cssLoader];
}
