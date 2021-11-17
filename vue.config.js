module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'https://randomuser.me/api/',
          changeOrigin: true,
          logLevel: 'debug',
          pathRewrite: { '^/api': '/' },
        },
      },
    },
  }