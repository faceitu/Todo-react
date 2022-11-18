import React, { useContext, useRef } from 'react'
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
    

    ${props => props.completed && 
    css `
        background-color: #272627;
        text-decoration: line-through;
        
    
    `}


`
const Myspan = styled.span `
    margin-left: 20px; 
    margin-right: 20px;
    
`
const Mybutton = styled.button `
    margin-right: 20px;
   
`
const Mychecked = styled.input `

`
const ButtonConteiner = styled.div `
    display: flex;
    gap: 14px;


`





const ListComponent = () => {

    const [task, dispatch] =  useContext(TaskContext);
    const r = useRef();

    const ver =()=> {
    }
 
    return (

    <ComponentList>
       {task.map(t => 
         <ListConteiner  completed = {t.completed} key={t.id}> 
             <Myspan >{t.tarea}</Myspan>
             <ButtonConteiner>
                 <Mychecked   checked = {t.completed} onChange={ () => dispatch({type:TYPES.DONE, payload:t.id})} type="checkbox"/>
                 <Mybutton onClick={() => dispatch({type:TYPES.DELL, payload:t.id })}> <FcCancel size = "30px"/></Mybutton>
             </ButtonConteiner>
            
         </ListConteiner>)}
    </ComponentList>
  )
}
  
export default ListComponent
