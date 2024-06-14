import {createSlice,nanoid} from '@reduxjs/toolkit';


const loadState = () => {
    try {
      const todos = JSON.parse(localStorage.getItem('userTodo')||'[]');
      const completedtodos= JSON.parse(localStorage.getItem('userCTodo')||'[]');
      return {todos,completedtodos};
    } catch (err) {
      console.error("Could not load state", err);
      return [];
    }
  };
  
  // Initial state
  const initialState = loadState();


export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action)=>{
           
            const todo={
                 id:nanoid(),
                 header: action.payload.header,
                 text:action.payload.input,
                 
            }
            state.todos.push(todo);
            localStorage.setItem('userTodo',JSON.stringify(state.todos));
             
        },
        removeTodo:(state,action)=>{
          state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
          
          state.completedtodos=state.completedtodos.filter((todo)=>todo.id!==action.payload)
          
            localStorage.setItem('userTodo',JSON.stringify(state.todos));
            localStorage.setItem('userCTodo',JSON.stringify(state.completedtodos));
        
         
        },
        completedTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>{
                if(todo.id===action.payload) state.completedtodos.push(todo);
               return todo.id!==action.payload;
        })
      
            localStorage.setItem('userTodo',JSON.stringify(state.todos));
            localStorage.setItem('userCTodo',JSON.stringify(state.completedtodos));
        
           
           
            
        },
        
    }
})

export const {addTodo,removeTodo,completedTodo}=todoSlice.actions
export default todoSlice.reducer