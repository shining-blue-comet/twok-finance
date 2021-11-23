const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
            test: /\.exec\.js$/,
            use: [ 'script-loader' ]
        },
        {
            test: /.js/,
            enforce: 'pre',
            exclude: /node_modules/,
            use: [
              {
                loader: `jshint-loader`,
                options: {...options}
              }
            ]
        },
        {
          test: /\.ext$/,
          use: ['cache-loader', ...loaders],
          include: path.resolve('src'),
        },
      ],
    },
    plugins: [
        new CopyPlugin({
          patterns: [
            { from: "source", to: "dest" },
            { from: "other", to: "public" },
          ],
        }),
    ],
};