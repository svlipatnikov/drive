import ButtonLanguageLayout from './ButtonLanguageLayout';

export default {
  title: 'drivecomponents/ButtonLanguage',
  component: ButtonLanguageLayout,
  argTypes: {
    onClick: 'function',
  },
};

const Template = (args) => <ButtonLanguageLayout {...args} />;

export const LanguageRus = Template.bind({});
LanguageRus.args = {
  label: 'Рус',
};

export const LanguageEng = Template.bind({});
LanguageEng.args = {
  label: 'Eng',
};
