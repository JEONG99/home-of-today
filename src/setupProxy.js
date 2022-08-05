const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/",
    createProxyMiddleware({
      target:
        "https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/",
      changeOrigin: true,
    })
  );
};
