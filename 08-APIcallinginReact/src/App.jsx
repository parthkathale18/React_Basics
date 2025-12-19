import React, { useState } from 'react'
import axios from 'axios'


const App = () => {

  const [data, setData] = useState([])

 const getData = async() =>{
  const response = await axios.get("https://picsum.photos/v2/list");  
  setData(response.data);

}

  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div >

        {data.map(function(item,idx){

          return <div key = {idx}>
              hello, {item.author}
          </div>

        })}
      </div>
    </div>
  )
}

export default App