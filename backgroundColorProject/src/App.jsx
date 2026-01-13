import { useState } from 'react';
import "./App.css";
import BgColor from './components/bgColorCard';

function App() {
  const [color, setColor] = useState("royalblue");

  return (
    <div className="duration-800 relative w-full h-screen" style={{ backgroundColor: color }}>
      <div className="w-full absolute flex justify-center bottom-12 p-2">
        <div className="bg-white p-3 rounded-3xl flex gap-5 text-white">
          <button onClick={() => setColor("red")}><BgColor choice="red" btnColor="Red" /></button>
          <button onClick={() => setColor("green")}><BgColor choice="green" btnColor="Green" /></button>
          <button onClick={() => setColor("blue")}><BgColor choice="blue" btnColor="Blue" /></button>
          <button className='text-black' onClick={() => setColor("lavender")}><BgColor choice="lavender" btnColor="Lavender" /></button>
          <button className='text-black' onClick={() => setColor("yellow")}><BgColor choice="yellow" btnColor="Yellow" /></button>
          <button onClick={() => setColor("black")}><BgColor choice="black" btnColor="Black" /></button>
        </div>
      </div>
    </div>
  )
}

export default App