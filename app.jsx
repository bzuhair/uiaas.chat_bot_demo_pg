import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';
import store from './src/store/store';
import Main from './src/components/Main';


ReactDOM.render(
  <div>
    <Provider store={store}>
      <Main />
    </Provider>
  </div>, document.querySelector('#app')
);
