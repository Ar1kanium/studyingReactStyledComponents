import { ThemeProvider } from 'styled-components';
import { Style } from '../styling/style.jsx';
import React, { useState } from 'react'
import { Link } from './Link'
import * as BsIcons from 'react-icons/bs'
import * as WiIcons from 'react-icons/wi'
import { BarData, HeaderTitle } from './Bardata'
import {Logo, LogoMenu} from './Logo'
import { useDarkMode } from '../hooks/useDarkMode.jsx'
import { darkTheme, lightTheme } from '../styling/theme.js';
import styled from 'styled-components';
import '../styling/Navbar.css'


const Nav = styled.nav`
background-color: ${props => props.theme.primColor};
height: 100vh;
width:100%;
z-index:1;
`

export const Navbar = () => {
    
    const [theme, toggleTheme, componentMounted] = useDarkMode();
    
    const logo = theme === 'light' ? '/images/logoLight.png': 'images/logoBlack.png'

    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    
    const [bar, setBar] = useState(false)

    const showBar = () => setBar(!bar)


    const [headerTitle, setHeaderTitle] = useState(false)

    const changeTitle = () => setHeaderTitle(!headerTitle) 



    if (!componentMounted) {
        return <div />
      };



    return (
        <ThemeProvider theme={themeMode}>
            <Style/>
            <LogoMenu onClick={showBar}>
                <Logo src={logo}/>
            </LogoMenu>
            <Nav onClick={showBar} className={bar ? 'nav-active' : 'nav-hidden'}> 
                <img className='background-logo' src={logo} alt = 'logo'/>
                <ul className='nav-menu-items'>
                    {BarData.map((item, index) => {
                        return (
                            <li key={index} className={item.clName}>
                                <Link to={item.path}>
                                    <span className='nav-list-icon'>{item.icon}</span>
                                    <span className='nav-list-text'>{item.title}</span>
                                </Link>
                            </li>
                            )
                        })}
                </ul>
            </Nav>
                <div className='header-static'>
                    <Link to='#' className='nav-menu-toggler'>

                    </Link>
                    <h1 className='header-text'>{HeaderTitle[+headerTitle].title}</h1>
                    <div>
                        <WiIcons.WiSolarEclipse onClick={toggleTheme}/>
                    </div>
                    <div>
                        <BsIcons.BsFillGearFill onClick={changeTitle}/>
                    </div>
                </div>
        </ThemeProvider>
    )
}
