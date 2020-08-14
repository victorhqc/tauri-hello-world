import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../rootSaga';
import rootReducer from '../rootReducer';

const sagaMiddleware = createSagaMiddleware({});

const buildStore = (initialState = {}) => {
  const store = createStore(
    rootReducer(),
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default buildStore;
