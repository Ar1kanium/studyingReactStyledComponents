import {createGlobalStyle} from 'styled-components';

export const Style = createGlobalStyle`
*, *::after, *::before {
  box-sizing: border-box;
  margin:0;
  padding:0;
}

body {
  color: ${({theme}) => theme.secondColor};
  background: ${({theme}) => theme.primColor}; 
  font-family: ${({theme}) => theme.font_family};
  transition: all 0.25s linear;
  align-items: center;
  justify-content: center;
}`