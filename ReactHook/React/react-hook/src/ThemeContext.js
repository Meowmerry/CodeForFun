import React , { createContext } from 'react';

const ThemeContext = React.createContext({
  dark: false,
  toggle: () => {},
})
export default ThemeContext;
