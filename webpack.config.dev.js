const { merge } = require("webpack-merge");
const common = require("./webpack.config.common.js");
console.log(`|DEVELOPMENT -- BUILD|`);
module.exports = merge(common, {
  mode: "development",
  watch: true
});
