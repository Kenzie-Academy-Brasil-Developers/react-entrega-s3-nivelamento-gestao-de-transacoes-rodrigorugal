import { useState } from "react";
import Tela from "./components/Display";
import Entrada from "./components/Entrada";
import Saida from "./components/Saida";
import TodaMovimentacao from "./components/TodasAsMovimentacoes";

function App() {
  const [troca, setTroca] = useState(true);
  const [transactions, setTransactions] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);

  const handlerTroca = () => {
    console.log("Click!");
    setTroca(!troca);
  };

  return (
    <div>
      <Tela
        handlerTroca={handlerTroca}
        setTransactions={setTransactions}
        transactions={transactions}
      />
      {troca ? (
        <Entrada transactions={transactions} />
      ) : (
        <Saida transactions={transactions} />
      )}
      <TodaMovimentacao transactions={transactions} />
    </div>
  );
}

export default App;
