import React from 'react';
import Wudget from './Wudget';
const Wudgets =({prods}:any)=>{
    return (
    <div>
     
      {prods.map((prod:{ name: string; price: number; })=>(
        <Wudget name={prod.name} price={prod.price} />
  
      ))}
    </div>
    )};
  
  
  export default Wudgets;


