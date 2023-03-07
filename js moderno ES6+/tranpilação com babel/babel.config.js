const presets = [ 
    [ 
        "@babel/preset-env",
        {
            useBuiltIns: "usage",
            corejs: "3.29.0"
        }
    ] 
];

module.exports = { presets }