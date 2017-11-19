var path = require('path');

const webpack = require('webpack');

module.exports = {
    entry: {
        anamalais: "./assets/scripts/ts/pomo.ts",
        analytics: "./assets/scripts/ts/analytics/index.ts",
        mail: "./assets/scripts/ts/util/mail.ts",
        core: [
            "./assets/scripts/ts/util/logging.ts"
        ]
    },
    module: {
        rules: [
            {
                exclude: '/node_modules/',
                loader: 'ts-loader',
                test: /\.tsx?$/
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "core"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "runtime"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: 'runtime',
            minChunks: Infinity
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '.dist/assets/scripts/js')
    },
    resolve: {
        extensions: [".ts", ".json", ".js"]
    }
}
