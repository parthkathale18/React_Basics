import React, { useEffect, useState } from 'react'

const App = () => {

  const [first, setfirst] = useState(0)
  const [second, setsecond] = useState(0)

  useEffect(function(){
    console.log("useEffect called");
  },[first])

  return (
    <div>
      <h1>first {first}</h1>
      <h1>second {second}</h1>
      <button 
      onMouseEnter={()=>{
        setfirst(first+1)
      }}
      
      onMouseLeave={()=>{
        setsecond(second+100)
      }}
      >
        Tap me
        </button>
    </div>
  )
}

export default App