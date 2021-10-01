import styled from "styled-components";

export const CaixaDeEntrada = styled.section`
  background-color: lightgreen;
  height: 35vh;
  width: 100%;
  overflow-x: auto;
`;

export const ListaUL = styled.ul`
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const ItemLista = styled.li`
  background-color: lightseagreen;
  height: 50%;
  min-width: ${(props) => (props.largura ? props.largura : "250px")};
  margin: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const CaixaFlexivel = styled.div`
  height: 100%;
  width: 100%;

  overflow-x: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
`;
