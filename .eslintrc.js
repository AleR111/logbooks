module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'check-imports-plugin',
        'unused-imports',
    ],
    rules: {
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'no-restricted-syntax': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'data-testid',
                    'to',
                    'target',
                    'justify',
                    'align',
                    'direction',
                    'gap',
                    'role',
                    'as',
                    'border',
                ],
            },
        ],
        // todo fix on save
        'linebreak-style': 0,
        'max-len': ['error', { ignoreComments: true, code: 120 }],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'react/prop-types': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'no-undef': 'off',
        'react/no-array-index-key': 'off',
        'check-imports-plugin/imports-checker': ['error', { alias: '@' }],
        'check-imports-plugin/public-api-imports-fsd': [
            'error',
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.*',
                    '**/stories.*',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        'check-imports-plugin/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
        'unused-imports/no-unused-imports': 'error',
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: [
                '**/src/**/*.test.{ts,tsx}',
                '**/src/**/*.stories.{ts,tsx}',
            ],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};
