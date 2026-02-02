import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './incrementer.css'

function App() {
  const [count, setCount] = useState(0)

  let inc =()=>{
    if(count<100){
      setCount(count+1)
    }
  }

  let dic =()=>{
    if(count>0){

      setCount(count-1)
    }
  }

  return (
    <>
    <div className='container'>
        <div className='left'>
            <button onClick={dic}>-</button>
        </div>
        <div className='mid'>
            <h2>{count}</h2>
        </div>
        <div className='right'>
            <button onClick={inc}>+</button>
        </div>
    </div>
     
    </>
  )
}
export default App