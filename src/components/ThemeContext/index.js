import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const defaultTheme = {
  bgColor: '#FFFFFF',
  bgSecondaryColor: '#EDEDED',
  textColor: '#1B2028',
  scoreColor: '#F1C40F',
  modalBg: '#FE0078'
}

export const ThemeChange = () => {
  const themeContext = useContext(ThemeContext)

  console.log('Current Theme', themeContext)
}