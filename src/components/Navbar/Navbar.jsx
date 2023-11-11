import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ContainerNav, ContainerNavUL, ContainerUlLi, MainSection } from '../Navbar/style.ts';


function Navbar() {
  return (
    <MainSection>
      <ContainerNav>
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
            <Link to="/contact"style={{textDecoration: 'none', color: 'violet'}}>CONTACT</Link>
          </ContainerUlLi>
        </ContainerNavUL>
      </ContainerNav>
    </MainSection>
  );
}

export default Navbar;
