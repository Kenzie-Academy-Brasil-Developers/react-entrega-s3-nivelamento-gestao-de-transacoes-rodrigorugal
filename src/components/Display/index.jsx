import Cadastro from "../Cadastro";
import { ButtonStyled, Caixinha, HeaderStyled } from "./styled";

const Tela = ({ handlerTroca, setTransactions, transactions }) => {
  /*transactions={transactions}
        Deve retornar um header que contem um titulo Display e um botão 
    */
  return (
    <HeaderStyled>
      <Caixinha>
        <h1>Display</h1>
        <ButtonStyled onClick={handlerTroca}>Trocar</ButtonStyled>
      </Caixinha>
      <Cadastro setTransactions={setTransactions} transactions={transactions} />
    </HeaderStyled>
  );
};

export default Tela;
