const HtmlWebpackPlugin = require('html-webpack-plugin')

const pages = [
    {
        template: './src/index.html',
        filename: 'index.html',
        chunks: ['index']
    },
    {
        template: './src/pages/contact/index.html',
        filename: 'contact.html',
        chunks: ['contact']
    },
]   

module.exports = pages.map(page => new HtmlWebpackPlugin(page))