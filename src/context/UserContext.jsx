import React from "react";
import { useState,useContext} from "react";
const UserContext = React.createContext();

export  function useUser(){
    return useContext(UserContext);
}

export default function UserProvider({children}) {
    const [counter, setCounter] = useState(0)
    const [tasks, setTasks] = useState([])
    const [pomo,setPomo] = useState(25)
    const [short, setShort] = useState(5)
    const [long, setLong] = useState(15)
    function counterChange(active){
        if(active){
        setCounter(counter+1)
        }
    }
    function addTask(task){
        setTasks([...tasks,task])
    }
    function deleteTask(index){
        setTasks(tasks.filter((task)=>task.index===index))
    }
    function editTask(task){
        console.log(task)
        setTasks(tasks.map((item)=>{
            if(item.index===task.index){
                return task
            }
            else{
                return item
            }
        }))
    }
    return (
        <UserContext.Provider value={{counter,counterChange,addTask,setTasks,tasks,deleteTask,editTask,pomo,setPomo,short,setShort,long,setLong}}>
            {children}
        </UserContext.Provider>
    )
}