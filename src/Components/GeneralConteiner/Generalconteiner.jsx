import React from 'react'
import styled from 'styled-components'

const ConteinerGeneral = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
   
 
    
`




const Generalconteiner = ({children}) => {
  return (
    <ConteinerGeneral>{children}</ConteinerGeneral>
  )
}

export default Generalconteiner