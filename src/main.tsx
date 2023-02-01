import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import './scss/app.scss';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter basename='/yarar'>
    <App />
  </BrowserRouter>,
);
