import React from 'react';

import './card.styles.css';


export const Card =(props) =>(
    <div className='card-container'>
      <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set6&size=150x150`}/>
      <h2 >Medicine Name</h2>

    </div>
)