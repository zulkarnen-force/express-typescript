const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: "./index.ts", // Replace with your entry TypeScript file
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  optimization: {
    minimizer: [new TerserPlugin()], // Enable minification
  },
  externals: [nodeExternals()],
};
