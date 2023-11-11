import React from "react";
import phonebit from '../../imgs/phonebit.jpg'
import iconBitcoin from '../../imgs/iconBitcoin.png'
import circuloBt from '../../imgs/circuloBT.jpeg'
import privacidad from '../../imgs/privacidad.png'
import reembolso from '../../imgs/reembolso.png'
import graficoinvest from '../../imgs/graficoinvest.jpeg'
import { Background, Boxgeneral, ConatinerBoxIcon, ConatinerBoxText, ConatinerBoxTitle, ContactInfo, ContainerArrowDown, ContainerBoxsecure, ContainerChart, ContainerContact, ContainerHr, ContainerSectionOne, ContainerSectionTwo, ContainerSecureSubText, ContainerTitle, GraficoInvest, RoundedImageContainer, SecurePrivate, SecureSubText, SecureText, SmoothScrollLink, SubTitleChart, TitleChart, TitleContact, WordlBitcoin } from "./style.ts";
import '../../styles/styles.css'
import { FaArrowCircleDown } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";
import Navbar from "../Navbar/Navbar";
import BarChart from "../../Graphics/BarChart";


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
        <ContainerTitle>CRYPTO SECURITY</ContainerTitle>
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

        
        <ContainerChart>
          <TitleChart>Cryptocurrency Exchange Security Index: Assessment of Leading Platforms</TitleChart>
          <ContainerHr/>
          <SubTitleChart>An In-Depth Analysis of Cryptocurrency Exchange Security: Navigating the Landscape of Leading Platforms for Informed Investment Decisions.</SubTitleChart>
          <BarChart data={securityPercentages} />
          {/* <RoundedImageContainer>
            <WordlBitcoin src={circuloBt} alt="Imagen Redonda" />
          </RoundedImageContainer> */}
        </ContainerChart>

        <ContainerContact>
          <ContainerSectionOne>
            <TitleContact>HOW TO CONTACT US</TitleContact>
            <ContactInfo>Crypto Security</ContactInfo>
            <ContactInfo>+54 9 11587369</ContactInfo>
            <ContactInfo>Buenos Aires, Argentina</ContactInfo>
          </ContainerSectionOne>
          <ContainerSectionTwo>
              <form action="https://formspree.io/f/xknegzyn" method="POST" id="form">
                  <ul className="ul-list">
                    <li tabindex="0">
                        <label for="name"></label>
                        <input type="text" id="name" name="user_name" required placeholder="Crypto Security" maxlength="30"/>
                        <hr className="line-1"></hr>
                    </li>
                    <li tabindex="0">
                        <label for="mail"></label>
                        <input type="email" id="mail" name="user_email" required placeholder="cryptoSecurity@gmail.com"/>
                        <hr className="line-1"></hr>
                    </li>
                    <li tabindex="0">
                        <label for="mail"></label>
                        <input type="email" id="mail" name="user_email"  placeholder="Write your message here"/>
                        <hr className="line-1"></hr>
                    </li>
                   </ul>
                    <button className="but-get" tabindex="0" type="submit" id="sub">Get in touch</button>
                    <small id="mistake"></small>
              </form>
          </ContainerSectionTwo>
        </ContainerContact>
        
      </div>
    </div>
  );
}

export default Home;