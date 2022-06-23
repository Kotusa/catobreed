import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from '@templates';
import { store } from '@store';

const Root = () => {
  return (
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
};

export default Root;
