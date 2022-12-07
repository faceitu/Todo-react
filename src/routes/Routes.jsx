import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as ReactDomRoutes,
} from 'react-router-dom';
import Todolist from '../pages/todolist/Todolist';
import Home from '../pages/home/Home'
import Pokedex from '../pages/pokedex/Pokedex';


const Routes = () => {
  return (
        <ReactDomRoutes>
          <Route path='home' element={<Home/>} />
          <Route path='todolist' element={<Todolist/>} />
          <Route path='pokedex' element={<Pokedex/>} />
         
        
        </ReactDomRoutes>
   
  );
};

export default Routes;