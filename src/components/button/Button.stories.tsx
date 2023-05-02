import { Button } from './index';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'UI/Button',
  component: Button,
  args: {
    children: 'Click me',
    variant: 'primary',
  },
  // argTypes: {
  //   variant: {
  //     type: 'string',
  //     description: 'Вариант',
  //     defaultValue: 'primary',
  //     options: [
  //       'primary',
  //       'danger',
  //       'secondary',
  //       'link',
  //       'placeholder-btn',
  //       'text-btn',
  //       'small',
  //       'redSmall',
  //       'graySmall',
  //     ],
  //     control: {
  //       type: 'radio',
  //     },
  //   },
  //   withSpinner: {
  //     type: 'boolean',
  //     defaultValue: false,
  //     description: 'Spinner',
  //   },
  // },
} as Meta;

const Template: StoryFn = args => <Button {...args} />;

// export const Default = () => <Button>Click me</Button>;
export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
};
