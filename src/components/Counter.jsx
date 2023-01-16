import React,{useEffect, useState} from 'react'
import {useColor} from '../context/ColorContext'
import "../styles/counter.css"
export default function Counter() {
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const {color} = useColor();
  const handleBegin=()=>{
    setIsActive(!isActive)
  }
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
      <section className='flex flex-col justify-center items-center p-8 rounded-md' style={{backgroundColor:`${color.main}`,}}>
        <div className='min-w-[480px] min-w-[300]  flex justify-center items-baseline' >
          <h2 className='font-semibold text-9xl'>{minutes}:{seconds}</h2>
        </div>
        <button onClick={handleBegin} className='relative btn3 mt-12 border border-white font-semibold tracking-wider leading-none w-32'>
          <span className='absolute inset-0 bg-white'></span>
          <div className='relative px-8 py-3 text-xl' style={{backgroundColor:`${color.main}`,}}>
            {isActive ? 'Pause' : 'Start'}
          </div>
        </button>
      </section>
    </main>
  )
}
