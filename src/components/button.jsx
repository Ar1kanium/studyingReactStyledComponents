import styled from 'styled-components'




export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  color: ${props => props.theme.primColor};
  border : 2px solid ${props => props.theme.secondColor};
  background : ${props => props.theme.addColor};` 