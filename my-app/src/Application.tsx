import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Application.css';
import Data from './data.json';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';

const productprods=[
   {name: 'Phone Sam', price:'$1sdasd.00'},
   {name: 'Phone Sam', price:'$115.00'},
   {name: 'Phone Sam', price:'$150.00'},
   {name: 'Phone Sam', price:'$135.00'}
  ]

  class Products extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {}
    }



function Application() {
    return (
        <Router>
            <div className='App'>
                <Navbar />
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route
                            exact
                            path='/Products'
                            render={(props) => <Fragment>

                                <Products prods={productprods} />

                            </Fragment>} />

                    </Switch>
                </div>
            </div>
        </Router>
    );
}
export default Application;