import initialTasks from "../Const/ListTask"

const TYPES = {
    ADD: 'add',
    DELL: 'dell'
}
const taskReducer = (state, action) => {
    switch(action.type) {
        case TYPES.ADD:
            return [...state, action.Tarea ] 
        case TYPES.DELL:
                return state.filter(task => task.id !== action.payload);
        default:
            return state;
    }
}
export {TYPES}
export default  taskReducer;