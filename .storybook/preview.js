// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
import '!style-loader!css-loader!sass-loader!../src/styles/main.scss';

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  // actions: { argTypesRegex: '^on.*' },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
