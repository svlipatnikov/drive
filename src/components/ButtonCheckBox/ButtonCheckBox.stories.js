import React from 'react';
import ButtonCheckBox from './ButtonCheckBox';

export default {
  title: 'drivecomponents/CheckBox',
  component: ButtonCheckBox,
  argTypes: {
    onClick: 'function',
  },
};

const Template = (args) => <ButtonCheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Default text',
  checked: false,
};
