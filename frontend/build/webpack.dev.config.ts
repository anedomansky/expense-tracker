import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.base.config';
import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import forkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';

const devConfig: webpack.Configuration = {
    devtool: '#cheap-module-eval-source-map',
    entry: {
        app: ['webpack-hot-middleware/client', './src/index.tsx']
    },
    mode: 'development',
    optimization: {
        noEmitOnErrors: true
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            inject: true,
            title: 'Expense-Tracker',
            template: path.resolve(__dirname, '../src/index.html')
        }),
        new forkTsCheckerWebpackPlugin({
            eslint: true
        }),
        new CleanWebpackPlugin()
    ],
    stats: 'errors-only'
};

export default merge(baseConfig, devConfig);
