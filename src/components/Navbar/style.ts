import styled from "styled-components";

export const MainSection = styled.div`
  
`;

export const ContainerNav = styled.div`
  display: flex;
  position: absolute;
  width: 95%;
  margin-top: 60px;
`;

export const ContainerNavUL = styled.ul`
  display: flex;
  gap: 75px;
  margin-left: 50%;
  list-style-type: none;
  color: white;
  font-family: 'Roboto', sans-serif;
`;

export const ContainerUlLi = styled.li`
&:hover {
    background-color: white;
    color: black;
    width: auto;
    border-radius: 16px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;