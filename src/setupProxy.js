const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://13.209.35.181:8800",
      changeOrigin: true,
    })
  );
};
