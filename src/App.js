import Generalconteiner from "./Components/GeneralConteiner/Generalconteiner";
import Navbar from "./Components/navbar/navbar";
import GlobalStyles from "./GlobalStyles/GolbalStyle";
import Routes from "./routes/Routes";
import TaskProvider from "./taskContext/taskContext";
import {
  BrowserRouter,
  Route,
  Routes as ReactDomRoutes,
} from 'react-router-dom';







function App() {
  return (
    <>
    <BrowserRouter>
     <TaskProvider>
       <Navbar/>
       
        <Generalconteiner>
        <Routes/>
       </Generalconteiner> 

     </TaskProvider>
     <GlobalStyles/>
     </BrowserRouter>
   </>

  );
}

export default App;
