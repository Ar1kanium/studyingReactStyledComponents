import React from 'react'
import styled from 'styled-components'

export const Logo = (props) => {
  return <img className='logo' src={props.src} alt='logo'/>
}


export const LogoMenu = styled.div`
position: fixed;
bottom: 10px;
left: 10px;
`


