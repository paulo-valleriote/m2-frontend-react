import React from 'react';
import Modal from 'react-modal'
import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home';
import { ThemeContext, ThemeContextProvider } from './contexts/ThemeContext';
import { GlobalStyles } from './styles/global';

Modal.setAppElement('#root')

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeContextProvider>
    <Home />
    <ThemeContext.Consumer>
      {({ theme }) => (
        <GlobalStyles theme={theme} />
      )}
    </ThemeContext.Consumer>
  </ThemeContextProvider>
);
