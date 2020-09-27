module.exports = {
    entry: './src/app.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {

            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader'
                ]
            }
        ],
    },
    devServer: {
        historyApiFallback: true,
        host: '0.0.0.0',
        compress: true,
        hot: true,
        port: 3000,
        publicPath: '/',
    },
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    plugins: [
    ],
};

