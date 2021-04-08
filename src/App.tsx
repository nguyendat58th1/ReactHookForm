import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AddProduct from './pages/add-product';
import Login from './pages/login';
import Register from './pages/register';

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
        </Switch>

  

    </Router>

  )
}

export default App;
