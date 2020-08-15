import React from 'react';
import ReactDOM from 'react-dom';

// import Root from './components/Root';
// import App from './components/App';

import './styles/tailwind.css';

const JSApp = () => (
  <>
    <h1>Hello world 🐕</h1>
    <p>This doesn't seem to be working properly</p>
    <img
      className="rotate"
      src="https://media.giphy.com/media/etn52ENYVnpxqMaXiT/giphy.gif"
      alt="pug in a pool"
    />
  </>
);

ReactDOM.render(<JSApp />, document.getElementById('root'));
