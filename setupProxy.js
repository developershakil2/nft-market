const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/ipfs',
    createProxyMiddleware({
      target: 'https://ipfs.io',
      changeOrigin: true,
    })
  );

  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:3000',
      changeOrigin: true,
    })
  );
};
