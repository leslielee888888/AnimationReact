var path = require('path');
const webpack = require('webpack');
const vendors = [
    'react',
    'react-dom',
    'react-router'
];
module.exports = {
    entry: {
        "dll": vendors
    },
    output: {
        path: path.join(__dirname, 'dll'),
        filename: '[name].js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname,'dll','[name]-manifest.json'),
            name: '[name]',
            context: __dirname
        })
    ]
};
