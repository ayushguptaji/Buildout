import React from 'react'

const Card = ({data, name, unit}) => {
  return (
    <div className='weather-card'>
        <h5>{name}</h5>
        <div>{data}{unit}</div>
    </div>
  )
}

export default Card