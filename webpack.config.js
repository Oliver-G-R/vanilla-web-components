const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const pagesConfig = require('./pages.config');

module.exports = {
    entry: {
        index: './src/index.js',
        contact: './src/pages/contact/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },

    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@styles': path.resolve(__dirname, 'src/styles'),
        }
    },

    module:{
        rules: [
            {
                test: /\.(js)$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                ]
            },
        ]
    },

    plugins:[
        ...pagesConfig,
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css'
        })
    ]

}