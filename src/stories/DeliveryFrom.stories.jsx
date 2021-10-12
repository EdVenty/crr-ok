import React from 'react';
import { DeliveryForm } from './DeliveryForm';

export default {
  title: 'DeliveryForm',
  component: DeliveryForm
};

const Template = (args) => <DeliveryForm {...args}/>;
export const Default = Template.bind({});