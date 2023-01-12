import React from 'react'
import {RiTimerFlashFill} from 'react-icons/Ri'
import{IoMdSettings} from 'react-icons/Io'
import{AiFillInfoCircle} from 'react-icons/Ai'
import {useColor} from '../context/ColorContext'
export default function Header() {
  const {color} = useColor();
  return (
    <header style={{backgroundColor:`${color.main}`,}}>
      <div>
        <h1>PomoTimer</h1>
        <RiTimerFlashFill />
      </div>
      <button style={{backgroundColor:`${color.main}`,}}>
        <IoMdSettings />
        <span>Settings</span>
      </button>
      <button style={{backgroundColor:`${color.main}`,}} >
        <AiFillInfoCircle />
        <span>Info</span>
      </button>
    </header>
  )
}
