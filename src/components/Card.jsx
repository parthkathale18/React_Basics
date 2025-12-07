import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {

        
        
  return (
     <div className='card'>
        <div>
             <div className='top'>
          <img src={props.brand}/>
          <button>Save <Bookmark size={15}/></button>
        </div>

        <div className="center">
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.role}</h2>
            <div className='tag'>
            <h4>{props.time}</h4>
            <h4>{props.level}</h4>
           </div>
        </div>
        </div>

        <div className="bottom">
          <div>
              <h3>{props.salary}</h3>
              <p>{props.loc}</p>
          </div>
           <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card