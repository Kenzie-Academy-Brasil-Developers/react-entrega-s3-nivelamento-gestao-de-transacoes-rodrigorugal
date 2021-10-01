import styled from "styled-components";

export const Formulario = styled.form`
  background-color: transparent;
  height: ${(props) => (props.altura ? props.altura : "100%")};
  width: ${(props) => (props.largura ? props.largura : "250px")};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const DivInput = styled.div`
  width: 80%;
  height: 30px;
  background-color: aliceblue;
  border: 1.5px solid black;

  &:hover {
    border-color: brown;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    height: 100%;
    width: 50%;
    border: none;
    background-color: transparent;
    font-size: 18px;
  }
  input:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;

export const Button = styled.button`
  width: 80%;
  height: ${(props) => (props.altura ? props.altura : "30px")};
  border: 1.5px solid #0a0a0a;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #0a0a0a22;
  }
`;
