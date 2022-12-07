import React from 'react'
import Conteiner from '../../Components/Conteiner/Conteiner'
import FormContainer from '../../Components/FormContainer/FormContainer'
import ListComponent from '../../Components/ListComponent/ListComponent'

const Todolist = () => {
  return (
      <Conteiner>
            <FormContainer/>
            <ListComponent/>
         </Conteiner> 
  )
}

export default Todolist