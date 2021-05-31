import ButtonLanguage from 'components/ButtonLanguage';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

export default {
  title: 'drivecomponents/ButtonLanguage',
  component: ButtonLanguage,
  argTypes: {},
};

const Template = (args) => (
  <Provider store={store}>
    <ButtonLanguage {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
