import React, { useRef }  from 'react';
import styled from "styled-components";
import { Button, } from '@chakra-ui/react'
import { FcTodoList } from "react-icons/fc";
import { useContext } from 'react';
import { TaskContext } from '../../taskContext/taskContext';
import { TYPES } from '../../taskReducer/taskReducer';


const ContainerForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
   `
   const ComponentsImputs = styled.input `
   background-color: #cbd4da;
   border-bottom: 1px  purple solid;
   padding: 7px 80px;
   color: #191919;
   font-size: 1rem;
   font-weight: bolder;
   text-align: center;
   
`




const FormContainer = () => {

const [task, dispatch] = useContext(TaskContext)

const referencia = useRef()
   
  return (
    <>
    <ContainerForm>
         <ComponentsImputs  placeholder='New  task' ref={referencia}/>
         <Button  onClick={() => {dispatch({type: TYPES.ADD, Tarea: {id: Date.now(), tarea:referencia.current.value}   
    })}} rightIcon={<FcTodoList size = "30px"/>} colorScheme='purple' variant= 'solid'>ADD</Button>
    </ContainerForm>
     
    </>
  )
}

export default FormContainer

