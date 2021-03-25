import { ThemeProvider } from 'styled-components';
import {darkTheme, lightTheme} from './styling/theme';
import { Style } from './styling/style.js';
import React from 'react';
import { useDarkMode } from './hooks/useDarkMode'
import {Button} from './components/button'
import { Logo } from './components/logo';
import './styling/App.css';


function App() {

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  
  const themeMode = theme === 'light' ? lightTheme: darkTheme;

  const logo = theme === 'light' ? '/images/logoLight.png': 'images/logoBlack.png'

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <Style/>
        <h1>Hello, World!</h1>
        <Logo src={logo}/>
        <Button onClick={toggleTheme}> Сменить тему </Button>
    </ThemeProvider>
  );
}

export default App;
