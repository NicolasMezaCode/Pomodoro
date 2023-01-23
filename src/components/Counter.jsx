import React,{useEffect, useState} from 'react'
import {useColor} from '../context/ColorContext'
import "../styles/counter.css"
export default function Counter() {
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [options, setOptions] = useState('pomodoro')
  const {color,changeColor} = useColor();
  const handleBegin=()=>{
    setIsActive(!isActive)
  }
  const handlePomodoro=()=>{
    setMinutes(25)
    setSeconds(0)
    setOptions('pomodoro')
    changeColor('primary')
    setIsActive(false)
  }
  const handleShort=()=>{
    setMinutes(5)
    setSeconds(0)
    setOptions('short')
    changeColor('secondary')
    setIsActive(false)
  }
  const handleLong=()=>{
    setMinutes(15)
    setSeconds(0)
    setOptions('long')
    changeColor('tertiary')
    setIsActive(false)
  }
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds => seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
          } else {
            setMinutes(minutes => minutes - 1);
            setSeconds(59);
          }
        } 
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[minutes,seconds,isActive])
  return (
    <main className='absolute flex justify-center items-center w-screen z-30 mt-10'>
      <section className='flex flex-col justify-center items-center p-8 rounded-lg' style={{backgroundColor:`${color.main}`,}}>
        <div className='flex justify-between items-center'>
          <button onClick={handlePomodoro} className='p-2 rounded-lg cursor-pointer mr-3' style={{backgroundColor:options==='pomodoro'?`${color.backgroundButton}`:null,}}>
            Pomodoro
          </button>
          <button onClick={handleShort} className='p-2 rounded-lg cursor-pointer mr-3' style={{backgroundColor:options==='short'?`${color.backgroundButton}`:null,}}>
            Short Break
          </button>
          <button onClick={handleLong} className='p-2 rounded-lg cursor-pointer' style={{backgroundColor:options==='long'?`${color.backgroundButton}`:null,}} >
            Long Break
          </button>
        </div>
        <div className='sm:min-w-[480px] flex justify-center items-baseline mt-12 mb-12' >
          <h2 className='font-semibold text-9xl'>{minutes}:{formattedSeconds}</h2>
        </div>
        <button onClick={handleBegin} className='relative btn3 border border-white font-semibold tracking-wider leading-none w-32 rounded-md'>
          <span className='absolute inset-0 bg-white rounded-md'></span>
          <div className='relative px-8 py-3 text-xl rounded-md' style={{backgroundColor:`${color.main}`}}>
            {isActive ? 'Pause' : 'Start'}
          </div>
        </button>
      </section>
    </main>
  )
}
