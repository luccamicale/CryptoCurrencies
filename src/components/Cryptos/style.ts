import styled from "styled-components";

export const ContainerCryptosUl = styled.ul`
  margin-top: 25px;
  border: 1px solid whitesmoke;
  background-color: #9d4edd;
  margin-left: 5%;
  opacity: 0.8;
  border-radius: 6px;
`;

export const ContainerCryptosLi = styled.li`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  padding: 10px; 
  border: 1px solid #9a8c98;
  height: 35px;
  color: whitesmoke;
  width: 95%;
  font-family: Raleway,sans-serif;
  
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
    background-color: #ced4da;
    color: black;
  }

  /* Estilo para filas pares */
  &:nth-child(even) {
    background-color: #c77dff;
  }
`;

export const ContainerTitleCrypto = styled.h2`
  text-align: center;
  color: #c77dff;
  margin-top: 200px;
  font-size: 30px;
  font-family: Raleway,sans-serif;
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
  color: black;
  margin-top: 20px;
  margin-left: 10px;
`;

export const ContainerInput = styled.div`
  
`;

export const ContainerMainInputButton = styled.div`
  display: flex;
  gap: 42%;
  margin-top: 50px;
`;