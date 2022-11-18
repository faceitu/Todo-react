import initialTasks from "../Const/ListTask"

const TYPES = {
    ADD: 'add',
    DELL: 'dell',
    DONE: 'done'
}
const taskReducer = (state, action) => {
    switch(action.type) {
        case TYPES.ADD:
            return [...state, action.Tarea ] 

        case TYPES.DELL:
                  
                    return state.filter(task => task.id !== action.payload) 

        case TYPES.DONE: 
    
           const done = state.find(task => task.id === action.payload)
           done.completed = !done.completed
           
      return [...state]
        
                                                  
        default:
            return state;
    }
}
export {TYPES}
export default  taskReducer;



