import React,{useState} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {useUser} from '../context/UserContext'
export default function SingleTask({task,pomodoros,index}) {
const {counter,counterChange,deleteTask} = useUser()
  const [checked, setChecked] = useState(false)
  const handleCheck = () => {
    setChecked(!checked)
  }
  return (
    <div className='flex justify-between items-center w-full mt-4 p-4 border-solid border-not-white border-2 rounded-lg'style={{textDecoration:checked?"line-through":null,color:checked?"#c2c2c2":null,border:checked?"#c2c2c2,solid,2px":""}}>
        <button onClick={handleCheck}>
            <AiFillCheckCircle className='h-auto w-6 hover:text-white text-slate-300' />
        </button>
        <h4 className='text-xl' >{task}</h4>
        <p>{counter} / {pomodoros}</p>
        <button>
            <BiDotsVerticalRounded className='h-auto w-6'/>
        </button>
    </div>
  )
}

