import { createContext, useState } from "react";

import lightModeLogo from '../../assets/logo-dark.png'
import darkModeLogo from '../../assets/logo.svg'

import setLightModeIcon from '../../assets/dark-mode.svg'
import setDarkModeIcon from '../../assets/light-mode.svg'

import lightModePrevArrow from '../../assets/arrow-left-dark.svg'
import lightModeNextArrow from '../../assets/arrow-right-dark.svg'

import darkModePrevArrow from '../../assets/arrow-left-light.svg'
import darkModeNextArrow from '../../assets/arrow-right-light.svg'

export const themes = {
  light: {
    bgColor: '#FFFFFF',
    bgSecondaryColor: '#EDEDED',
    textColor: '#1B2028',
    scoreColor: '#F1C40F',
    modalBg: '#FE0078',
    logo: lightModeLogo,
    themeSwitch: setDarkModeIcon,
    prevArrow: lightModePrevArrow,
    nextArrow: lightModeNextArrow
  },
  dark: {
    bgColor: '#1B2028',
    bgSecondaryColor: '#2D3440',
    textColor: '#FFFFFF',
    scoreColor: '#F1C40F',
    modalBg: '#FE0078',
    logo: darkModeLogo,
    themeSwitch: setLightModeIcon,
    prevArrow: darkModePrevArrow,
    nextArrow: darkModeNextArrow
  }
}

export const ThemeContext = createContext({
  theme: themes.light,
  changeTheme: () => { }
})


export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState((
    localStorage.getItem('theme') === 'dark'
      ? themes.dark
      : themes.light
  ) || themes.dark
  );

  const changeTheme = () => {
    if (theme === themes.light) {
      setTheme(themes.dark)
      localStorage.setItem('theme', 'dark')
    }
    else {
      setTheme(themes.light)
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}