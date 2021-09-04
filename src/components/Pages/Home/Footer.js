import React from "react";
import "./Footer.css";


function Footer() {
  return (
     


    <div className="main-footer">
   
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Kadds Theme | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
   
  );
}

export default Footer;
