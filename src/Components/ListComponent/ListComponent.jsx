import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { FcCancel } from "react-icons/fc";
import { TaskContext } from '../../taskContext/taskContext';
import { TYPES } from '../../taskReducer/taskReducer';




const ComponentList = styled.div `
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
    
`
const ListConteiner = styled.div `
    display:flex;
    justify-content:space-between;
    align-items: center;
    background-color: purple;
    padding-top: 12px;
    padding-bottom: 12px;
    height: 100%;
    width: 80%;
    margin-top: 10px;
    font-size: 1.4rem;

    ${props => props.completed.yes && 
    css `
        background-color: #272627;
    
    `}


`
const Myspan = styled.span `
    margin-left: 20px; 
    margin-right: 20px;
    
`
const Mybutton = styled.button `
    margin-right: 20px;
`

const ListComponent = () => {

    const [task, dispatch] =  useContext(TaskContext);
    
    const completed = {
        yes: "completed",
        no:"incompleted"
    }

    const iscomleted = (yes) => {
            console.log(completed.yes)
            return completed.yes
    

    }
  return (

    <ComponentList>
       {task.map(t => 
         <ListConteiner completed = {iscomleted(t.completed)}> 
             <Myspan >{t.tarea}</Myspan>
             <Mybutton onClick={() => dispatch({type:TYPES.DELL, payload:t.id })}> <FcCancel size = "30px"/></Mybutton>
         </ListConteiner>)}
    </ComponentList>
  )
}
  
export default ListComponent
