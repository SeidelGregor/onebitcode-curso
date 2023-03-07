const path = require("path");

module.exports = {
    entry:{
        index: "./src/index.js",
        bem_vindo: "./src/bem_vindo.js"
    },
    output:{
        filename:"[name].pack.js",
        path: path.resolve(__dirname, "dist")
    },
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