import React from "react";
import phonebit from '../../imgs/phonebit.jpg'
import iconBitcoin from '../../imgs/iconBitcoin.png'
import privacidad from '../../imgs/privacidad.png'
import reembolso from '../../imgs/reembolso.png'
import { Background, Boxgeneral, ConatinerBoxIcon, ConatinerBoxText, ConatinerBoxTitle, ContactInfo, ContainerArrowDown, ContainerBoxsecure, ContainerChart, ContainerContact, ContainerDivTick, ContainerHr, ContainerIconSecurePrivate, ContainerSectionOne, ContainerSectionTwo, ContainerSecureSubText, ContainerTextTick, ContainerTitle, GraficoInvest, RoundedImageContainer, SecurePrivate, SecureSubText, SecureText, SmoothScrollLink, SubTitleChart, TitleChart, TitleContact, WordlBitcoin } from "./style.ts";
import '../../styles/styles.css'
import { FaArrowCircleDown } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";
import Navbar from "../Navbar/Navbar";
import BarChart from "../../Graphics/BarChart";
import Contact from "../Contact/Contact.tsx";


function Home() {

  
  const securityPercentages = [85, 68, 46, 30, 20];

  const handleSmoothScroll = (event) => {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 800; // Ajusta este valor según sea necesario
      window.scrollTo({
        top: targetElement.offsetTop + offset, // Cambié a suma en lugar de resta
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="App">
      <div>
        <Background src={phonebit} alt="Back"/>
        <Navbar />
        
        <SmoothScrollLink href="#Secure"onClick={handleSmoothScroll}>
          <ContainerArrowDown>
            <FaArrowCircleDown size={35} color="white"/>
          </ContainerArrowDown>
        </SmoothScrollLink>
        <SecurePrivate>
          <SecureText id="Secure">Secure & Private </SecureText>
        </SecurePrivate>
        
        <ContainerBoxsecure>
          <Boxgeneral>
            <ConatinerBoxIcon><img src={iconBitcoin} alt="Bitcoin" style={{width: '65px'}}></img></ConatinerBoxIcon>
            <div style={{marginTop: '10px'}}><ConatinerBoxTitle>Invest in Crypto</ConatinerBoxTitle></div>
            <ConatinerBoxText>
              <ContainerIconSecurePrivate>
                <ContainerDivTick><TiTick size={25} /></ContainerDivTick>
                <ContainerTextTick>Diversify your portfolio and build a strong financial future.</ContainerTextTick>
              </ContainerIconSecurePrivate>
              <br/>
              <ContainerIconSecurePrivate>
                <ContainerDivTick><TiTick size={25} /></ContainerDivTick>
                <ContainerTextTick>Discover investment opportunities in the world of cryptocurrencies.</ContainerTextTick>
              </ContainerIconSecurePrivate>
              <br/>
              <ContainerIconSecurePrivate>
                <ContainerDivTick><TiTick size={25} /></ContainerDivTick>
                <ContainerTextTick>Potential for growth and asset diversification.</ContainerTextTick>
              </ContainerIconSecurePrivate>
            </ConatinerBoxText>
          </Boxgeneral>
          <Boxgeneral>
            <ConatinerBoxIcon><img src={reembolso} alt="Bitcoin" style={{width: '75px'}}></img></ConatinerBoxIcon>
            <div style={{marginTop: '2px', textAlign: 'center'}}><ConatinerBoxTitle>Fast Transaction</ConatinerBoxTitle></div>
            <ConatinerBoxText>
              <ContainerIconSecurePrivate>
                <ContainerDivTick><TiTick size={25} /></ContainerDivTick>
                <ContainerTextTick>Swift and efficient real-time transactions.</ContainerTextTick>
              </ContainerIconSecurePrivate>
              <br/>
              <ContainerIconSecurePrivate>
                <ContainerDivTick><TiTick size={25} /></ContainerDivTick>
                <ContainerTextTick>Save time and money with the benefits of blockchain technology.</ContainerTextTick>
              </ContainerIconSecurePrivate>
              <br/>
              <ContainerIconSecurePrivate>
                <ContainerDivTick><TiTick size={25} /></ContainerDivTick>
                <ContainerTextTick>Experience the speed of transactions without intermediaries.</ContainerTextTick>
              </ContainerIconSecurePrivate>
            </ConatinerBoxText>
          </Boxgeneral>
          <Boxgeneral>
            <ConatinerBoxIcon><img src={privacidad} alt="Bitcoin" style={{width: '60px'}}></img></ConatinerBoxIcon>
            <div style={{marginTop: '12px', textAlign: 'center'}}><ConatinerBoxTitle>Secure</ConatinerBoxTitle></div>
            <ConatinerBoxText>
            <ContainerIconSecurePrivate>
                <ContainerDivTick><TiTick size={25} /></ContainerDivTick>
                <ContainerTextTick>Maximum security to safeguard your digital assets</ContainerTextTick>
              </ContainerIconSecurePrivate>
              <br/>
              <ContainerIconSecurePrivate>
                <ContainerDivTick><TiTick size={25} /></ContainerDivTick>
                <ContainerTextTick>Take control of your funds with secure wallets and 2FA</ContainerTextTick>
              </ContainerIconSecurePrivate>
              <br/>
              <ContainerIconSecurePrivate>
                <ContainerDivTick><TiTick size={25} /></ContainerDivTick>
                <ContainerTextTick>Secure transactions on the blockchain with privacy and transparency.</ContainerTextTick>
              </ContainerIconSecurePrivate>
            </ConatinerBoxText>
          </Boxgeneral>
        </ContainerBoxsecure>

        
        <ContainerChart>
          <TitleChart>Cryptocurrency Exchange Security Index: Assessment of Leading Platforms</TitleChart>
          <ContainerHr/>
          <SubTitleChart>An In-Depth Analysis of Cryptocurrency Exchange Security: Navigating the Landscape of Leading Platforms for Informed Investment Decisions.</SubTitleChart>
          <BarChart data={securityPercentages} />
          {/* <RoundedImageContainer>
            <WordlBitcoin src={circuloBt} alt="Imagen Redonda" />
          </RoundedImageContainer> */}
        </ContainerChart>

        <Contact />
        
      </div>
    </div>
  );
}

export default Home;