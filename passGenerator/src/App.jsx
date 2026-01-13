import { useCallback, useEffect, useState } from 'react'
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = () => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numAllowed)
    {
      str += "0123456789";
    }
    if(charAllowed)
    {
      str+= "!@#$%^&*";
    }

    for(let i = 0; i < length;i++)
    {
      pass += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(pass);
  };

  return (
    <>
      <div className="w-full h-screen bg-gray-800 flex justify-center items-start">
        <div className="bg-blue-300 p-5 rounded-2xl mt-5">
          <h2 className='text-3xl text-center font-bold p-2'>Password Generator</h2>
          <div className="w-full py-3">
            <input type="text" className='bg-white p-2 w-4/5 rounded-l-md' disabled value={password}/>
            <button onClick={passwordGenerator} className='bg-blue-700 p-2 rounded-r-md w-1/5 text-white font-semibold cursor-pointer '>Generate Password</button>
          </div>
          <div className="flex gap-5">
            <div className="flex gap-2">
              <input onChange={(e) => setLength(e.target.value)} type="range" min={6} max={20} defaultValue={length}/>
              <label className='text-black font-semibold'>Length: {length}</label>
            </div>
            <div className="flex gap-1">
              <input onChange={() => setNumAllowed((prev) => !prev)} type="checkbox" />
              <label className='text-black font-semibold' >Number</label>
            </div>
            <div className="flex gap-1">
              <input onChange={() => setCharAllowed((prev) => !prev)} type="checkbox" />
              <label className='text-black font-semibold' >Character</label>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default App