import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Stores/store';
import './index.css';
import Homepage from './Pages/Homepage';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Homepage />
    </Provider>
  </React.StrictMode>
);

