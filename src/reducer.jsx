export const reducer = (state, action) =>{
 
   if(action.type === 'ADD_TASK'){
     const play = state.tasks
     const newTasks = [...play, action.payload ]
    //  console.log(newTasks);
     return {...state, tasks:newTasks, isModalOpen: true, modalContent: 'Note added', className: 'add_task', task: ' ' };
   }
   if(action === 'CLEAR_TASK'){
      return{...state, task : ' ' }
   }
   
   if(action.type === 'CHANGE'){
    return{...state, task: action.payload}
    
   }
   if(action.type ==='NO_TASK'){
     return {...state, isModalOpen:true, modalContent: 'Add Note to the text area', className: 'no_task'} 
   }
   if(action.type === 'CLOSE_MODAL'){
       return{...state, isModalOpen: false}
   }
   if(action.type === 'FILTER'){
     const newTasks = state.tasks.filter((task)=> task.id !== action.payload )
     return{...state, tasks:newTasks }
   }
   if(action.type === 'EDIT'){
    const filteredItems = state.tasks.filter((task)=> task.id !== action.payload);
    const selectedItem = state.tasks.find((task)=> task.id === action.payload)
    return{...state, tasks: filteredItems, task: selectedItem.note}
   }  

   if (action.type === 'CHANGE_MODE') {
      return{...state,  mode : !action.payload}
   }
   return state
 }
 