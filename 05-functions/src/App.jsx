import React, { use, useState } from 'react'

const App = () => {

  const [num,setNum] = useState(0);

  return (
    <div id='counter'>
      <h1>{num}</h1>
        <button onClick={()=> setNum(num+1)}>increase</button>
        <button onClick={()=> setNum(num-1)}>decrease</button>
    </div>
  )
}

export default App