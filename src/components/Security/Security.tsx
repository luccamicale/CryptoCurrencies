import React from "react";
import '../../styles/styles.css'
import Navbar from "../Navbar/Navbar";
import '../Security/style.ts'
import { ContainerGeneralSecurity, ContainerSecurityOne, ContainerSecurityTwo } from "../Security/style.ts";


function Security() {
  
  return (
    <div>
      <Navbar />
      
      <ContainerGeneralSecurity>
        <ContainerSecurityOne>
          <p style={{color: 'white', textAlign: 'right'}}>hola luuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuucca como estas bien y vos donde estas como te fue a que hora llegas</p>
        </ContainerSecurityOne>
        <ContainerSecurityTwo>
          <p style={{color: 'white', textAlign: 'left'}}>hola lucca como estas hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhbien y vos donde estas como te fue a que hora llegas</p>
        </ContainerSecurityTwo>
        <ContainerSecurityOne>
          <p style={{color: 'white', textAlign: 'right'}}>hola luuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuucca como estas bien y vos donde estas como te fue a que hora llegas</p>
        </ContainerSecurityOne>
        <ContainerSecurityTwo>
          <p style={{color: 'white', textAlign: 'left'}}>hola luuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuucca como estas bien y vos donde estas como te fue a que hora llegas</p>
        </ContainerSecurityTwo>
      </ContainerGeneralSecurity>


    </div>
  );
}

export default Security;