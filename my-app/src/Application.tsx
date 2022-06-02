import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Application.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Widgets from './components/Widgets';
import Wudgets from './components/Wudgets';
const productprods=[
    {name: 'Phone Sam', price:'$1sdasd.00'},
    {name: 'Phone Sam', price:'$115.00'},
    {name: 'Phone Sam', price:'$150.00'},
    {name: 'Phone Sam', price:'$135.00'}
  ]
const widgetprods=[
  {name: 'Master Widget', price:'$125.00'},
  {name: 'Sub Widget', price:'$115.00'},
  {name: 'Long Widget', price:'$150.00'},
  {name: 'Short Widget', price:'$135.00'}
]
const wudgetprods=[
  {name: 'Wudget', price:'$75.00'},
  {name: ' Wudget', price:'$85.00'},
  {name: ' Wudget', price:'$135.00'},
  {name: ' Wudget', price:'$110.00'}
]
const Application =()=>{
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
                render={(props)=>
                  <Fragment>
                
                    <Products prods={productprods}/>
                  
                  </Fragment>
                }
              />
              <Route
                exact
                path='/Widgets'
                render={(props)=>
                  <Fragment>
                
                    <Widgets prods={widgetprods}/>
                  
                  </Fragment>
                }
              />
            <Route
              exact
              path='/Wudgets'
              render={(props)=>
                <Fragment>
              
                  <Wudgets prods={wudgetprods}/>
                
                </Fragment>
              }
            />
            </Switch>
</div>
      </div>
      </Router>
  )};
export default Application;