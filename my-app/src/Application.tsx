import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/Application.css';
import Data from './data.json';
import Navbar from './components/Navbar';
import Product from './components/Product';
import './components/popup';

function Application() {
    const [selectItemData, setSelect] = useState<any>([]);
    const select = [selectItemData, setSelect];

    useEffect(() => {
        console.log(selectItemData);
    }, [selectItemData]);

    return (
        <Router>
            <div className="App">
                <Navbar selectItemData={selectItemData} />
                <div className="shopping-cart"></div>
                <div className="container">
                    <div className="product-box">
                        {Data.products.map((product, i) => (
                            <Product key={i} product={product} select={select} />
                        ))}
                    </div>
                </div>
            </div>
        </Router>
    );
}
export default Application;
