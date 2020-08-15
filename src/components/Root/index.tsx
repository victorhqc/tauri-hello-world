import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import createStore from '../../store/createStore';

const store = createStore();
const history = createBrowserHistory();

const Root: FC = ({ children }) => (
  <Provider store={store}>
    <Router history={history}>{children}</Router>
  </Provider>
);

export default Root;
