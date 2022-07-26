const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://jaksimharu.shop:8800",
      changeOrigin: true,
    })
  );
};
