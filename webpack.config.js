const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: "./index.ts", // Replace with your entry TypeScript file
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"), // Output directory
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
      { test: /\.node$/, loader: "node-loader" },
    ],
  },
  resolve: {
    extensions: [".ts", ".node", ".js"],
  },
  optimization: {
    minimizer: [new TerserPlugin()], // Enable minification
  },
};
