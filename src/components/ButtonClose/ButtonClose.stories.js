import ButtonClose from 'components/ButtonClose';

export default {
  title: 'drivecomponents/ButtonClose',
  component: ButtonClose,
  argTypes: {
    onClick: 'function',
  },
};

const Template = (args) => <ButtonClose {...args} />;

export const Light = Template.bind({});
Light.args = {
  dark: false,
  size: 'large',
};

export const Dark = Template.bind({});
Dark.args = {
  dark: true,
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  dark: true,
  size: 'small',
};
