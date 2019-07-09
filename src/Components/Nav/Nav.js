import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div className="Nav">
        <nav className="navbar navbar-light bg-light margin-bottom">
            <img src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" 
                 width="30" height="30" 
                 className="d-inline-block align-top" alt="" 
            />
            <ul className="nav">
              <li className="nav-item"></li>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;