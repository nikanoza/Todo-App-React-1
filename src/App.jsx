import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sun from "./assets/icon-sun.svg"
import Moon from "./assets/icon-moon.svg"
import BcgDeskLight from "./assets/bg-desktop-light.jpg"
import BcgDeskDark from "./assets/bg-desktop-dark.jpg"


function App() {
  const[todos,setTodos]=useState()

  return (
    
    <div className="main">
        <div className="whole_card">
            <div className="header">
                <h1>TODO</h1>
                <button className="theme"><img src={Sun} alt="Sun" /></button>
            </div>
            <div className="todoinputContainer">
              <button></button>

            </div>
        </div>




    </div>
   

    
  )
}

export default App
