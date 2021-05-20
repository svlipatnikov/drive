import { api } from 'api/services';
import { fetchCategory, successCategory, failedCategory } from 'redux/actions/dbActions';

const getCategoryAction = () => async (dispatch) => {
  dispatch(fetchCategory());
  const category = await api.getCategory();
  if (category && category.length) {
    dispatch(successCategory(category));
  } else {
    dispatch(failedCategory());
  }
};

export default getCategoryAction;
