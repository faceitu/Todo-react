
import Conteiner from "./Components/Conteiner/Conteiner";
import FormContainer from "./Components/FormContainer/FormContainer";
import Generalconteiner from "./Components/GeneralConteiner/Generalconteiner";
import ListComponent from "./Components/ListComponent/ListComponent";
import TaskProvider from "./taskContext/taskContext";





function App() {
  return (
    <>
     <TaskProvider>
       <Generalconteiner>
         <Conteiner>
            <FormContainer/>
            <ListComponent/>
         </Conteiner>
       </Generalconteiner>
       </TaskProvider>
    </>

  );
}

export default App;
