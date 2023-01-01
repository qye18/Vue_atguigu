module.exports = {
  pages: {
    index: {
      entry: 'src/main.js'
    },
  },
  lintOnSave:false,
  // 开启代理服务器
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },
  // 第二种方式开启代理服务器
  // devServer: {
  //   '/api': {
  //     target:'<url>',
  //     ws:true,
  //     changeOrigin:true
  //   }
  // },
}
