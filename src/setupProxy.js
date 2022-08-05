const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://43.200.113.236:8800",
      changeOrigin: true,
    })
  );
};
