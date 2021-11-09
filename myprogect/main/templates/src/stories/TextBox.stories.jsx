import React from 'react';
import { TextBox } from './TextBox';

export default {
  title: 'TextBox',
  component: TextBox
};

const Template = (args) => <TextBox {...args}/>;
export const Active = Template.bind({});
Active.args = {
    active: true
};

export const Inactive = Template.bind({});
Active.args = {
    active: false
};