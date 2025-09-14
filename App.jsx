import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-yellow-500 w-65 h-65 flex'>
        <div className='bg-'></div>
        <div className='bg-'></div>
        <div className='bg-'></div>
        <div className='bg-'></div>
      </div>
    </>
  )
}

export default App
