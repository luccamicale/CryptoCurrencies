import React from "react";
import '../../styles/styles.css'
import { ContainerNav, ContainerNavUL, ContainerUlLi, MainSection } from '../Navbar/style.ts'

function Navbar() {
  return (
    <MainSection>
      <ContainerNav>
        <ContainerNavUL>
          <ContainerUlLi>INICIO</ContainerUlLi>
          <ContainerUlLi>SECURITY</ContainerUlLi>
          <ContainerUlLi>CRYPTOS</ContainerUlLi>
          <ContainerUlLi>CONTACT</ContainerUlLi>
        </ContainerNavUL>
      </ContainerNav>
    </MainSection>
  );
}

export default Navbar;