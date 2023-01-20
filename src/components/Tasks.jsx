import React from 'react'
import {useColor} from '../context/ColorContext'
import {MdOutlineAppRegistration} from 'react-icons/Md'
import {AiFillPlusCircle} from 'react-icons/Ai'
import { Modal } from '@mui/material';
export default function Tasks() {
    const [open, setOpen] = React.useState(false);
    const {color} = useColor();
    const handleTask = () => {
      setOpen(true);
    }
  return (
    <section className='w-screen flex justify-center '>
        <div className='absolute min-w-[480px] mt-[30rem] flex justify-between flex-col items-center p-8 z-30 rounded-lg' style={{backgroundColor:`${color.main}`}}>
          <div className='flex justify-between items-center w-full mb-5'> 
            <h3 className='text-xl font-semibold'>Tasks</h3>
            <button>
                <MdOutlineAppRegistration className='h-auto w-7'/>
            </button>
          </div>
            <button onClick={handleTask} className='border-dashed border-2 hover:border-white hover:text-white text-slate-300 border-slate-300 w-full justify-center items-center flex rounded-md p-4'>
              <AiFillPlusCircle className='mr-2'/>
              <h4>Add a task</h4>
            </button>
            <span>
              <div>
                <input type="text" placeholder='What you plan to do?' className='bg-transparent text-slate-400 ou' />
              </div>
            </span>
        </div>
    </section>
  )
}
