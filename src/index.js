import React from 'react';
import Modal from 'react-modal'
import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home';
import { GlobalStyles } from './styles/global';

import { defaultTheme } from './components/ThemeContext';

Modal.setAppElement('#root')

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(defaultTheme)
root.render(
  <React.StrictMode>
    <Home />
    <GlobalStyles theme={defaultTheme} />
  </React.StrictMode>
);
