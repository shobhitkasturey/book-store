import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Naavbar from './components/Naavbar.jsx'
import MyFooter from './components/MyFooter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Naavbar/>
      <div className='min-h-screen'>
      <Outlet/>
      </div>
      <MyFooter/>
    </>
  )
}

export default App
