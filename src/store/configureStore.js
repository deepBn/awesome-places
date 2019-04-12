import {createStore, compose, applyMiddleware} from 'redux';

import reducers from './reducers';

const middleWares = [];
let composeEnhancers = compose;
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleWares)));

export default store;