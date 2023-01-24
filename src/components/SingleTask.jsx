import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import{BiDotsVerticalRounded} from 'react-icons/bi'
export default function SingleTask({task,pomodoros,index}) {
  return (
    <div className='flex justify-between items-center w-full mt-4 p-4 border-solid border-not-white border-2 rounded-lg'>
        <button>
            <AiFillCheckCircle className='h-auto w-6 hover:text-white text-slate-300'/>
        </button>
        <h4 className='text-xl'>{task}</h4>
        <p>{pomodoros}</p>
        <button>
            <BiDotsVerticalRounded className='h-auto w-6'/>
        </button>
    </div>
  )
}

