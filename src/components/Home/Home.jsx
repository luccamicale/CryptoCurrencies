import React from "react";
import phonebit from '../../imgs/phonebit.jpg'
import iconBitcoin from '../../imgs/iconBitcoin.png'
import iconintercambio from '../../imgs/iconintercambio.png'
import privacidad from '../../imgs/privacidad.png'
import reembolso from '../../imgs/reembolso.png'
import graficoinvest from '../../imgs/graficoinvest.jpeg'
import { Background, Boxgeneral, ConatinerBoxIcon, ConatinerBoxText, ConatinerBoxTitle, ContainerArrowDown, ContainerBoxsecure, ContainerSecureSubText, ContainerTitle, GraficoInvest, RoundedImageContainer, SecurePrivate, SecureSubText, SecureText, WordlBitcoin } from "./style.ts";
import '../../styles/styles.css'
import { FaArrowCircleDown } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";
import Navbar from "../Navbar/Navbar";


function Home() {
  return (
    <div className="App">
      <div>
        <Background src={phonebit} alt="Back"/>
        <Navbar />
        <ContainerTitle>CRYPTO SECURITY</ContainerTitle>
        <ContainerArrowDown>
          <FaArrowCircleDown size={35} color="white"/>
        </ContainerArrowDown>
        <SecurePrivate>
          <SecureText>Secure & Private </SecureText>
          
        </SecurePrivate>
        
        <ContainerBoxsecure>
          <Boxgeneral>
            <ConatinerBoxIcon><img src={iconBitcoin} alt="Bitcoin" style={{width: '65px'}}></img></ConatinerBoxIcon>
            <ConatinerBoxTitle>Invest in Crypto</ConatinerBoxTitle>
            <ConatinerBoxText>
              <div><TiTick size={25} />Diversify your portfolio and build a strong financial future.</div>
              <br/>
              <div><TiTick size={25} />Discover investment opportunities in the world of cryptocurrencies.</div>
              <br/>
              <div><TiTick size={25} />Potential for growth and asset diversification.</div>
            </ConatinerBoxText>
          </Boxgeneral>
          <Boxgeneral>
            <ConatinerBoxIcon><img src={reembolso} alt="Bitcoin" style={{width: '75px'}}></img></ConatinerBoxIcon>
            <ConatinerBoxTitle>Fast Transaction</ConatinerBoxTitle>
            <ConatinerBoxText>
              <div><TiTick size={25} />Swift and efficient real-time transactions.</div>
              <br/>
              <div><TiTick size={25} />Save time and money with the benefits of blockchain technology.</div>
              <br/>
              <div><TiTick size={25} />Experience the speed of transactions without intermediaries.</div>
            </ConatinerBoxText>
          </Boxgeneral>
          <Boxgeneral>
            <ConatinerBoxIcon><img src={privacidad} alt="Bitcoin" style={{width: '60px'}}></img></ConatinerBoxIcon>
            <ConatinerBoxTitle>Secure</ConatinerBoxTitle>
            <ConatinerBoxText>
              <div><TiTick size={25} />Maximum security to safeguard your digital assets.</div>
              <br/>
              <div><TiTick size={25} />Take control of your funds with secure wallets and 2FA</div>
              <br/>
              <div><TiTick size={25} />Secure transactions on the blockchain with privacy and transparency.</div>
            </ConatinerBoxText>
          </Boxgeneral>
        </ContainerBoxsecure>

        
        
        {/* <RoundedImageContainer>
          <WordlBitcoin src={circuloBt} alt="Imagen Redonda" />
      </RoundedImageContainer> */}
      </div>
    </div>
  );
}

export default Home;
