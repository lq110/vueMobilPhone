let path = require('path')
module.exports = {
  // 打包部分
  // 3.3之前publicPath叫做baseUrl
  // 示例就是指定域名
  publicPath: "www.baidu.com",
  //打包出来的路径
  outputDir: "build",//默认叫做dist
  //静态资源目录  js css img fonts 常用
  assetsDir: 'static',
  //
  productionSourceMap: false,//生成soucemap文件 false 不生成  常用

  // 与打包无关
  //修改webpack配置
  chainWebpack: config => {
    // 配置组件别名  例如../components/home 改成 _c/home
    config.module.resolve.alias
      .set('_c', path.resolve("scr/components"))
      .set('_v', path.resolve("scr/views"))
  }
}
