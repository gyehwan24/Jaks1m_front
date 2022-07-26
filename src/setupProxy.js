const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://13.209.66.190:8800",
      changeOrigin: true,
    })
  );
};
