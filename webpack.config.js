const path = require("path");
const webpack = require("webpack");
const output = 'public';

module.exports = {
    entry: {
        app: "./app/index.js"
    },

    output: {
        path: path.join(__dirname, output),
        filename: 'bundle.js'
    },



    // serveur de développement démarré sur le port 9000
    // la racine du serveur web sera le répertoire 'public'
    devServer: {
        contentBase: path.join(__dirname, output),
        port: 9000
    },



    // pour du debogage des sources ES2015
    devtool: 'cheap-module-eval-source-map',

    module: {
        rules: [
            // support d'ES2015 avec Babel
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [['env', {
                        modules: false,
                        targets: {browsers: ["last 2 versions"]}
                    }]]
                }
            },

            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },

            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },

            {
                test: /\.html$/,
                exclude: [/node_modules/],
                loader: 'raw-loader',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=/public/icons/[name].[ext]"
            }
        ]
    }
}
