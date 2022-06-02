import React from 'react';

interface ProductProp {
    name: string;
    price: number;
  }
  

const Widget=(props: ProductProp)=> {
    return (
      <div className='product'>
        <h1>{props.name}</h1>
        <p>Price: {props.price}</p>
      </div>
    );
  }

  
export default Widget;