const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin=require("extract-text-webpack-plugin");
module.exports={
    mode:'development',//development 开发环境   production 生产环境
    entry:{
        index:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:'[name].js'
    },
    //配置识别css文件
    module:{
        rules:[
            {   //css分离出js文件
                test:/\.css$/,              
                use:ExtractTextPlugin.extract({   //['style-loader','css-loader'] (css打包到js文件中)
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },
            {   //css中引入图片
                test:/\.(jpg|png|gif)/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:500,
                            outputPath:"images/" ,
                            esModule: false,//打包图片路径有default
                        }
                    }
                ]
            },
            {   //HTML中图片打包
                test:/\.(htm|html)$/i,
                loader:["html-withimg-loader"]
            },
            // {    //sass打包
            //     test:/\.(scss|sass)$/,
            //     use:[ "style-loader","css-loader","sass-loader"]
            // },
            {   //sass分离出js文件
                test:/\.(sass|scss)$/,              
                use:ExtractTextPlugin.extract({   
                    fallback:"style-loader",
                    use:["css-loader","sass-loader"]
                })
            }
        ]
    },
    //配置识别html文件
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new ExtractTextPlugin("style.css")
    ],
    //服务与热更新
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),//根目录
        host:'localhost'
    }
}
