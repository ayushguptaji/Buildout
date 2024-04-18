import React from 'react';
import "./Card.css";

const Card = ({ name, url, alt }) => {
  return (
    <div className='card'>
        <img alt={alt} src={url} className='flag'/>
        <p className='heading'>{name}</p>
    </div>
  )
}

export default Card