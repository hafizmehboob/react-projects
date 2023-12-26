import React from "react";
import {useDispatch} from 'react-redux';
import { addTodo } from "../features/todo/todoSlice";
import { useState } from 'react'

function AddTodo(){
    const [input, setInput] = useState('');
    const dispatch = useDispatch();    

    const addTodoHandler = (e) => {
         e.preventDefault();
         dispatch(addTodo(input));
         setInput('');
    }
    return(
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input 
                    type="text" 
                    className="bg-gray-800 text-white rounded border border-gray-700 transition-colors duration-200 ease-in-out"
                    value={input} 
                    placeholder="Enter a todo...."
                    onChange={(e) => setInput(e.target.value)}
            />
             <button className="text-white bg-indigo-500 border-0 py-2">Submit</button>
      </form>
    )
}
export default AddTodo;