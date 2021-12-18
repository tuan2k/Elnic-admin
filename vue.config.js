module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/elnic-admin/" : "/",
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/]
    }
  }
};
