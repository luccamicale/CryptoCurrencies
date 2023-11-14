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
font-family: 'Chakra Petch', sans-serif;
position: absolute;
margin-left: 10%;
margin-top: 80px;
color: whitesmoke;
font-weight: 100;
width: auto;
text-decoration: none;


/* background: linear-gradient(to bottom, #C31432, #240046);
border-radius: 16px; */
`;

export const ContainerArrowDown = styled.a`
  margin-left: 50%;
  margin-top: 43%;
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
`;

// Agrega una transición suave al desplazamiento
export const SmoothScrollLink = styled.a`
  
`;

export const SecurePrivate = styled.div`
  position: absolute;
  margin: 50%;
  width: 300px;
  margin-top: 58%;
  margin-left: 42%;
`;

export const SecureText = styled.p`
  font-size: 35px;
  color: whitesmoke;
  font-family: 'Poppins', sans-serif;
`;

export const ContainerBoxsecure = styled.div`
  display: flex;
`;

export const Boxgeneral = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000814;
  /* background: linear-gradient(to bottom, #240046, #C31432);  */
  width: 300px;
  height: auto;
  border: 1px solid violet;
  border-radius: 20px;
  padding: 35px;
  margin-top: 72%;
  margin-left: 7%;
  box-shadow: 2px 2px 2px 2px violet;
  /* opacity: 0.6; */

  /* &:hover {
    background: linear-gradient(to bottom, #C31432, #240046);
  } */
`;

export const ConatinerBoxIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -75px;
  margin-bottom: 20px;
`;

export const ConatinerBoxTitle = styled.span`
  color: whitesmoke;
  font-size: 23px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
`;

export const ConatinerBoxText = styled.span`
  color: whitesmoke;
  font-size: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const GraficoInvest = styled.img`
  border-radius: 46px;
  margin-left: 55%;
  margin-top: 100px;
`;

export const ContainerChart = styled.div`
  margin-top: 150px;
`;

export const TitleChart = styled.h2`
  margin-bottom: 50px;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-weight: 300;
  color: #80ffdb;
  font-size: 30px;
`;

export const SubTitleChart = styled.h3`
  color: whitesmoke;
  margin-bottom: 50px;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-weight: 300;
  font-size: 18px;
  margin-top: 40px;
`;

export const ContainerHr = styled.hr`
  width: 85%;
  font-weight: 100;
`;

export const ContainerSubChart = styled.div`
  margin-left: 25%;
`;

export const ContainerContact = styled.div`
  margin-top: 100px;
  height: auto;
  width: 105.2%;
  display: flex;
`;

export const ContainerSectionOne = styled.div`
background: linear-gradient(193.68deg, rgb(47, 48, 54) 0.68%, rgb(0, 0, 0) 100%);
width: 40%;
display: flex;
flex-direction: column;
align-items: center;
/* border-radius: 10px 10px 10px 10px; */
`;

export const ContainerSectionTwo = styled.div`
  background-color: #f2e9e4;
  width: 60%;
  /* border-radius: 10px 10px 10px 10px; */
`;

export const TitleContact = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 27px;
  text-align: left;
  padding: 7%;
  color: #ffe5ec;
`;

export const Input = styled.input`
  
`;

export const ContactInfo = styled.span`
  color: whitesmoke;
  font-size: 18px;
  margin-top: 25px;
  font-family: 'Poppins', sans-serif;
  font-weight: 100;
  /* margin-left: 10%; */
`;

export const ContainerIconSecurePrivate = styled.div`
  display: flex;
`;

export const ContainerDivTick = styled.div`
  
`;

export const ContainerTextTick = styled.div`

`;
