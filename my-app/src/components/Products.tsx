import React from 'react';
import Widget from './Product';

const Widgets =({prods}: any)=>{
    return (
    <div>
     
      {prods.map((prod: { name: string; price: number; }) =>(
        
        <Widget name={prod.name} price={prod.price} />
  
      ))}
    </div>
    )};
  
  
  export default Widgets;