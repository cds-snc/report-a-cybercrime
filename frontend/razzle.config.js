module.exports = {
  modify: (config, { _target, _dev }, _webpack) => {
    const SizePlugin = require('cds-size-plugin')
    config.plugins.push(new SizePlugin())
    return config
  },
}
