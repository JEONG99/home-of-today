const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/cards", {
      target: "https://bucketplace-coding-test.s3.amazonaws.com/",
      changeOrigin: true,
    })
  );
};
