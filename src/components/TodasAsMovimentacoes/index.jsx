import { CaixaFlexivel, ItemLista, ListaUL } from "../Entrada/styled";
import { CaixaTodaMovimentacao } from "./styled";
const TodaMovimentacao = ({ transactions }) => {
  return (
    <CaixaTodaMovimentacao>
      <ListaUL>
        <h1>Todas as movimentações</h1>
        <CaixaFlexivel>
          {transactions.map((item) => (
            <ItemLista largura={"130px"}>
              <h1>{item.name}</h1>
              <p>R${item.price}</p>
              <p>Qnt: {item.quantity}un</p>
            </ItemLista>
          ))}
        </CaixaFlexivel>
      </ListaUL>
    </CaixaTodaMovimentacao>
  );
};
export default TodaMovimentacao;
