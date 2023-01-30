import React,{useEffect, useState} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {useUser} from '../context/UserContext'
export default function SingleTask({task,pomodoros,index}) {
const {counter,counterChange,deleteTask,editTask} = useUser()
  const [checked, setChecked] = useState(false)
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState(task)
  const [pomodoro, setPomodoro] = useState(pomodoros)
  const inputRef = React.useRef()
  const pomoRef = React.useRef()
  const hanldeEditButton = () => {
    setOpen(!open)
  }
  const handleDelete = () => {
    setOpen(false)
    deleteTask(index)
  }

  const handleSave = () => {
    setOpen(false)
    setInput(inputRef.current.value)
    editTask({task:input,pomodoros:parseInt(pomodoro),index:index})
  }
  const handleCheck = () => {
    setChecked(!checked)
  }
  return (
    <>
        {
            open ? 
            <span className='sm:min-w-[480px] min-w-[350px]  bg-not-white h-52  text-slate-600 text-xl rounded-lg mt-4'>
                <div className='w-full h-full flex justify-center items-center flex-col'>
                    <input type="text" placeholder='What you plan to do ?' ref={inputRef} value={input} onChange={()=>{
                        setInput(inputRef.current.value)
                    }} className='bg-transparent' />
                    <p className='mt-3'>Est Pomodoros</p>
                    <input type="number" onChange={()=>{
                          setPomodoro(pomoRef.current.value)
                    }} value={pomodoro} ref={pomoRef} className='outline-2 outline-gray-400 outline rounded-md w-12 p-1 mt-3' />
                    <div className='mt-6 flex justify-evenly' >
                        <button onClick={handleDelete} className='mr-7 text-gray-400'>
                          Delete
                        </button>
                        <button onClick={()=>{setOpen(false);}} className='mr-5 '>
                            Cancel
                        </button>
                        <button onClick={handleSave} className='bg-stone-700 text-white 0 pb-1 pt-1 pl-3 pr-3 rounded-lg'>
                            Save
                        </button>
                    </div>
                </div>
            </span>
            :
            <div className='flex justify-between items-center sm:min-w-[480px] min-w-[350px] mt-4 p-4 border-solid border-not-white border-2 rounded-lg'style={{textDecoration:checked?"line-through":null,color:checked?"#c2c2c2":null,border:checked?"#c2c2c2,solid,2px":""}}>
              <button onClick={handleCheck}>
                <AiFillCheckCircle className='h-auto w-6 hover:text-white text-slate-300' />
              </button>
                <h4 className='text-xl' >{input}</h4>
                <p>{counter} / {pomodoro}</p>
              <button onClick={hanldeEditButton}>
                <BiDotsVerticalRounded className='h-auto w-6'/>
              </button>
            </div>
          }
    </>    
  )
}

