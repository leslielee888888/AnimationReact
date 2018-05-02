var WebpackDevServer = require("webpack-dev-server");
var webpack = require('webpack');
var config = require('./webpack.config');
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8099/", "webpack/hot/dev-server");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    noInfo: false,
    historyApiFallback: true,
    publicPath: config.output.publicPath,
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    proxy: {
        '/shendou': {
            target: 'http://192.168.1.190:8080',
            changeOrigin: true,
            secure: false
        }
    },
    host: "192.168.1.190"
});
server.listen(8099, "localhost", function() {
    console.log("http://localhost:8099/");
});
// server.close();