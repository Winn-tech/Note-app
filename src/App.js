
import React, { useReducer, useState, useEffect} from 'react'
import './App.css';
import Modal from './modal';
import Navbar from './navbar';
import { reducer } from './reducer';
import { FiEdit } from 'react-icons/fi';
import { FaTrashCan } from "react-icons/fa6";
import {MdOutlineNightlight} from "react-icons/md"


const defaultState = {
  tasks: [] ,
  isModalOpen: false,
  modalContent: ' ',
  className: ' ',
  task : ' ',
}


function App() {
  const [state,dispatch] = useReducer(reducer, defaultState)
  const[ mode, setMode] = useState('light')

 
  useEffect(()=>{
    localStorage.setItem('modeState', JSON.stringify(mode))
  },[mode])

  

  useEffect(()=>{
     const storedModeState = localStorage.getItem('modeState')
     if(storedModeState){
       setMode(JSON.parse(storedModeState))
     }
  }, [])

  const changeMode =()=>{ 
   setMode((curr)=>curr === 'light' ? 'dark':'light' ) 
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    const note = state.task
    const date = new Date().toString().slice(3, 21)
    if(state.task !== ' '){
      const newTask = {id: new Date().getTime().toString(), note, date }
      dispatch({type:'ADD_TASK', payload:newTask})
      dispatch({type:'CLEAR_TASK'})
        
      }
     
    else{
      dispatch({type: 'NO_TASK'})
    }
    
  }
  const handleChange = e =>{
      const event = e.target.value
      dispatch({type: 'CHANGE', payload: event})
  }  
  const handleCloseModal =()=>{
    dispatch({type:'CLOSE_MODAL'})
  }
  
  return (
   
   <main className={mode}>  
    <Navbar mode={changeMode} modeState={mode} />
    <section>
      <div className='modal'>
        {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={handleCloseModal} className={state.className}/>}
      </div>
      <div>
          <p className='intro'>Input short note to be recorded</p>
          <form onSubmit={handleSubmit}>
          <div> 
          <textarea 
              type="text" 
              value = {state.task  } 
              placeholder = "Input activity to be recorded"
              onChange={handleChange}
            />

            </div>
              <button type='submit' >Add Note</button>
          </form>
      </div>
      <div className='tasks'>
          {
            state.tasks.map((task)=>{
              return (
                <div className='task'>
                  <p className='note'>{task.note}</p>
                  <div>
                    <p className='date'>{task.date}</p>
                    
                    <span className='buttons'>
                      <button className='Done' onClick={()=> dispatch({type: 'EDIT', payload: task.id})}><FiEdit/></button>
                      <button onClick={()=> dispatch({type: 'FILTER', payload: task.id})}><FaTrashCan/></button>
                    </span>
                    <p>  </p>
                  </div>
                </div>
              )
            })
          }
      </div>
    </section>
    
      
   </main>
  );
}

export default App;
