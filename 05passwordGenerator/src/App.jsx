import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwaordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed)  str += '0123456789';
    if(charAllowed) str+= '!@#$%^&*(){}[]';
    for(let i=1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const passwordRef = useRef(null);
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    
        window.navigator.clipboard.writeText();
        console.log()
  },[password]) 
 useEffect(()=>{
  passwaordGenerator();
 },[length, numberAllowed, charAllowed, passwaordGenerator]);
  return (
    <>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none rounded-lg w-full py-1 px-3'
          placeholder='Password' ref={passwordRef} readOnly
          />
          <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' type='`button'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value); }}
             />
            <label>Length: {length}</label>
            <input 
            type="checkbox"
            id="numberAllowed"
            defaultChecked={numberAllowed}
            className='ml-5' 
            onChange={()=> setNumberAllowed((prev)=> !prev)}
             />
             <label>Numbers</label>
             <input type="checkbox" 
             className='ml-5'
             defaultChecked={charAllowed}
             onChange={() => setCharAllowed((prev)=> !prev)}
             />
             <label>Characters</label>
          </div>
        </div>
       </div>
    </>
  )
}
export default App
