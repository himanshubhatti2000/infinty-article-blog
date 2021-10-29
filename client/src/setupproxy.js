const proxy= require('http-proxy-middleware');
module.exports = function(app) {
  app.use(proxy("/auth/google", { // https://github.com/chimurai/http-proxy-middleware
    target: "http://localhost:5000",
    secure: true
  }))
  app.use(proxy("/api", { // https://github.com/chimurai/http-proxy-middleware
    target: "http://localhost:5000",
    secure: true
  }))

}
