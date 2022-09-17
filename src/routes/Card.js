import React from 'react';
import './products.scss';

export default function Card(props){
  return (
   <div className='c'>
    <div className='cd'>
    <img alt='V1' src={props.img}/>
    <div>
       <h3>{props.name}</h3>
       <h5>{props.amount}</h5>
    </div>
      <button id='rent-btn'>RENT</button>
    </div>
     
    </div> 
  )
}
