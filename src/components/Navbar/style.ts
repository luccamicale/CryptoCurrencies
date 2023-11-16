import styled from "styled-components";

export const ContainerNavUL = styled.ul`
  display: flex;
  gap: 14%;
  justify-content: flex-end;
  list-style-type: none;
  position: absolute;
  margin-left: 67%;
  margin-top: 90px;

  @media (max-width: 740px) {
   margin-left: 24%;
  }
`;

export const ContainerUlLi = styled.li`
  color: violet;
  font-family: 'Poppins', sans-serif;
  font-size: 17px;
  border-radius: 20px;
  border: 1px solid transparent;
  padding: 5px;

  &:hover {
    background-color: white;
    color: black;
    border-radius: 20px;
    padding: 5px;
  }

  @media (max-width: 1100px) {
    display: none;
  }

  @media (max-width: 740px) {
   font-size: 10px;
   display: flex;
   margin-top: -50px;
  }
`;

export const ContainerMainNavbar = styled.div`
  display: flex;
`;