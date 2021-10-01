import { useState } from "react";
import { DivInput, Formulario, Button } from "./style";

const Cadastro = ({ setTransactions, transactions }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0.0);

  const handleForm = (data) => {
    setTransactions([...transactions, data]);
  };

  return (
    <Formulario>
      <h3>Cadastro de produtos</h3>
      <DivInput>
        <label> Nome: </label>
        <input
          type="text"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
      </DivInput>
      <DivInput>
        <label> Qauntidade: </label>
        <input
          type="number"
          value={quantity}
          onChange={(ev) => setQuantity(ev.target.value)}
        />
      </DivInput>
      <DivInput>
        <label> Preço: </label>
        <input
          type="number"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
        />
      </DivInput>

      <Button
        type="button"
        onClick={() => {
          handleForm({ name: name, quantity: quantity, price: price });
        }}
      >
        Enviar
      </Button>
    </Formulario>
  );
};

export default Cadastro;
