import React from 'react'

const Card = ({data, name, unit}) => {
  return (
    <div className='weather-card'>
        <h5>{name}</h5>
        <p>{data}{unit}</p>
    </div>
  )
}

export default Card