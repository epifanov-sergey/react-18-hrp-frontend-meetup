const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
        'webpack/hot/dev-server.js',
        'webpack-dev-server/client/index.js?hot=true&live-reload=true',
        './src/index.tsx',
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/index.html'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [{ loader: 'svg-inline-loader' }],
            },
            {
                test: /.(jpg|png|gif|woff)$/,
                use: ['file-loader'],
            },
            {
                test: /.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    devServer: {
        hot: true,
        allowedHosts: 'all',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache',
        },
        port: 3018,
    },
};