import React from 'react'

export default function Featurebox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt=''/>
        </div>

        <div className='a-b-text'>
            <h2> {props.title} </h2>
            <p> Lorem ipsum dolor site amet consectetur adipisicing.</p>
        </div>
      
    </div>
  )
}
