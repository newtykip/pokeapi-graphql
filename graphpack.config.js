const snakeCase = require('lodash.snakecase');

module.exports = {
    webpack: ({
        config,
        webpack
    }) => {
        config.module.rules.push({
            test: /\.tsx?$/,
            loader: 'ts-loader',
        });
        config.resolve = {
            extensions: ['.ts', '.tsx', '.js'],
        };
        return config;
    },
    server: {
        fieldResolver: (source, _args, _contextValue, info) => source === Object(source) ? source[snakeCase(info.fieldName)] : null,
    },
};