import webpack from 'webpack';
import friendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';

const baseConfig: webpack.Configuration = {
    module: {
        rules: [
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    // disable type checker - use it in fork plugin
                    transpileOnly: true
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000 // if the file is bigger than that, url-loader falls back to file-loader and creates a file instead of a dataUrl - needs file-loader
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new friendlyErrorsWebpackPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }

};

export default baseConfig;
