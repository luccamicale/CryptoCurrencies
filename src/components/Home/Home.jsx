import React from "react";
import phonebit from '../../imgs/phonebit.jpg'
import circuloBt from '../../imgs/circuloBT.jpeg'
import { Background, ContainerArrowDown, ContainerTitle, RoundedImageContainer, WordlBitcoin } from "./style.ts";
import '../../styles/styles.css'
import { FaArrowCircleDown } from 'react-icons/fa';


function Home() {
  return (
    <div className="App">
      <div>
        <Background src={phonebit} alt="Back"/>
        <ContainerTitle>CRYPTO SECURITY</ContainerTitle>
        <ContainerArrowDown>
          <FaArrowCircleDown size={35} color="white"/>
        </ContainerArrowDown>
        {/* <RoundedImageContainer>
          <WordlBitcoin src={circuloBt} alt="Imagen Redonda" />
      </RoundedImageContainer> */}
      </div>
    </div>
  );
}

export default Home;
