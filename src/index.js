import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContactProvider } from './context/ContactContext';

ReactDOM.render(
  <ContactProvider>
    <App />
  </ContactProvider>,
  document.getElementById('root')
);
