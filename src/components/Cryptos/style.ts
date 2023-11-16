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
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  border-radius: 6px;
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

  @media (max-width: 740px) {
    font-size: 10px;
    display: flex;
    align-items: center;
    margin-left: -4.5%;
  }
`;

export const ContainerTitleCrypto = styled.h2`
  text-align: center;
  color: #c77dff;
  margin-top: 170px;
  font-size: 34px;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  margin-left: 5%;

  @media (max-width: 740px) {
    font-size: 25px;
  }
`;

export const ContainerButtonFilter = styled.div`
  gap: 20px;
  width: 80%;

   @media (max-width: 740px) {
    display: flex;
    font-size: 10px;
    gap: 1px;
    width: 100%;
    margin-left: 10%;
   }
`;

export const ButtonFilter = styled.button`
  border: 1px solid black;
  border-radius: 16px;
  padding: 7px;
  justify-content: space-between;
  color: whitesmoke;
  margin-top: 20px;
  background-color: #8a817c;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 740px) {
    font-size: 12px;
    padding: 5px;
  }

  
`;

export const ContainerInput = styled.div`
  
`;

export const ContainerMainInputButton = styled.div`
  display: flex;
  width: 90%;
  margin-top: 50px;
  margin-left: 2.5%;
  justify-content: space-between;

  @media (max-width: 740px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    gap: 20%;
  }
`;

export const ContainerSeeMore = styled.div`
  text-align: center;
`;

export const ContainerButtonSeeMore = styled.button`
  padding: 10px;
  margin-top: 20px;
  border-radius: 16px;
  color: #240046;
  font-family: 'Poppins', sans-serif;
`;

export const ContainerBoxCrypto = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-top: -2px;
`;

export const ContainerDivBoxes = styled.div`
  display: flex;
  flex-direction: column;
  /* background: linear-gradient(to bottom, #c77dff, #240046); */
  background: linear-gradient(193.68deg, rgb(47, 48, 54) 0.68%, rgb(0, 0, 0) 100.48%);
  width: auto;
  height: auto;
  border: 1px solid #252422;
  padding: 30px;
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
  justify-content: center;
  margin-top: 55px;

  @media (max-width: 740px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerBitcoinChart = styled.div`
  width: 100%;
  display: flex;
  border-radius: 6px;
  background: linear-gradient(193.68deg, rgb(47, 48, 54) 0.68%, rgb(0, 0, 0) 100.48%);

  @media (max-width: 740px) {
    display: flex;
    
  }
`;

export const MainContainerBoxesCryptos = styled.div`
display: flex;
flex-direction: column;
margin-left: 5%;

@media (max-width: 740px) {
  margin-left: -5%;
}
`;

export const TextCryptoBox = styled.span`
  color: whitesmoke;
  font-family: Raleway,sans-serif;
  text-align: center;
`;


export const ContainerBitChart = styled.div`
  display: flex;
`;