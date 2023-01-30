import React from 'react'
import{IoMdSettings,IoIosTimer} from 'react-icons/io'
import{AiFillInfoCircle} from 'react-icons/ai'
import {useColor} from '../context/ColorContext'
import {Modal,Button,Header} from 'semantic-ui-react'
import {useUser} from '../context/UserContext'
export default function HeaderBar() {
  const {color} = useColor();
  const {pomo,short,long,counterChange,setPomo,setShort,setLong} = useUser();
  const [open,setOpen] = React.useState(false)
  const pomodoroRef = React.useRef()
  const shortRef = React.useRef()
  const longRef = React.useRef()
  return (
    <header className='flex justify-center bg-transparent max-h-16 z-30'>
      <div className='w-full flex justify-between lg:justify-center items-center flex-row p-2 ' style={{backgroundColor:`${color.main}`,transition:'background-color 0.4s ease-in-out 0s'}}>
        <div className='flex justify-center items-center mr-10'>
          <IoIosTimer className='h-auto w-6 sm:w-9 ' />
          <a href="" className='hover:text-white' >
            <h1 className='font-semibold ml-1 sm:text-4xl'>PomoTimer</h1>
          </a>
          
        </div>
        <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <button className='flex justify-center items-center mr-10 ' style={{backgroundColor:`${color.main}`,transition:'background-color 0.4s ease-in-out 0s'}}>
        <IoMdSettings />
        <span className='ml-1'>Settings</span>
      </button>
      }
    >
      <Modal.Header>Settings</Modal.Header>
      <Modal.Content >
        <Modal.Description>
          <Header>Timer</Header>
          <div>
            <p className='text-black  '>Pomodoro</p>
            <input type="number" value={pomo} ref={pomodoroRef} onChange={()=>{
              counterChange(false)
              setPomo(pomodoroRef.current.value)
            }} className='outline-black outline-2 outline rounded-md text-black ' />
          </div>
          <div>
            <p className='text-black'>Short Break</p>
            <input type="number" value={short} ref={shortRef} onChange={()=>{
              counterChange(false)
              setShort(shortRef.current.value)
            }} className='outline-black outline-2 outline rounded-md text-black ' />
          </div>
          <div>
            <p className='text-black'>Long Break</p>
            <input type="number" value={long} ref={longRef} onChange={()=>{
              counterChange(false)
              setLong(longRef.current.value)
            }} className='outline-black outline-2 outline rounded-md text-black ' />
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Save"
          labelPosition='right'
          icon='checkmark'
          onClick={() =>{
            setOpen(false)
            setPomo(pomodoroRef.current.value)
            setShort(shortRef.current.value)
            setLong(longRef.current.value)
          } }
          positive
        />
      </Modal.Actions>
    </Modal>
        <button className='flex justify-center items-center  hover:text-white ' style={{backgroundColor:`${color.main}`,transition:'background-color 0.4s ease-in-out 0s'}} >
          <AiFillInfoCircle />
          <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">
            <p className='ml-1  hover:text-white '>Info</p>
          </a>
        </button>
      </div>
    </header>
  )
}
