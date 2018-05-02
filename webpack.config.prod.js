var path = require('path');
const webpack = require('webpack');
const theme = require('./theme.json');
module.exports = {
    entry: {app: ["babel-polyfill", "./src/app.js"]},
    devtool: 'sourcemap',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.bundle.js',
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/,
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash].[ext]',
                            publicPath: './build/'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            ['import', {libraryName: 'antd-mobile', style: true}]
                        ]
                    }
                }],

            },
            {
                test: /\.less$/,
                include: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            modifyVars: theme,
                        }
                    }],
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {loader: 'postcss-loader'}]
            },
            {
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    },
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader'}]
            },
            {
                test: /\.(svg)$/i,
                include: [
                    require.resolve('antd-mobile').replace(/warn\.js$/, ''),
                    // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
                ],
                use: [
                    {
                        loader: 'svg-sprite-loader'
                    }]
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules', path.join(__dirname, '../node_modules')
        ],
        extensions: ['.web.js', '.js', '.json'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin(
            {
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
                }
            }
        ),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        })
    ]
};
