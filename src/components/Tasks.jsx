import React from 'react'
import {useColor} from '../context/ColorContext'
import {MdOutlineAppRegistration} from 'react-icons/Md'
export default function Tasks() {
    const {color} = useColor();
  return (
    <section className='w-screen flex justify-center '>
        <div className='absolute min-w-[480px] mt-[30rem] flex justify-between items-center p-8 z-30 rounded-lg' style={{backgroundColor:`${color.main}`}}>
        <h3 className='text-xl font-semibold'>Tasks</h3>
        <button>
            <MdOutlineAppRegistration className='h-auto w-7'/>
        </button>
        </div>
    </section>
  )
}
