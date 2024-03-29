import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        buildLocales: '',
        locales: '',
    };
    config.resolve!.modules = [paths.src, 'node_modules'];
    config.resolve?.extensions?.push('.tsx', '.ts');
    config.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': paths.src,
    };

    // @ts-ignore
    config.module!.rules! = config.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module?.rules?.push(buildCssLoader(true));

    config.plugins?.push(
        new webpack.DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify('hrrps://testapi.com'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
