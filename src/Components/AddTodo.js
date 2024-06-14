import React ,{useState}from 'react'
import {useDispatch} from 'react-redux'
import {addTodo}from '../features_todo/todo_slics'



function AddTodo() {
  
  
    const [input, setInput] = useState('')
    const [header, setHeader] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if(header.length<1||input.length<1){
          window.alert('enter both header and task');
          return 
          
        }
        dispatch(addTodo({header,input}));
     

        setInput('');
        setHeader('');
    }

  return (
    
    <form onSubmit={addTodoHandler} className="flex flex-wrap justify-center items-center space-y-3 md:space-x-3 md:space-y-0 mt-12">
  <input
    type="text"
    className="w-full md:w-auto bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    placeholder="Enter a Header..."
    value={header}
    onChange={(e) => setHeader(e.target.value)}
  />
  <input
    type="text"
    className="w-full md:w-auto bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    placeholder="Enter a Todo..."
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />
  <button
    type="submit"
    className="w-full md:w-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
  >
    Add Todo
  </button>
</form>
  )
}

export default AddTodo