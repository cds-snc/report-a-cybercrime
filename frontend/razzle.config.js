const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  modify: (config, { _target, dev }, _webpack) => {
    if (dev)
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: 'bundle-analysis.html',
        }),
      )
    return config
  },
}
