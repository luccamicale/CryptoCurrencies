import React from "react";
import '../../styles/styles.css'
import Navbar from "../Navbar/Navbar";
import '../Security/style.ts'
import { ContainerGeneralSecurity, ContainerIconSecurity, ContainerOneCard, ContainerSecurityOne, ContainerSecurityTwo, ContainerSpanSecurity, ContainerSpanSecurityTwo, ContainerTitleSecurity } from "../Security/style.ts";
import { MdOutlineSecurity } from 'react-icons/md';
import { CgDanger } from 'react-icons/cg';
import { AiOutlineTransaction } from 'react-icons/ai';
import { TiCloudStorage } from 'react-icons/ti';
import { MdSell } from 'react-icons/md';
import { AiOutlineLink } from 'react-icons/ai';
import { GiOpenTreasureChest } from 'react-icons/gi';
import Accordion from 'react-bootstrap/Accordion';

function Security() {
  
  return (
    <div>
      <Navbar />
      <div style={{display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '100px'}}>
        <ContainerTitleSecurity>Protecting your digital treasure: security in the cryptocurrency universe</ContainerTitleSecurity>
        <div style={{marginTop: '85px'}}><GiOpenTreasureChest size={200} color="#fca311"/></div>
      </div>
      <ContainerGeneralSecurity>

        <ContainerSecurityOne>
          <ContainerIconSecurity>
            <MdOutlineSecurity size={90} color="white" />
          </ContainerIconSecurity>
          <ContainerSpanSecurity>
            1. Introducción a las Criptomonedas:
            Definición: Explica qué son las criptomonedas y cómo funcionan.
            Tecnología Blockchain: Descripción básica de la tecnología detrás de las criptomonedas y su papel en la seguridad.
          </ContainerSpanSecurity> 
        </ContainerSecurityOne>
          
        <ContainerSecurityTwo>
          <ContainerSpanSecurityTwo>
          1. Introducción a las Criptomonedas:
            Definición: Explica qué son las criptomonedas y cómo funcionan.
            Tecnología Blockchain: Descripción básica de la tecnología detrás de las criptomonedas y su papel en la seguridad.
          </ContainerSpanSecurityTwo>
          <ContainerIconSecurity>
            <CgDanger size={90} color="white" />
          </ContainerIconSecurity>
        </ContainerSecurityTwo>

        <ContainerSecurityOne>
          <ContainerIconSecurity>
            <AiOutlineTransaction size={90} color="white" />
          </ContainerIconSecurity>
          <ContainerSpanSecurity>
            1. Introducción a las Criptomonedas:
            Definición: Explica qué son las criptomonedas y cómo funcionan.
            Tecnología Blockchain: Descripción básica de la tecnología detrás de las criptomonedas y su papel en la seguridad.
          </ContainerSpanSecurity> 
        </ContainerSecurityOne>

        <ContainerSecurityTwo>
          <ContainerSpanSecurityTwo>
          1. Introducción a las Criptomonedas:
            Definición: Explica qué son las criptomonedas y cómo funcionan.
            Tecnología Blockchain: Descripción básica de la tecnología detrás de las criptomonedas y su papel en la seguridad.
          </ContainerSpanSecurityTwo>
          <ContainerIconSecurity>
            <TiCloudStorage size={90} color="white" />
          </ContainerIconSecurity>
        </ContainerSecurityTwo>

        <ContainerSecurityOne>
          <ContainerIconSecurity>
            <MdSell size={90} color="white" />
          </ContainerIconSecurity>
          <ContainerSpanSecurity>
            1. Introducción a las Criptomonedas:
            Definición: Explica qué son las criptomonedas y cómo funcionan.
            Tecnología Blockchain: Descripción básica de la tecnología detrás de las criptomonedas y su papel en la seguridad.
          </ContainerSpanSecurity> 
        </ContainerSecurityOne>

        <ContainerSecurityTwo>
          <ContainerSpanSecurityTwo>
          1. Introducción a las Criptomonedas:
            Definición: Explica qué son las criptomonedas y cómo funcionan.
            Tecnología Blockchain: Descripción básica de la tecnología detrás de las criptomonedas y su papel en la seguridad.
          </ContainerSpanSecurityTwo>
          <ContainerIconSecurity>
            <AiOutlineLink size={90} color="white" />
          </ContainerIconSecurity>
        </ContainerSecurityTwo>
      </ContainerGeneralSecurity>

    </div>
  );
}

export default Security;