const path = require('path')

// Theme API.
module.exports = (options, ctx) => {
  return {
    // Webpack config
    chainWebpack: config => {},

    alias() {
      return {}
    },
    plugins: []
  }
}
