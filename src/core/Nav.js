
import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Nav.css";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Nav = ({ history }) => (
  
  <div>
    <ul className="nav nav-tabs bg-dark ">
    
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          HOME
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/cart")}
          className="nav-link"
          to="#"
        >
          ABOUT
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/cart")}
          className="nav-link"
          to="/cart"
        >
          MODEL
        </Link>
      </li>
     
      
        <li className="nav-item">
          <Link
            style={currentTab(history, "/user/dashboard")}
            className="nav-link"
            to="/user/dashboard"
          >
            CONTACT
          </Link>
        </li>
      
      
    </ul>
    </div>
  
);

export default withRouter( Nav);