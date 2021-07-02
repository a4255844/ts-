const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    environment: {
      arrowFunction: false  //webpack自身不使用箭头函数
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'babel-loader',
          'ts-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         [
          //           'posscss-preset-env',
          //           {
          //             browsers: 'last 2 versions'
          //           }
          //         ]
          //       ]
          //     }
          //   }
          // },
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },
  mode: 'production',
  plugins: [
    //自动清除dist文件夹
    new CleanWebpackPlugin(),
    // 自动引入文件到html，压缩html,指定html模板
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  //用来设置引用模块
  devServer: {
    port: 9000,
    open: true,  //自动打开浏览器
    // quiet: true, // 减少打包日志输出
    compress: true,
    hot: true,  //热膜替换

  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: { // 路径别名(简写方式)
      // 'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配 from vue = from vue/dist/vue.esm.js  带vue编译器
      '@': path.resolve(__dirname, 'src') //以@表示当前项目的src目录
    }
  }
}