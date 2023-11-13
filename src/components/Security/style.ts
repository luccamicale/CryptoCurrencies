import styled from "styled-components";

export const ContainerGeneralSecurity = styled.div`
display: flex;
flex-direction: column;
margin-top: 70px;
`;

export const ContainerSecurityOne = styled.div`
  justify-content: right;
  gap: 80px;
  display: flex;
  width: 80%;
  height: auto;
  border-radius: 156px;
  padding: 50px;
  margin-top: 0px;
  margin-left: 10%;
  border: 1px solid white; /* Establece el borde como transparente para usar gradientes */
  background: linear-gradient(193.68deg, rgb(7, 8, 4) 0.68%, rgb(0, 0, 0) 100.48%);

  /* Gradiente para el desvanecimiento del lado derecho */

  -webkit-mask-image: linear-gradient(to right, transparent 1%, black 95%, transparent 100%);
  mask-image: linear-gradient(to right, transparent 1%, black 95%, transparent 100%);

  /* Sombra para el resaltado del borde */
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 2);
`;

export const ContainerSecurityTwo = styled.div`
justify-content: left;
  gap: 80px;
  display: flex;
  width: 80%;
  height: auto;
  border-radius: 156px;
  padding: 50px;
  margin-top: 30px;
  margin-left: 10%;
  border: 1px solid white;
  background: linear-gradient(193.68deg, rgb(47, 48, 54) 0.68%, rgb(0, 0, 0) 100.48%);

  /* Gradiente para el desvanecimiento del lado izquierdo */

  -webkit-mask-image: linear-gradient(to left, transparent 1%, black 95%, transparent 100%);
  mask-image: linear-gradient(to left, transparent 1%, black 95%, transparent 100%);

  /* Sombra para el resaltado del borde */
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 2);
`;

export const ContainerTitleSecurity = styled.h2`
  text-align: center;
  font-family: Raleway,sans-serif;
  color: #c77dff;
  margin-top: 190px;
`;

export const ContainerIconSecurity = styled.div`
  
`;

export const ContainerSpanSecurity = styled.span`
  color: white;
  text-align: right;
  font-size: 20px;
  font-family: Raleway,sans-serif;
  width: 70%;
`;

export const ContainerIconSecurityTwo = styled.div`
  
`;

export const ContainerSpanSecurityTwo = styled.span`
  color: white;
  text-align: left;
  font-size: 20px;
  font-family: Raleway,sans-serif;
  width: 70%;
`;


export const ContainerOneCard = styled.div`
  margin-top: 20px;
`;