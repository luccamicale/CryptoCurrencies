import styled from "styled-components";

export const ContainerNavUL = styled.ul`
  display: flex;
  gap: 19%;
  justify-content: flex-end;
  list-style-type: none;
  position: absolute;
  margin-left: 55%;
  margin-top: 75px;
`;

export const ContainerUlLi = styled.li`
  color: violet;

  &:hover {
    background-color: white;
    color: black;
    border-radius: 16px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
