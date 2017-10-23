import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppHeader from './components/AppHeader';

import './styles/index.scss';

ReactDOM.render(
  <Provider>
    <div className='app'>
      <AppHeader />
    </div>
  </Provider>,
  document.getElementById('root')
);
