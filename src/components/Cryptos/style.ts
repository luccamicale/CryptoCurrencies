import styled from "styled-components";

export const ContainerCryptosUl = styled.ul`
  /* margin-top: 25px;
  border: 1px solid whitesmoke;
  background-color: #000814;
  margin-left: 5%;
  opacity: 0.9;
  border-radius: 6px; */
`;

export const ContainerCryptosLi = styled.li`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  padding: 10px; 
  /* border: 1px solid black; */
  height: 35px;
  color: whitesmoke;
  width: 95%;
  font-family: Raleway,sans-serif;
  border-radius: 6px;
  margin-left: 2.3%;
  border: 1 px solid #353535;
  
  h2 {
    flex: 1; 
  }

  .rank, .symbol, .name, .changePercent, .price {
    flex: 1; 
    margin-right: 10px; 
  }

  .price {
    margin-right: 0; 
  }

  &:hover {
    background-color: #bcb8b1;
    color: gray;
  }

  /* Estilo para filas pares */
  &:nth-child(even) {
    background-color: #252422;
    background: linear-gradient(193.68deg, rgb(27, 28, 34) 0.68%, rgb(0, 0, 0) 100.48%);
  }

  &:nth-child(odd) {
    background-color: #353535;
    background: linear-gradient(193.68deg, rgb(47, 48, 54) 0.68%, rgb(0, 0, 0) 100.48%);
    
  }
`;

export const ContainerTitleCrypto = styled.h2`
  text-align: left;
  color: #c77dff;
  margin-top: 170px;
  font-size: 30px;
  font-family: Raleway,sans-serif;
  margin-left: 5%;
`;

export const ContainerButtonFilter = styled.div`
  gap: 20px;
  margin-left: 5%;
`;

export const ButtonFilter = styled.button`
  border: 1px solid black;
  border-radius: 16px;
  padding: 7px;
  justify-content: space-between;
  color: whitesmoke;
  margin-top: 20px;
  margin-left: 10px;
  background-color: #8a817c;
  font-family: Tajawal,sans-serif;
`;

export const ContainerInput = styled.div`
  
`;

export const ContainerMainInputButton = styled.div`
  display: flex;
  gap: 48%;
  margin-top: 50px;
`;

export const ContainerSeeMore = styled.div`
  text-align: center;
`;

export const ContainerButtonSeeMore = styled.button`
  padding: 10px;
  margin-top: 20px;
  border-radius: 16px;
  color: #240046;
`;

export const ContainerBoxCrypto = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-top: 20px;
`;

export const ContainerDivBoxes = styled.div`
  display: flex;
  flex-direction: column;
  /* background: linear-gradient(to bottom, #c77dff, #240046); */
  background: linear-gradient(193.68deg, rgb(47, 48, 54) 0.68%, rgb(0, 0, 0) 100.48%);
  width: auto;
  height: auto;
  border: 1px solid #252422;
  padding: 35px;
  /* box-shadow: 2px 2px 2px 2px; */
  opacity: 0.8;
  background-color: #353535;
  margin-top: 25px;
  border-radius: 6px;

  &:hover {
    background: linear-gradient(to bottom, #C31432, #240046);
  }
`;

export const ContainerDivCryptoChartBoxes = styled.div`
  display: flex;
`;

export const ContainerBitcoinChart = styled.div`
  width: 55%;
  margin-left: 5%;
  border-radius: 6px;
  background: linear-gradient(193.68deg, rgb(47, 48, 54) 0.68%, rgb(0, 0, 0) 100.48%);
`;

export const MainContainerBoxesCryptos = styled.div`
display: flex;
flex-direction: column;
margin-left: 5%;
`;

export const TextCryptoBox = styled.span`
  color: whitesmoke;
  font-family: Raleway,sans-serif;
  text-align: center;
`;
