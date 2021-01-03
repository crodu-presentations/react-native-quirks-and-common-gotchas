import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (() => {
  if (__DEV__) {
    // @ts-ignore: in DEV mode, redux-devtools-extension could be available
    return window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
  return compose;
})();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
