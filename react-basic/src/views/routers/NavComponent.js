import React from 'react';
import {
  NavLink,
  withRouter
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
                <li className="nav-item dropdown">
                  <NavLink activeClassName="active" className="nav-link dropdown-toggle" to="/topics">Topics</NavLink>

                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="/topics/event" >Event</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/topics/talk-show" >Talk show</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(NavComponent);