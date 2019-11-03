'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || '小泡泡' // page title

//如果端口设置为80，

//使用管理员权限执行命令行。

//例如mac:sudo npm run

//您可以通过以下方法更改端口：

//端口=9527 npm运行开发或npm运行开发--端口=9527
const port = process.env.port || process.env.npm_config_port || 9527 // dev port

//所有配置项解释都可以在https://cli.vuejs.org/config中找到/
module.exports = {
/**

*如果计划在子路径下部署站点，则需要设置publicPath，

*例如GitHub页面如果您计划将站点部署到https://foo.github.io/bar/，

*那么publicpath应该设置为“/bar/”。

*在大多数情况下，请使用“/”！！！！

*详细信息：https://cli.vuejs.org/config/publicpath


*/
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
//change xxx api/login=>模拟/登录

//详细信息：https://cli.vuejs.org/config/#devserver proxy
      [process.env.VUE_APP_BASE_API]: {
        target: `http://127.0.0.1:${port}/mock`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    after: require('./mock/mock-server.js')
  },
  configureWebpack: {
//在webpack的name字段中提供应用程序的标题，以便

//index.html中可以访问它来插入正确的标题。
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    config.plugins.delete('preload') //TODO:需要测试
    config.plugins.delete('prefetch') //TODO:需要测试

    //设置svg sprite加载程序
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    //设置保留空白
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
           //` runtime`必须与runtimechunk名称相同。默认值为“runtime”`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial'//仅打包最初依赖的第三方
                },
                elementUI: {
                  name: 'chunk-elementUI',//将elementui拆分为一个包
                  priority: 20,//重量必须大于libs和app，否则将打包成libs或app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)///为了适应CNPM
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'),//可以自定义规则
                  minChunks: 3,//最小公共数
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
  }
}
