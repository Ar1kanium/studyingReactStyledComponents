import { ThemeProvider } from 'styled-components';
import './App.css';
import {darkTheme, lightTheme} from './styling/theme';
import { Style } from './styling/style.js';
import React from 'react';
import { useDarkMode } from './hooks/useDarkMode'
import {Button} from './components/button'


function App() {

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  
  const themeMode = theme === 'light' ? lightTheme: darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <Style/>
        <h1>Hello, Fucker!</h1>
        <Button onClick={toggleTheme}> Сменить тему </Button>
    </ThemeProvider>
  );
}

export default App;
