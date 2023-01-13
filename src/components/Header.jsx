import React from 'react'
import {RiTimerFlashFill} from 'react-icons/Ri'
import{IoMdSettings} from 'react-icons/Io'
import{AiFillInfoCircle} from 'react-icons/Ai'
import {useColor} from '../context/ColorContext'
export default function Header() {
  const {color} = useColor();
  return (
    <header className='flex justify-center bg-transparent max-h-20'>
      <div className='w-screen flex justify-between items-center flex-row p-2 ' style={{backgroundColor:`${color.main}`,}}>
        <div className='flex justify-center items-center'>
          <RiTimerFlashFill className='h-auto w-9 ' />
          <h1 className='font-semibold ml-1 sm:text-4xl'>PomoTimer</h1>
        </div>
        <button className='flex justify-center items-center ' style={{backgroundColor:`${color.main}`,}}>
          <IoMdSettings />
          <span>Settings</span>
        </button>
        <button className='flex justify-center items-center ' style={{backgroundColor:`${color.main}`,}} >
          <AiFillInfoCircle />
          <span>Info</span>
        </button>
      </div>
    </header>
  )
}
