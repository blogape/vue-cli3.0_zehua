const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 引入插件
// require('babel-polyfill')
module.exports = {
    // 基本路径
    // publicPath: process.env.BASE_URL,
    publicPath: './',

    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,

    devServer: {
        proxy: {
            '/': {
                target: 'http://192.168.1.205:8000',
                ws: false
            }
        }
    },
    // 服务器端口号
    // devServer: {
    //   port: 8080
    // },

    configureWebpack: {
        module: {
            rules: [{
                test: /\.js$/, // 处理以.js结尾的文件
                exclude: /node_modules/, // 处理除了nodde_modules里的js文件
                loader: 'babel-loader' // 用babel-loader处理
            }]
        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            // warnings: false,
                            drop_console: true, //console
                            drop_debugger: false,
                            pure_funcs: ['console.log'] //移除console
                        }
                    }
                })
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'windows.jQuery': 'jquery'
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                },
                exclude: [/node_modules/]
            })
        ]
    },
    outputDir: process.env.OUT_DIR,
    runtimeCompiler: true
};

// module.exports = {
//   chainWebpack: config => {
//     config
//       .entry('index')
//       .add('babel-polyfill')
//   }
// }