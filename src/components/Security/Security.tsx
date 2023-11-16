import React from "react";
import '../../styles/styles.css'
import Navbar from "../Navbar/Navbar";
import '../Security/style.ts'
import { ContainerAButtonPlat, ContainerAButtonSecurity, ContainerButtonSecurity, ContainerDivIconTips, ContainerDivMinBox, ContainerIconCardano, ContainerIntroSecurity, ContainerIntroSpanSec, ContainerMinBoxSecurity, ContainerOneCard, ContainerSecurityOne, ContainerSecurityTwo, ContainerSpanSecurity, ContainerSpanSecurityTwo, ContainerSpanTips, ContainerSubTitleSecurity, ContainerTextRisk, ContainerTips, ContainerTitleIntroSec, ContainerTitleRisk, ContainerTitleSecurity, MainContainerRisk, MainContainerSecurity, MainContainerSubandTitle, MainContainerThread, MainContainerThreadRisk } from "../Security/style.ts";
import { MdOutlineSecurity } from 'react-icons/md';
import { CgDanger } from 'react-icons/cg';
import { AiOutlineTransaction } from 'react-icons/ai';
import { TiCloudStorage } from 'react-icons/ti';
import { MdSell } from 'react-icons/md';
import { AiOutlineLink } from 'react-icons/ai';
import { GiOpenTreasureChest } from 'react-icons/gi';
import { SiCardano } from 'react-icons/si';
import Contact from "../Contact/Contact.tsx";
import { TiTick } from "react-icons/ti";

function Security() {
  
  return (
    <div>
      <Navbar />
      <MainContainerSecurity>
        <MainContainerSubandTitle>
          <ContainerTitleSecurity>Protecting your digital treasure: security in the cryptocurrency universe</ContainerTitleSecurity>
          <ContainerSubTitleSecurity> This journey unveils strategies to fortify your assets, from encryption protocols to blockchain intricacies. Navigate the digital finance landscape with confidence and safeguard your holdings in this dynamic realm."</ContainerSubTitleSecurity>
          <ContainerAButtonSecurity href="https://www.coinbase.com/es">
            <ContainerButtonSecurity>Go to Coinbase</ContainerButtonSecurity>
          </ContainerAButtonSecurity>
        </MainContainerSubandTitle>
        <ContainerIconCardano><SiCardano size={230} color="white"/></ContainerIconCardano>
      </MainContainerSecurity>

      <ContainerMinBoxSecurity>
        <ContainerAButtonPlat href="https://www.binance.com/es-AR"><ContainerDivMinBox>Binance</ContainerDivMinBox></ContainerAButtonPlat>
        <ContainerAButtonPlat href="https://www.kraken.com/"><ContainerDivMinBox>kraken</ContainerDivMinBox></ContainerAButtonPlat>
        <ContainerAButtonPlat href="https://www.gemini.com/es-la"><ContainerDivMinBox>Gemini</ContainerDivMinBox></ContainerAButtonPlat>
      </ContainerMinBoxSecurity>
      
      <ContainerIntroSecurity>
        <ContainerIntroSpanSec>
          <ContainerTitleIntroSec>Introduction</ContainerTitleIntroSec>
          <span>Cryptocurrencies have revolutionized the financial landscape, offering decentralized and secure alternatives to traditional currencies. Powered by blockchain technology, these digital assets provide users with unprecedented control over their finances. However, as the popularity of cryptocurrencies rises, so does the importance of understanding and implementing robust security measures.
          </span>
        </ContainerIntroSpanSec>
      </ContainerIntroSecurity>
        
      <MainContainerThreadRisk>
        <MainContainerRisk>
          <ContainerTitleRisk>Risk</ContainerTitleRisk>
          <ContainerTextRisk>Phishing attacks represent one of the biggest threats in the world of cryptocurrencies. Criminals often try to trick users into revealing sensitive information, such as private keys, through fraudulent websites and emails. It is crucial to educate yourself on how to recognize these deceptive tactics and avoid falling into their traps.
          </ContainerTextRisk>
          <ContainerTextRisk>
            Maintaining a secure cryptocurrency environment means defending against malware and viruses. The importance of keeping security software up-to-date and employing robust antivirus solutions cannot be understated. These measures ensure the integrity of digital wallets and protect against potential threats that could compromise the security of digital assets.
          </ContainerTextRisk>
        </MainContainerRisk>

        <MainContainerThread>
        <ContainerTitleRisk>Threat</ContainerTitleRisk>
          <ContainerTextRisk>The massive loss of funds on an exchange can have significant consequences for both individual users and overall trust in the cryptocurrency ecosystem. Therefore, exchange security is a fundamental concern, and these platforms must implement comprehensive security measures,
          </ContainerTextRisk>
          <ContainerTextRisk>
          Private keys are essential for authenticating and authorizing transactions on the blockchain network, and any successful theft attempt could result in the complete loss of your cryptocurrencies. It is essential to adopt strong security measures, such as using up-to-date antivirus software, safe browsing practices, and carefully verifying the authenticity of online sources
          </ContainerTextRisk>
        </MainContainerThread>
      </MainContainerThreadRisk>

      <MainContainerThreadRisk>
        <MainContainerRisk>
          <ContainerTitleRisk>Secure Storage</ContainerTitleRisk>
          <ContainerTextRisk>Two-Factor Authentication (2FA): Enabling two-factor authentication adds an additional layer of security. This security measure requires users to provide two forms of identification before accessing their accounts, reducing the risk of unauthorized access.
            Cold Storage: Keep a significant portion of your cryptocurrencies offline when not in use. This is known as cold storage and helps protect against online threats such as exchange hacks.
          </ContainerTextRisk>
        </MainContainerRisk>
        
        <MainContainerThread>
        <ContainerTitleRisk>Secure in Transaction</ContainerTitleRisk>
          <ContainerTextRisk>Address Verification: Before making any transaction, carefully verify the cryptocurrency addresses. Make sure you use the correct address when sending or receiving funds, as transactions are irreversible and any errors may result in the loss of your assets.
            Use of Secure Wallets: Use secure and up-to-date cryptocurrency wallets. Avoid using unknown or unverified wallets, and download software only from trusted sources.
          </ContainerTextRisk>
        </MainContainerThread>
      </MainContainerThreadRisk>

      <ContainerTips>Tips for Trading Cryptocurrencies</ContainerTips>

      <ContainerIntroSecurity>
        <ContainerIntroSpanSec>
          <ContainerTitleIntroSec>Tips</ContainerTitleIntroSec>
          <ContainerDivIconTips>
            <TiTick size={25} />
            <ContainerSpanTips>Know the Market: Stay informed about market trends and relevant news. Events in the world of cryptocurrencies and blockchain technology can have a significant impact on prices.</ContainerSpanTips>
          </ContainerDivIconTips>
          <ContainerDivIconTips>
            <TiTick size={25} />
            <ContainerSpanTips>Beware of Emotions: Avoid making impulsive decisions based on emotions. Cryptocurrencies are known for their volatility, and impulsive decisions can lead to significant losses.</ContainerSpanTips>
          </ContainerDivIconTips>
          <ContainerDivIconTips>
            <TiTick size={25} />
            <ContainerSpanTips>Avoid FOMO (Fear of Missing Out): Don't let yourself be carried away by the fear of missing out on opportunities. Acting impulsively due to FOMO can lead to bad decisions.</ContainerSpanTips>
          </ContainerDivIconTips>
        </ContainerIntroSpanSec>
      </ContainerIntroSecurity>

      <Contact />

    </div>
  );
}

export default Security;