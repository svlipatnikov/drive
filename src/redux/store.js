import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from 'redux/reducers/mainReducer';
import orderReducer from 'redux/reducers/orderReducer';
import dbReducer from 'redux/reducers/dbReducer';

const allReducers = combineReducers({ mainReducer, orderReducer, dbReducer });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancer(applyMiddleware(thunk));
const store = createStore(allReducers, middleware);

export default store;
