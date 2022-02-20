import React from 'react';
import { initializeBlock } from '@airtable/blocks/ui';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store';

initializeBlock(() => (
  <Provider store={store}>
    <App />
  </Provider>
));
