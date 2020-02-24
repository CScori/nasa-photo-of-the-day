import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';




const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
   
  
    return (
      <div>
        <img
              src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
              width="2%"
              float="left"
            ></img>
      
        <h1>NASA Photo of the Day</h1>
      
    </div>
  );

  
  };

export default Header
