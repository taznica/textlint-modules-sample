// npm install --save-dev webpack webpack-cli ts-loader
// webpack

module.exports = {
  mode: "development",
  entry: "./main.ts",
  output: {
    path: __dirname,
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
