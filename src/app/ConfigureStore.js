import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

import modalReducer from '../modal/modalReducer';
import { loginReducer } from '../login/LoginReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export function persistreducer(state = {}, action) {
  switch (action.type) {
  case 'persist/REHYDRATE': {
    return { ...state, ...action.payload };
  }
  default: {
    return state;
  }
  } // Switch
}

const reducers = {
  modal: modalReducer,
  form: formReducer,
  login: loginReducer
};

export function configureStore() {
  /* simplified React Promise Middleware */
  const store = createStore(
    combineReducers(reducers),
    undefined,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
