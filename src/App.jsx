import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './Pages/Styles/Menu.css'
import './App.css'
export default function App() {
  const [pin, setPin] = useState("");
  const navigate = useNavigate();
  const birthDate = 230947
  const handleClick = (num) => {
    if (pin.length < 6) {
      const newPin = pin + num
      setPin(newPin);
      if (newPin.length === 6) {
        if (newPin == birthDate) {
          navigate("/menupage")
        } else {
          alert("ใส่รหัสผิดนะคะคนสวย ใส่ใหม่จ่ะ :D")
          setPin("")
        }
      }
    }

  }
  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  }
  return (
    <div className="w-full min-h-screen flex justify-center items-center pink-gradient">
      <div className="flex flex-col justfity-center items-center">
        <h1 className='font-mono font-bold text-6xl mb-3 animate-bounce'></h1>
        <img className="w-40 h-40 object-contain mb-2" src="./src/assets/a3f186387eb5237d79bd9b520c681ada.gif" alt="" />
        <h1 className='font-mono font-bold text-white text-5xl mb-3 animate-bounce double-layer outline-text'>Kulchaya Day</h1>
        <h3 className='font-mono text-2xl text-white mb-5 animate-pulse'>Hint : Password is your birthdate </h3>
        <div className="flex gap-2 w-100 mb-5 p-3 bg-gray-700 rounded-sm flex items-center justify-between">
          {Array(6).fill(0).map((_, i) => (
            <div key={i} className="w-6 h-8  rounded-md flex items-center justify-center text-xl font-bold bg-gray-700 text-white">
              {pin[i] ? "*" : ""}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 w-64">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", "0", "←"].map((item, i) => (
            <button key={i}
              onClick={() => {
                if (item === "←") handleDelete();
                else if (item !== "") handleClick(item)
              }}
              className=' h-16 rounded-2xl bg-white font-bold hover:bg-purple-400 hover:text-white transition'>
              {item}
            </button>
          )
          )}
        </div>

      </div>
    </div>
  );
}
