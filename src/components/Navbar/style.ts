import styled from "styled-components";

export const MainSection = styled.div`
  
`;

export const ContainerNav = styled.div`
  display: flex;
  width: 95%;
  margin-top: 60px;
  position: absolute;
`;

export const ContainerNavUL = styled.ul`
  display: flex;
  gap: 70px;
  margin-left: 50%;
  list-style-type: none;
  color: white;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
`;

export const ContainerUlLi = styled.li`
  color: violet;

&:hover {
    background-color: white;
    color: black;
    width: auto;
    border-radius: 16px;
    padding-left: 10px;
    padding-right: 10px;
    
  }
`;