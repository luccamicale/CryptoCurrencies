import React from "react";
import phonebit from '../../imgs/phonebit.jpg'
import iconBitcoin from '../../imgs/iconBitcoin.png'
import privacidad from '../../imgs/privacidad.png'
import reembolso from '../../imgs/reembolso.png'
import { Background, Boxgeneral, ConatinerBoxIcon, ConatinerBoxText, ConatinerBoxTitle, ContactInfo, ContainerArrowDown, ContainerBoxsecure, ContainerChart, ContainerContact, ContainerHr, ContainerIconSecurePrivate, ContainerSectionOne, ContainerSectionTwo, ContainerSecureSubText, ContainerTitle, GraficoInvest, RoundedImageContainer, SecurePrivate, SecureSubText, SecureText, SmoothScrollLink, SubTitleChart, TitleChart, TitleContact, WordlBitcoin } from "./style.ts";
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
            <ConatinerBoxTitle>Invest in Crypto</ConatinerBoxTitle>
            <ConatinerBoxText>
              <ContainerIconSecurePrivate>
                <div style={{marginTop: '10px'}}><TiTick size={25} /></div>
                <p>Diversify your portfolio and build a strong financial future.</p>
              </ContainerIconSecurePrivate>
              <br/>
              <ContainerIconSecurePrivate>
                <div style={{marginTop: '10px'}}><TiTick size={25} /></div>
                <p>Discover investment opportunities in the world of cryptocurrencies.</p>
              </ContainerIconSecurePrivate>
              <br/>
              <ContainerIconSecurePrivate>
                <div style={{marginTop: '10px'}}><TiTick size={25} /></div>
                <p>Potential for growth and asset diversification.</p>
              </ContainerIconSecurePrivate>
            </ConatinerBoxText>
          </Boxgeneral>
          <Boxgeneral>
            <ConatinerBoxIcon><img src={reembolso} alt="Bitcoin" style={{width: '75px'}}></img></ConatinerBoxIcon>
            <ConatinerBoxTitle>Fast Transaction</ConatinerBoxTitle>
            <ConatinerBoxText>
              <ContainerIconSecurePrivate>
                <div style={{marginTop: '10px'}}><TiTick size={25} /></div>
                <p>Swift and efficient real-time transactions.</p>
              </ContainerIconSecurePrivate>
              <br/>
              <ContainerIconSecurePrivate>
                <div style={{marginTop: '10px'}}><TiTick size={25} /></div>
                <p>Save time and money with the benefits of blockchain technology.</p>
              </ContainerIconSecurePrivate>
              <br/>
              <ContainerIconSecurePrivate>
                <div style={{marginTop: '10px'}}><TiTick size={25} /></div>
                <p>Experience the speed of transactions without intermediaries.</p>
              </ContainerIconSecurePrivate>
            </ConatinerBoxText>
          </Boxgeneral>
          <Boxgeneral>
            <ConatinerBoxIcon><img src={privacidad} alt="Bitcoin" style={{width: '60px'}}></img></ConatinerBoxIcon>
            <ConatinerBoxTitle>Secure</ConatinerBoxTitle>
            <ConatinerBoxText>
            <ContainerIconSecurePrivate>
                <div style={{marginTop: '10px'}}><TiTick size={25} /></div>
                <p>Maximum security to safeguard your digital assets</p>
              </ContainerIconSecurePrivate>
              <br/>
              <ContainerIconSecurePrivate>
                <div style={{marginTop: '10px'}}><TiTick size={25} /></div>
                <p>Take control of your funds with secure wallets and 2FA</p>
              </ContainerIconSecurePrivate>
              <br/>
              <ContainerIconSecurePrivate>
                <div style={{marginTop: '10px'}}><TiTick size={25} /></div>
                <p>Secure transactions on the blockchain with privacy and transparency.</p>
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