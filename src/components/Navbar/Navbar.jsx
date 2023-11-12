import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ContainerNav, ContainerNavUL, ContainerUlLi, MainSection } from '../Navbar/style.ts';
import { ContainerTitle } from "../Home/style.ts";


function Navbar() {
  return (
    
      <div style={{display: 'flex'}}>
        <ContainerTitle>CRYPTO SECURITY</ContainerTitle>
        <ContainerNavUL>
        <ContainerUlLi>
            <Link to="/"style={{textDecoration: 'none', color: 'violet'}}>INICIO</Link>
          </ContainerUlLi>
          <ContainerUlLi>
            <Link to="/security" style={{textDecoration: 'none', color: 'violet'}}>SECURITY</Link>
          </ContainerUlLi>
          <ContainerUlLi>
            <Link to="/cryptos"style={{textDecoration: 'none', color: 'violet'}}>CRYPTOS</Link>
          </ContainerUlLi>
          <ContainerUlLi>
            <a href="#Contact" style={{textDecoration: 'none', color: 'violet'}}>CONTACT</a>
          </ContainerUlLi>
        </ContainerNavUL>
      </div>
    
  );
}

export default Navbar;
