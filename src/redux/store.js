import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './reducers/mainReducer';

const allReducers = combineReducers(mainReducer);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancer(applyMiddleware(thunk));
const store = createStore(allReducers, middleware);

export default store;
