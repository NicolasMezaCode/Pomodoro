import React from "react";
import { useState,useContext} from "react";

const UserContext = React.createContext();

export  function useUser(){
    return useContext(UserContext);
}

export default function UserProvider({children}) {
    const [counter, setCounter] = useState(0)
    const [tasks, setTasks] = useState([])
    function counterChange(active){
        if(active){
        setCounter(counter+1)
        }
    }
    function task(task){
        setTasks([...tasks,task])
    }
    function deleteTask(index){
        setTasks(tasks.filter((task)=>task.key !== index))
    }
    function deleteAll(){
        setTasks([])
    }
    function editTask(task){
        setTasks(tasks.filter((task)=>task.key !== index))
    }
    return (
        <UserContext.Provider value={{counter,counterChange,task,setTasks,deleteAll,deleteTask,editTask}}>
            {children}
        </UserContext.Provider>
    )
}