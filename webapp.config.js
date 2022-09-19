module.exports = {
  devtool: 'source-map',
  devServer: {
    api: 'http://localhost:5050',
    host: '0.0.0.0',
    port: '3000',
    proxy: {
      // local
      '/api/v1/*': {
        target: 'http://localhost:5050',
        pathRewrite: { '^/api/v1': '' },
        changeOrigin: true,
      },
      // prod
      // '/api/v1/*': {
      //   target: 'https://charity3.xyz/',
      //   changeOrigin: true,
      // },
    },
  },
  open: false,
};
