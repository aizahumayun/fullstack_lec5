import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-yellow-500 w-65 h-65 grid grid-cols-2 grid-rows-2'>
        <div className='bg-red-400 '>123</div>
        <div className='bg-green-400'>123</div>
        <div className='bg-purple-400'>123</div>
        <div className='bg-blue-400'>123</div>
      </div>
    </>
  )
}

export default App
