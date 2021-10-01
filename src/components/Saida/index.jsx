import { CaixaSaida } from "./styled";
import { useState, useEffect } from "react";
import { CaixaFlexivel, ItemLista, ListaUL } from "../Entrada/styled";

const Saida = ({ transactions }) => {
  const [filtroSaida, setFiltroSaida] = useState([]);

  useEffect(() => {
    const item = transactions.filter((item) => item.quantity < 0);
    setFiltroSaida(item);
  }, [transactions]);

  return (
    <CaixaSaida>
      <ListaUL>
        <h1>Saída</h1>
        <CaixaFlexivel>
          {filtroSaida.map((item) => (
            <ItemLista>
              <h1>{item.name}</h1>
              <p>R${item.price}</p>
              <p>Qnt: {item.quantity}un</p>
            </ItemLista>
          ))}
        </CaixaFlexivel>
      </ListaUL>
    </CaixaSaida>
  );
};
export default Saida;
