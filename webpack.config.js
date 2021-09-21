const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // 生成的文件夹名
      template: "public/index.html", // 模板html
      favicon: "public/favicon.ico", // 图标
    }),
    new VueLoaderPlugin(),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"), // html所在路径
    compress: true, // 是否压缩
    port: 3000, // 端口
    hot: true, // 热部署
    open: true, // 打包完成后自动打开网页
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/i,
        use: ["vue-style-loader", "less-loader", "css-loader"],
      },
      {
        // *.js
        test: /\.js$/,
        exclude: /node_modules/, // 不编译node_modules下的文件
        loader: "babel-loader",
      },
      {
        // *.vue
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: {
          loader: "url-loader",
          options: {
            name: "[hash:8]-[name].[ext]",
            outputPath: "images/",
          },
        },
      },
    ],
  },
  // 解析路径
  resolve: {
    // 设置src别名
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    //后缀名 可以根据需要自由增减
    extensions: [".js", "jsx", ".vue"],
  },
};
