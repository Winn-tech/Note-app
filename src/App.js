import React, { useReducer, useState, useEffect} from 'react'
import './App.css';
import Modal from './modal';
import Navbar from './navbar';
import { reducer } from './reducer';
import { FiEdit } from 'react-icons/fi';
import { FaTrashCan} from "react-icons/fa6";


const getNotesFromLocalStorage = ()=>{
  const localNote = window.localStorage.getItem('NOTES')
  if (localNote) {
    return JSON.parse(window.localStorage.getItem('NOTES'))
  }
  else{
    return []
  }
}

const defaultState = {
  tasks: getNotesFromLocalStorage(),
  isModalOpen: false,
  modalContent: ' ',
  className: ' ',
  task : ' ',
}


function App() {
  const [state,dispatch] = useReducer(reducer, defaultState)
  const[ theme, setTheme] = useState( 'light' )

  // getting theme from local storage
  useEffect(()=>{
    const data= window.localStorage.getItem('THEME')
    console.log(data, );
    if ( data !== null) {
      setTheme(JSON.parse(data))
    }
  },[])
  
  //  saving the theme to local storage
  useEffect(()=>{
    window.localStorage.setItem('THEME', JSON.stringify(theme))
  }, [theme])

  //  getting notes from local state
useEffect(()=>{
  const Notes = window.localStorage.getItem('NOTES')
  console.log(Notes);
 
},[])

 // saving the notes to local storage
 useEffect(()=>{
   window.localStorage.setItem('NOTES', JSON.stringify(state.tasks))
 },[state.tasks])



  const changeTheme =()=>{
    if (theme === 'light') {
setTheme('dark')
    }
    else{
      setTheme('light')
    }
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
   
   <main className={theme}>  
    <Navbar changeTheme={changeTheme} modeState={theme} />
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
              placeholder = "Input activity to be recorded"
              value = {state.task  } 
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
                <div className='task' key={task.id}>
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
