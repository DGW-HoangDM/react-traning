import React from 'react';
import {
  Link, NavLink
} from "react-router-dom";

class NavComponent extends React.Component {
  
  render() {


    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/todo">Todo</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/example">Example</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavComponent;