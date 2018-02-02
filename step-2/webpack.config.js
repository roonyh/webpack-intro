module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};