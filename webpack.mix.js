let mix = require("laravel-mix");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let purgecss = require('@fullhuman/postcss-purgecss');

mix.setPublicPath("dist");

mix.js("src/js/home.js", "dist/js");
// mix.sass("src/sass/home.scss", "dist/css");
mix.sass("src/sass/home.scss", "dist/css");


mix.copyDirectory("src/images", "dist/images");

mix.disableNotifications();

mix.webpackConfig({
  plugins: [
    new HtmlWebpackPlugin({
      template: "ejs-compiled-loader!./src/home.ejs",
      filename: "index.html",
      inject: false,
    }),
  ],
  devServer: {
    hot: true,
    liveReload: true,
    host: "0.0.0.0",
    open: true,
  },
});