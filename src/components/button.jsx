import styled from 'styled-components'




export const Button = styled.button`
  color: ${props => props.theme.secondColor};
  background : ${props => props.theme.addColor};
  transition: 250ms ease;
  
  &:hover {
  background : ${props => props.theme.primColor};
  transition: 250ms ease;
  }` 
  