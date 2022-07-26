// 这里可以关闭eslint ，反向代理..... 
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      "/ajax":{
        target:"https://m.maoyan.com",
        changeOrigin:true
      }
    }
  }
})
