module.exports = {
  //   stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-interactions', //
    '@storybook/preset-create-react-app',
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          // Require your Sass preprocessor here
          implementation: require('sass'),
        },
      },
    },
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  // staticDirs: ['../public'],
  // core: {
  //   builder: '@storybook/builder-webpack5',
  // },
  // features: {
  //   interactionsDebugger: true,
  // },
  // framework: '@storybook/react',
};
