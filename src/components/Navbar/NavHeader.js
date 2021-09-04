import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../images/x.svg";
import { ReactComponent as MenuIcon } from "../../images/menu.svg";
import Logo from '../../images/Logo.jpg'
import "./Navbar.css";

const NavHeader = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="/">
          
            <img  className="logo"  src ={Logo} 
                   alt = "Logo" style ={{ width : "60px",borderRadius : 50}}/>
          </a>
        </div>

        <ul style={{color: "red"}} className={click ? "nav-options active" : "nav-options"}>
          <li  className="option" onClick={closeMobileMenu}>
            <a href="/"> Home</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/Services">Services</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/gallery"> Gallery</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/payment"> Payment</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/enquiry"> Enquiry</a>
          </li>
          </ul>
      </div>
    
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default NavHeader;        


         
        
  