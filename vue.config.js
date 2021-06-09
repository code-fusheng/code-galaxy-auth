module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
      port: 7000, // 端口号，如果端口号被占用，会自动提升1
      host: "localhost", //主机名
      https: false, //协议
      open: true, //启动服务时自动打开浏览器访问
      proxy: { // 开发环境代理配置
          // '/dev-api': {
            '/auth': {
              target: 'http://localhost:9999',
              changeOrigin: true,
              secure: false,
              rewrite: (path) => path.replace('/auth', '')
            }
      }
  },

  lintOnSave: false, // 关闭格式检查
  productionSourceMap: false, // 打包时不会生成 .map 文件，加快打包速度

}
