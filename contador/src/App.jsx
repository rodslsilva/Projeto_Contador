
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { CountdownContext } from './context/CountdownContext'

import './App.css'

function App() {

  return (
    <div className='App'>
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
