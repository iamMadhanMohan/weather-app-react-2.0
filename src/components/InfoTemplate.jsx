import React from 'react'
import './InfoTemplate.css';

const InfoTemplate = (props) => {
  return (
    <div className='InfoTemplate'>
      <p>{props.value}</p>
      <p>{props.name}</p>
    </div>
  )
}

export default InfoTemplate