module.exports = {
  devtool: 'source-map',
  devServer: {
    api: 'http://localhost:5050',
    host: '0.0.0.0',
    port: '3000',
    proxy: {
      '/api/v1/*': {
        target: 'http://localhost:5050',
        // target: 'http://charity3.xyz/',
        pathRewrite: { '^/api/v1': '' },
        changeOrigin: true,
      },
    },
  },
  open: false,
};
