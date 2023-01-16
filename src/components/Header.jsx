import React from 'react'
import {IoIosTimer} from 'react-icons/Io'
import{IoMdSettings} from 'react-icons/Io'
import{AiFillInfoCircle} from 'react-icons/Ai'
import {useColor} from '../context/ColorContext'
export default function Header() {
  const {color} = useColor();
  return (
    <header className='flex justify-center bg-transparent max-h-16 z-30'>
      <div className='w-screen flex justify-between lg:justify-center items-center flex-row p-2 ' style={{backgroundColor:`${color.main}`,}}>
        <div className='flex justify-center items-center mr-10'>
          <IoIosTimer className='h-auto w-6 sm:w-9 ' />
          <h1 className='font-semibold ml-1 sm:text-4xl'>PomoTimer</h1>
        </div>
        <button className='flex justify-center items-center mr-10 ' style={{backgroundColor:`${color.main}`,}}>
          <IoMdSettings />
          <span className='ml-1'>Settings</span>
        </button>
        <button className='flex justify-center items-center ' style={{backgroundColor:`${color.main}`,}} >
          <AiFillInfoCircle />
          <span className='ml-1'>Info</span>
        </button>
      </div>
    </header>
  )
}
