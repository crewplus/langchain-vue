const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    externals: {
      'vue': 'Vue'
    } 
  }
  // devServer: {
  //   port: 8080,  //没被占用，可以使用的端口
  //   open: true,
  //   compress: false,                // must set it in dev, otherwise can't listen to onmessage in SSE    
  //   proxy: {
  //     '/api':{
  //       target: 'https://stream.lib2gpt.com/ask', //接口域名
  //       changeOrigin: true,             //是否跨域
  //       secure: true,                   //是否https接口

  //       pathRewrite: {                  //路径重置
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }

})
