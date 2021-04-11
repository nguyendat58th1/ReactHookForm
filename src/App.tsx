import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AddProduct from './pages/product/add-product';
import Login from './pages/login';
import { ListProduct } from './pages/product/product-list';
import Register from './pages/register';
import DetailProduct from './pages/product/detail-product';
import EditProduct from './pages/product/edit-product';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#"> <Link to="/login">Login</Link> </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#"> <Link to="/register">Register</Link> </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#"> <Link to="/addproduct">Add Product</Link> </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#"> <Link to="/product">List Product</Link> </a>
            </li>
          
          </ul>
        </div>
      </nav>
    
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/addproduct">
            <AddProduct />
          </Route>
          <Route path="/product">
            <ListProduct />
          </Route>
          <Route exact  path="/detailproduct/:productId">
            <DetailProduct />
          </Route>
          <Route exact  path="/editproduct/:productId">
            <EditProduct />
          </Route>
        </Switch>

  

    </Router>

  )
}

export default App;
