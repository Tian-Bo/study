// 配置文件
module.exports = {
  baseUrl: '/', //根路径
  outputDir: 'dist', //构建输出目录
  assetsDir: 'assets', //静态资源目录
  lintOnSave: false, //是否开启 eslint 保存检测: true || false || 'error'
  devServer: {
    open: true,
    host: 'xiaopaopao.cn',
    port: '80',
    https: false,
    hotOnly: false, //热更新
    proxy: { //配置跨域
      '/api': {
        target: 'http://localhost:3000', //跨域地址
        ws: true, //是否跨域
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}