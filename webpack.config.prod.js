const { merge } = require("webpack-merge");
const common = require("./webpack.config.common.js");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
console.log(`|PRODUCTION -- BUILD|`);
module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(), new TerserPlugin()
    ]
  }
});
