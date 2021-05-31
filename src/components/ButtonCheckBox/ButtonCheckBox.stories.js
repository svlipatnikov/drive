import ButtonCheckBox from './ButtonCheckBox';

export default {
  title: 'drivecomponents/CheckBox',
  component: ButtonCheckBox,
  argTypes: {
    onClick: 'function',
  },
};

const Template = (args) => <ButtonCheckBox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  text: 'Option text',
  checked: true,
};

export const Default = Template.bind({});
Default.args = {
  text: 'Option text',
  checked: false,
};
