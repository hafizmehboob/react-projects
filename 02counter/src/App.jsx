import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter, setCounter] = useState(5);
   
   const addValue = () => {
    counter == 20 ? setCounter(20) : setCounter((counter) => counter + 1);    
    counter == 20 ? setCounter(20) : setCounter((counter) => counter + 1);    
    counter == 20 ? setCounter(20) : setCounter((counter) => counter + 1);    
    counter == 20 ? setCounter(20) : setCounter((counter) => counter + 1);    
    // Callback function return by setCounter and by copying the same line will be setCounter to increase by 1.

  }
 let removeValue  = () => {
  counter == 0 ? setCounter(0) : setCounter(counter - 1);    
 }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button
       onClick={addValue}
      >Add Value {counter}</button>
      <br/>
      <button
        onClick={removeValue}
      >Remove Value {counter}</button>
      <p>{counter}</p>
   </>
  )
}

export default App
