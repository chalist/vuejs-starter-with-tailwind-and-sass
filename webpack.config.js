module.exports = {
    module: {
        loaders: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { hmr: !env.prod },
                    },
                    "css-loader",
                    "postcss-loader",
                ],
            },
        ],
    },
};
