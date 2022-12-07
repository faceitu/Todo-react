import { background, color } from '@chakra-ui/react'
import React from 'react'
import {NavcontainerStyled,LogoContainerStyled,LinksContainerstyled} from './navbarstyled'


import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
   <NavcontainerStyled>
        <LogoContainerStyled>
             <h2>LOGO</h2>
        </LogoContainerStyled>
        <LinksContainerstyled>
            <NavLink to='home'>Home</NavLink> 
            <NavLink to='todolist'>TodoList</NavLink>  
            <NavLink to='pokedex'>Pokedex</NavLink>  
             
        </LinksContainerstyled>
   </NavcontainerStyled>
  )
}

export default Navbar