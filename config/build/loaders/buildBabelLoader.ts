export const buildBabelLoader = (isDev: boolean) => ({
    test: /\.(js|jsx|tsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [
                [
                    'i18next-extract',
                    { locales: ['en', 'sp'], keyAsDefaultValue: true },
                ],
                isDev && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
        },
    },
});
