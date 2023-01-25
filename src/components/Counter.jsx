import React,{useEffect, useState} from 'react'
import {useColor} from '../context/ColorContext'
import {useUser} from '../context/UserContext'
import "../styles/counter.css"
export default function Counter() {
  const[pomo,setPomo] = useState(25)
  const [short, setShort] = useState(5)
  const [long, setLong] = useState(15)
  const [minutes, setMinutes] = useState(pomo)
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [options, setOptions] = useState('pomodoro')
  const {color,changeColor} = useColor();
  const {counter,counterChange} = useUser();
  const handleBegin=()=>{
    setIsActive(!isActive)
  }
  const handlePomodoro=(active)=>{
    setMinutes(pomo)
    setSeconds(0)
    setOptions('pomodoro')
    changeColor('primary')
    if(active===true){
      setIsActive(true)
    }
    else{
      setIsActive(false)
    }
    
  }
  const handleShort=(active)=>{
    setMinutes(short)
    setSeconds(0)
    setOptions('short')
    changeColor('secondary')
    if(active===true){
      setIsActive(true)
    }
    else{ 
      setIsActive(false)
    }
  }
  const handleLong=(active)=>{
    setMinutes(long)
    setSeconds(0)
    setOptions('long')
    changeColor('tertiary')
    if(active===true){
      setIsActive(true)
    }
    else{
      setIsActive(false)
    }
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
            counterChange(true)
            clearInterval(interval);
            if(options==='pomodoro'){
              handleShort(true)
            }
            else{
              handlePomodoro(true)
            }
          } else {
            setMinutes(minutes => minutes - 1);
            setSeconds(59);
          }
        } 
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      console.log('paused')
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
