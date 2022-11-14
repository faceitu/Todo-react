import React from 'react'
import styled from 'styled-components'

const ConteinerGeneral = styled.div`
      background-color: #191919;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    
`




const Generalconteiner = ({children}) => {
  return (
    <ConteinerGeneral>{children}</ConteinerGeneral>
  )
}

export default Generalconteiner