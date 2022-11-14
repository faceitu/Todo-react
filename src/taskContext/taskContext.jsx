import { createContext, useReducer } from "react";
import initialTasks from "../Const/ListTask";
import taskReducer from "../taskReducer/taskReducer";



export const TaskContext = createContext();

const TaskProvider = ({children})  => {
    const [task, dispatch] = useReducer(taskReducer, initialTasks)

    return (
        <TaskContext.Provider value={[task, dispatch]}>
            {children}
        </TaskContext.Provider>
    )

}

export default TaskProvider;