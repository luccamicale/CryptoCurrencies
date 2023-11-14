import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ContainerMainNavbar, ContainerNav, ContainerNavUL, ContainerUlLi, MainSection } from '../Navbar/style.ts';
import { ContainerTitle } from "../Home/style.ts";


function Navbar() {
  return (
    
      <ContainerMainNavbar>
        <ContainerTitle>
          <Link to="/" style={{textDecoration: 'none', color: 'whitesmoke'}}>CRYPTO SECURITY</Link>
        </ContainerTitle>
        <ContainerNavUL>
          <ContainerUlLi>
            <Link to="/cryptos"style={{textDecoration: 'none', color: 'violet'}}>CRYPTOS</Link>
          </ContainerUlLi>
          <ContainerUlLi>
            <Link to="/security" style={{textDecoration: 'none', color: 'violet'}}>SECURITY</Link>
          </ContainerUlLi>
          <ContainerUlLi>
            <a href="#Contact" style={{textDecoration: 'none', color: 'violet'}}>CONTACT</a>
          </ContainerUlLi>
        </ContainerNavUL>
      </ContainerMainNavbar>
    
  );
}

export default Navbar;
