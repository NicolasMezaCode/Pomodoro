import React,{useState,useRef} from 'react'
import {useColor} from '../context/ColorContext'
import {MdOutlineAppRegistration} from 'react-icons/Md'
import {AiFillPlusCircle} from 'react-icons/Ai'
import SingleTask from './SingleTask'
export default function Tasks() {
    const [open, setOpen] = useState(false);
    const [pomodoros, setPomodoros] = useState(1);
    const [tasks, setTasks] = useState([]);
    const {color} = useColor();
    const inputRef = useRef();
    const handleTask = () => {
      setOpen(true);
    }
    const handlePomodoros=(e)=>{
        setPomodoros(e.target.value);
    }
    const handleSave = () => {
        setOpen(false);
        const task = inputRef.current.value;
        const newTask = {
            task,pomodoros:parseInt(pomodoros),key:crypto.randomUUID()
        }
        setTasks([...tasks,newTask]);
        setPomodoros(1);
    }
    console.log(tasks);
  return (
    <section className='w-screen flex justify-center'>
        <div className='absolute  sm:min-w-[480px] mt-[30rem] flex justify-between flex-col items-center p-8 z-30 rounded-lg mb-20' style={{backgroundColor:`${color.main}`}}>
          <div className='flex justify-between items-center w-full mb-5'> 
            <h3 className='text-xl font-semibold'>Tasks</h3>
            <button>
                <MdOutlineAppRegistration className='h-auto w-7'/>
            </button>
          </div>
          {tasks.length > 0 ?
            tasks.map((task) => {
              return <SingleTask task={task.task} pomodoros={task.pomodoros} key={task.key} index={task.key} />
            }
            )
            : null
          }
          {open ? null:
            <button onClick={handleTask} className='border-dashed border-2 hover:border-white hover:text-white text-slate-300 border-slate-300 w-full justify-center items-center flex rounded-md p-4 mt-4'>
              <AiFillPlusCircle className='mr-2'/>
              <h4>Add a task</h4>
            </button>
            
          }
          {
            open ? 
            <span className='sm:min-w-[480px] min-w-[350px]  bg-not-white h-52  text-slate-600 text-xl rounded-lg mt-4'>
                <div className='w-full h-full flex justify-center items-center flex-col'>
                    <input type="text" placeholder='What you plan to do ?' ref={inputRef} className='bg-transparent' />
                    <p className='mt-3'>Est Pomodoros</p>
                    <input type="number" onChange={handlePomodoros} value={pomodoros} className='outline-2 outline-gray-400 outline rounded-md w-12 p-1 mt-3' />
                    <div className='mt-6' >
                        <button onClick={()=>{setOpen(false);}} className='mr-5 '>
                            Cancel
                        </button>
                        <button onClick={handleSave} className='bg-stone-700 text-white 0 pb-1 pt-1 pl-3 pr-3 rounded-lg'>
                            Save
                        </button>
                    </div>
                </div>
            </span>
            :null
          }

        </div>
    </section>
  )
}
