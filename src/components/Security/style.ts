import styled from "styled-components";

export const ContainerGeneralSecurity = styled.div`
display: flex;
flex-direction: column;
margin-top: 200px;
`;

export const ContainerSecurityOne = styled.div`
  width: 80%;
  height: 100px;
  border-radius: 156px;
  padding: 50px;
  margin-top: 30px;
  margin-left: 10%;
  border: 1px solid white; /* Establece el borde como transparente para usar gradientes */


  /* Gradiente para el desvanecimiento del lado derecho */
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 1%, black 95%, transparent 100%);
  mask-image: linear-gradient(to right, transparent 1%, black 95%, transparent 100%);

  /* Sombra para el resaltado del borde */
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
`;

export const ContainerSecurityTwo = styled.div`
  width: 80%;
  height: 100px;
  border-radius: 156px;
  padding: 50px;
  margin-top: 30px;
  margin-left: 10%;
  border: 1px solid white; 

  /* Gradiente para el desvanecimiento del lado derecho */
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: linear-gradient(to left, transparent 1%, black 95%, transparent 100%);
  mask-image: linear-gradient(to left, transparent 1%, black 95%, transparent 100%);

  /* Sombra para el resaltado del borde */
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
`;