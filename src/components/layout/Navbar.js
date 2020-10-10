import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <span>
            <i className="fab fa-github"></i>
          </span>
          <h4>Github</h4>
        </div>

        <ul>
          <li>
            <input type="text" name="" id="" className="navbar-input" />
          </li>
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">About</a>
          </li>
          <li>
            <a href="#!">SignIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
