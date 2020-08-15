import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import App from './components/App';

import './styles/index.css';

const JSApp = () => (
  <Root>
    <App />
  </Root>
);

ReactDOM.render(<JSApp />, document.getElementById('root'));
