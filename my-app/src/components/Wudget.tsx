import React from 'react';

interface WudgetProp {
    name: string;
    price: number;
  }
  

const Wudget=(props:WudgetProp)=> {
    return (
      <div className='product'>
        <h1>{props.name}</h1>
        <p>Price: {props.price}</p>
      </div>
    );
  }
export default Wudget;