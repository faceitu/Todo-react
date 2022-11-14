import React from 'react'
import styled from 'styled-components'


const StyledContainer = styled.div`
    height: 70%;
    width: 70%;
    background-color: #cbd4da;
    color: black;
    display: flex;
    align-items: center;
    flex-direction: column;
   
`
const TituloStyled = styled.h1 `
    font-size: 3rem;
    color: #191919;
    margin-top: 40px;
    margin-bottom: 34px;
`



const Conteiner = ({children}) => {
  return (
    <StyledContainer>
           <TituloStyled>TODO LIST</TituloStyled> 
           {children}
    </StyledContainer>
  )
}

export default Conteiner