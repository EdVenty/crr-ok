import { Button, IButtonProps } from './Button';
import React from 'react';

export default {
  title: 'Button',
  component: Button,
  // argTypes: {
  //   type: {
  //     options: ['primary', 'secondary'],
  //     control: { type: 'radio' }
  //   }
  // }
};

const Template = (args) => <Button {...args} />;
// export const Primary = () => <Button label="Button" type='primary'/>;
export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  width: 'fit-content'
};
export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  width: 'fit-content'
};