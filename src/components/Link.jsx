import styled from 'styled-components'
import { Link as LinkUns } from 'react-router-dom'

export const Link = styled(LinkUns)`
color: ${props => props.theme.secondColor};
text-decoration: none;
`