import { SET_LANGUAGE, SET_ORDER_STEP, SET_PAGE_SIZE } from 'redux/types';

const mainReducedInit = {
  language: 'Eng',
  orderStep: 'Местоположение',
  pageSize: {
    mobileCompact: false,
    mobile: false,
    tablet: false,
    desktopMin: false,
  },
};

const mainReducer = (state = mainReducedInit, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, language: action.payload };

    case SET_ORDER_STEP:
      return { ...state, orderStep: action.payload };

    case SET_PAGE_SIZE:
      return { ...state, pageSize: action.payload };

    default:
      return state;
  }
};

export default mainReducer;
