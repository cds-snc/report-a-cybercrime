module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-knobs',
  ],
  webpackFinal: async (config, { configType }) => {
    config.node = { fs: 'empty' }
    return config
  },
}
