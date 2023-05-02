module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  // staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-mdx-gfm',
    // '@storybook/addon-interactions', //
    // '@storybook/preset-create-react-app', //
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },

  framework: {
    name: '@storybook/react-webpack5',
  },
  // core: {
  //   builder: '@storybook/builder-webpack5',
  // },
  // features: {
  //   interactionsDebugger: true,
  // },
  // framework: '@storybook/react',
  // docs: {
  //   autodocs: true,
  // },
};
