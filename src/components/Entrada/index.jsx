import { useEffect, useState } from "react";
import { CaixaDeEntrada, CaixaFlexivel, ItemLista, ListaUL } from "./styled";

const Entrada = ({ transactions }) => {
  const [filtroEntrada, setFiltroEntrada] = useState([]);

  useEffect(() => {
    const item = transactions.filter((item) => item.quantity > 0);
    setFiltroEntrada(item);
  }, [transactions]);

  return (
    <CaixaDeEntrada>
      <ListaUL>
        <h1> Entrada </h1>
        <CaixaFlexivel>
          {filtroEntrada.map((item) => (
            <ItemLista>
              <h1>{item.name}</h1>
              <p>R${item.price}</p>
              <p>Qnt: {item.quantity}un</p>
            </ItemLista>
          ))}
        </CaixaFlexivel>
      </ListaUL>
    </CaixaDeEntrada>
  );
};

export default Entrada;
