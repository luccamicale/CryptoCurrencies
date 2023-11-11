import styled from "styled-components";

export const ContainerCryptosUl = styled.ul`
  margin-top: 65px;
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