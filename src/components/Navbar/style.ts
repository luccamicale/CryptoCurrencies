import styled from "styled-components";

export const ContainerNavUL = styled.ul`
  display: flex;
  gap: 14%;
  justify-content: flex-end;
  list-style-type: none;
  position: absolute;
  margin-left: 67%;
  margin-top: 95px;
`;

export const ContainerUlLi = styled.li`
  color: violet;
  font-family: 'Poppins', sans-serif;
  font-size: 17px;

  &:hover {
    background-color: white;
    color: black;
    border-radius: 16px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const ContainerMainNavbar = styled.div`
  display: flex;
`;