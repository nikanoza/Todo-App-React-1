import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[todos,setTodos]=useState()

  return (
    
    <div className="main">
        <div className="whole_card">
            <div className="header">
                <h1>TODO</h1>
                <button className="theme"><img src="./assets/icon-sun.svg" alt="sum" /></button>
            </div>
            <div className="todoinputContainer">
              <button></button>

            </div>
        </div>




    </div>
   

    
  )
}

export default App
