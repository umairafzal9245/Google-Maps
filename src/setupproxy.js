const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/bustime', {
            target: 'https://ctabustracker.com',
            changeOrigin: true,
        })
    );
};
