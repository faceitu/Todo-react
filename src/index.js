import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './GlobalStyles/GolbalStyle';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        
        <App />
        <GlobalStyle/>
   
    </>
 
);


reportWebVitals();
