const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production", // 'development' 或 'production' 取决于你的需求
  entry: {
    react: "./src/react/WeatherIcon.jsx",
    vue: "./src/vue/WeatherIcon.vue",
  },
  output: {
    path: path.resolve(__dirname, "dist"), // 输出目录
    filename: "[name]/index.js", // 输出的文件名
    libraryTarget: "umd", // 输出格式
    globalObject: "this", // 全局对象
  },
  resolve: {
    extensions: [".js", ".jsx", ".vue"], // 导入时省略的文件扩展名
    alias: {
      "weather-icons-library/react": path.resolve(__dirname, "src/react"), // React 版本的别名
      "weather-icons-library/vue": path.resolve(__dirname, "src/vue"), // Vue 版本的别名
    },
  },
  externals: {
    react: "React",
    vue: "Vue",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              svgoConfig: {
                plugins: [
                  {
                    removeViewBox: false,
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [new VueLoaderPlugin()],
  optimization: {
    minimize: true, // 启用代码压缩
    minimizer: [new TerserPlugin()],
  },
};
