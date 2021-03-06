import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import App from './components/App';

import './styles/tailwind.css';

const JSApp = () => (
  <Root>
    <App />
  </Root>
);

ReactDOM.render(<JSApp />, document.getElementById('root'));
