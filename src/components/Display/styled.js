import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: #e3e3e3;
  height: 30vh;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    font-size: 28px;
    font-weight: 500;
  }
`;

export const ButtonStyled = styled.button`
  background-color: #c5c5c5;
  border: none;
  width: 130px;
  height: 30px;

  &:hover {
    border: 2px solid #c0c0c0;
    background-color: transparent;
  }
  &:active {
    background-color: #c5c5c5;
  }
`;

export const Caixinha = styled.div`
  height: ${(props) => (props.altura ? props.altura : "100%")};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
