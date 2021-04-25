const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const glob = require("glob");
module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "./public/"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  plugins: [
    new ImageminPlugin({
      externalImages: {
        context: ".",
        sources: glob.sync("./client/images/**/*.{jpg, jpeg, webp}"),
        destination: "./public/images",
        fileName: "[name].[ext]",
      },
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,

          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("tailwindcss"), require("autoprefixer")],
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
