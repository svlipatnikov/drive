import React from 'react';
import ButtonAccent from './ButtonAccent';

export default {
  title: 'DriveComponents/ButtonAccent',
  component: ButtonAccent,
  argTypes: {
    onClick: 'function',
  },
};

const Template = (args) => <ButtonAccent {...args} />;

export const Active = Template.bind({});
Active.args = {
  text: 'Default Text',
  active: true,
  negative: false,
};

export const Negative = Template.bind({});
Negative.args = {
  text: 'Default Text',
  active: false,
  negative: true,
};

export const Inactive = Template.bind({});
Inactive.args = {
  text: 'Default Text',
  active: false,
  negative: false,
};
