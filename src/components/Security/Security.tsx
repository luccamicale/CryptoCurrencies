import React from "react";
import '../../styles/styles.css'
import Navbar from "../Navbar/Navbar";
import '../Security/style.ts'
import { ContainerButtonSecurity, ContainerDivMinBox, ContainerGeneralSecurity, ContainerIconSecurity, ContainerIntroSecurity, ContainerIntroSpanSec, ContainerMinBoxSecurity, ContainerOneCard, ContainerSecurityOne, ContainerSecurityTwo, ContainerSpanSecurity, ContainerSpanSecurityTwo, ContainerSubTitleSecurity, ContainerTextRisk, ContainerTips, ContainerTitleIntroSec, ContainerTitleRisk, ContainerTitleSecurity, MainContainerRisk, MainContainerSubandTitle, MainContainerThread, MainContainerThreadRisk } from "../Security/style.ts";
import { MdOutlineSecurity } from 'react-icons/md';
import { CgDanger } from 'react-icons/cg';
import { AiOutlineTransaction } from 'react-icons/ai';
import { TiCloudStorage } from 'react-icons/ti';
import { MdSell } from 'react-icons/md';
import { AiOutlineLink } from 'react-icons/ai';
import { GiOpenTreasureChest } from 'react-icons/gi';
import { SiCardano } from 'react-icons/si';
import Contact from "../Contact/Contact.tsx";

function Security() {
  
  return (
    <div>
      <Navbar />
      <div style={{display: 'flex', flexDirection: 'row', gap: '50px', marginTop: '100px'}}>
        <MainContainerSubandTitle>
          <ContainerTitleSecurity>Protecting your digital treasure: security in the cryptocurrency universe</ContainerTitleSecurity>
          <ContainerSubTitleSecurity> This journey unveils strategies to fortify your assets, from encryption protocols to blockchain intricacies. Navigate the digital finance landscape with confidence and safeguard your holdings in this dynamic realm."</ContainerSubTitleSecurity>
          <ContainerButtonSecurity>Go to Coinbase</ContainerButtonSecurity>
        </MainContainerSubandTitle>
        <div style={{display: ' flex', marginRight: '200px', marginTop: '110px'}}><SiCardano size={230} color="#480ca8"/></div>
      </div>

      <ContainerMinBoxSecurity>
        <ContainerDivMinBox>Binance</ContainerDivMinBox>
        <ContainerDivMinBox>kraken</ContainerDivMinBox>
        <ContainerDivMinBox>Gemini</ContainerDivMinBox>
      </ContainerMinBoxSecurity>
      
      <ContainerIntroSecurity>
        <ContainerIntroSpanSec>
          <ContainerTitleIntroSec>Introduction</ContainerTitleIntroSec>
          <span>"Explore the intricate world of cryptocurrency security in 'Protecting your digital treasure.' This in-depth journey unveils strategies to fortify your assets, 
            from encryption protocols to blockchain intricacies.
            Navigate the digital finance landscape with confidence and safeguard your holdings in this dynamic realm."
          </span>
        </ContainerIntroSpanSec>
      </ContainerIntroSecurity>
        
      <MainContainerThreadRisk>
        <MainContainerRisk>
          <ContainerTitleRisk>Risk</ContainerTitleRisk>
          <ContainerTextRisk>This journey unveils strategies to fortify your assets, from encryption protocols to
            blockchain intricacies. Navigate the digital finance 
            andscape with confidence and safeguard your holdings in this dynamic realm."
          </ContainerTextRisk>
        </MainContainerRisk>

        <MainContainerThread>
        <ContainerTitleRisk>Thread</ContainerTitleRisk>
          <ContainerTextRisk>This journey unveils strategies to fortify your assets, from encryption protocols to
            blockchain intricacies. Navigate the digital finance 
            andscape with confidence and safeguard your holdings in this dynamic realm."
          </ContainerTextRisk>
        </MainContainerThread>
      </MainContainerThreadRisk>

      <MainContainerThreadRisk>
        <MainContainerRisk>
          <ContainerTitleRisk>Risk</ContainerTitleRisk>
          <ContainerTextRisk>This journey unveils strategies to fortify your assets, from encryption protocols to
            blockchain intricacies. Navigate the digital finance 
            andscape with confidence and safeguard your holdings in this dynamic realm."
          </ContainerTextRisk>
        </MainContainerRisk>
        
        <MainContainerThread>
        <ContainerTitleRisk>Thread</ContainerTitleRisk>
          <ContainerTextRisk>This journey unveils strategies to fortify your assets, from encryption protocols to
            blockchain intricacies. Navigate the digital finance 
            andscape with confidence and safeguard your holdings in this dynamic realm."
          </ContainerTextRisk>
        </MainContainerThread>
      </MainContainerThreadRisk>

      <ContainerTips>Tips for Trading Cryptocurrencies</ContainerTips>

      <ContainerIntroSecurity>
        <ContainerIntroSpanSec>
          <ContainerTitleIntroSec>Tips</ContainerTitleIntroSec>
          <span>"Explore the intricate world of cryptocurrency security in 'Protecting your digital treasure.' This in-depth journey unveils strategies to fortify your assets, 
            from encryption protocols to blockchain intricacies.
            Navigate the digital finance landscape with confidence and safeguard your holdings in this dynamic realm."
          </span>
        </ContainerIntroSpanSec>
      </ContainerIntroSecurity>

      <Contact />

    </div>
  );
}

export default Security;