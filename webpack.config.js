const path = require("path")
const webpack = require('webpack'); //to access built-in plugins
const childProcess = require('child_process');
const HtmlPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtreactPlugin = require('mini-css-extract-plugin');
// const banner =`
//   Building Data : ${new Date().toLocaleString()}
//   Commit version : ${childProcess.execSync('git rev-parse --short HEAD')}
//   Author : ${childProcess.execSync('git config user.name')}
// `;//git 으로 관리할때 banner 예시
// const MyPlugin = require("./myplugin")
// const banner = require("./banner.js")
module.exports = {
    // plugins: [new MyPlugin()],
  mode: "development",
  entry: {
    main: "./src/app.js",
    // main2: "./src/app2.js", //24 번째 줄
  },
  module:{
    rules:[{
      test:/\.js$/,
      use:[path.resolve("./myloader.js")]
    },{
      test:/\.css$/,
      use:[
        process.env.NODE_ENV==='production'
        ?MiniCssExtreactPlugin.loader
        :"style-loader",
        "css-loader"
      ]
    },{
      test: /\.(png|jpg|svg|gif)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]',
      }
    }
  ]
  },
  plugins: [
    new webpack.BannerPlugin({ 
      banner:`
        Building Data : ${new Date().toLocaleString()}
      `
    }),
    new webpack.DefinePlugin({
      TWO:'1+1',  //기본 값은 코드로 들어간다 TWO 에는 2가 들어가있다.
      THREE:JSON.stringify('1+1+1'),  //json 함수를 이용하면 문자열을 넣는다 1+1+1이 들어가있다
      'api.one':'1+1',  //이렇게도 된다
    }),
    new HtmlPlugin({
      template:'./index.html',
      templateParameters:{
        env:process.env.NODE_ENV==='development'?'개발용':'배포용'
      },
      minify:process.env.NODE_ENV==='production'?{
        collapseWhitespace:true,//빈칸제거
        removeComments:true,//주석제거
      }:false
    }),
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV==='production'?[
      new MiniCssExtreactPlugin({filename:'[name].css'}),
      ]:[]
    )
  
  ],

  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",//앤트리가 2개이상일때 유용
  },


}