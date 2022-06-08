import React,{useState} from 'react';
import Popup from './popup';
import "../scss/Popup.css";
//import {Link} from 'react-router-dom'
const Navbar = (props: any) => {
  const [cartState, setcartState] = useState(false); 
    return (
        <nav className="navbar  bg-primary">
            <h1>Shop Title</h1>
            <ul>
                <li>
                    <button className="cart-button" onClick={cartState? (e) => setcartState(false):(e) =>setcartState(true)}> Shopping cart</button>
                    <Popup trigger={cartState} setTrigger={setcartState}>
                        <h3> Shopping cart</h3>
                        <h5>{props.selectItemData.map((item: string[]) => {
                            return <li className="shopping-cart">{item}</li>;
                        })}</h5>
                    </Popup>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
