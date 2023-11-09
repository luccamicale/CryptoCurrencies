import styled from "styled-components";

export const Background = styled.img`
 width: 90%;
  height: auto;
  margin-top: -10px;
  margin-left: -10px;
  position: absolute;
  border-radius: 106px;
  padding: 3%;
  margin-left: 2%;
`;

export const RoundedImageContainer = styled.div`
  width: 300px; /* Ancho deseado */
  height: 300px; /* Alto deseado */
  overflow: hidden; /* Oculta cualquier parte de la imagen que exceda las dimensiones del contenedor */
  border-radius: 50%; /* Aplicamos un borde redondo al 50% */
  position: absolute;
  margin-left: 10%;
`;

// Definimos un componente estilizado para la imagen
export const  WordlBitcoin= styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContainerTitle = styled.h2`
font-size: 35px;
font-family: 'Lora', serif;
position: absolute;
margin-left: 10%;
margin-top: 60px;
color: whitesmoke;
font-weight: 100;
`;

export const ContainerArrowDown = styled.div`
  margin-left: 50%;
  margin-top: 650px;
  position: absolute;
`;