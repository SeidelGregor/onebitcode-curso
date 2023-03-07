const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry:{
        index: "./src/js/index.js",
    },
    output:{
        filename:"[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    module:{
        rules:[
            {
                test: /\.js$/,
                use:["babel-loader"]
            }
        ]
    },
    watch: true,
}