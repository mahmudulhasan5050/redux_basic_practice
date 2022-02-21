import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reduxStore from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

