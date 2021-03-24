import { ThemeProvider } from 'styled-components';
import {darkTheme, lightTheme} from './styling/theme';
import { Style } from './styling/style.js';
import React from 'react';
import { useDarkMode } from './hooks/useDarkMode'
import {Button} from './components/button'


function App() {

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  
  const themeMode = theme === 'light' ? lightTheme: darkTheme;

  const logo = theme === 'light' ? '/images/white!.jpg': 'images/black.jpeg'

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <Style/>
        <h1>Hello, World!</h1>
        <div><img src={logo} alt='logo'/></div>
        <Button onClick={toggleTheme}> Сменить тему </Button>
    </ThemeProvider>
  );
}

export default App;
