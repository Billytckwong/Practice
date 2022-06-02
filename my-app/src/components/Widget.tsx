import React from 'react';

interface WidgetProp {
    name: string;
    price: number;
  }
  

const Widget=(props: WidgetProp)=> {
    return (
      <div className='product'>
        <h1>{props.name}</h1>
        <p>Price: {props.price}</p>
      </div>
    );
  }

  
export default Widget;