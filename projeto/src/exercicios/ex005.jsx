import React from "react";
import { useState } from "react";
export default function Ex005() {
  const [adc, setAdc] = useState(0);
  let constAdd = () => {
    setAdc(adc + 1);
  };
  let constRemove = () => {
    setAdc(adc - 1);
  };

  return (
    <>
      <h3>Exercício 5 - Revisao</h3>
      <p>Crie um componente React que exiba um contador. O contador deve começar em 0 e ter dois botões: um para aumentar o valor e outro para diminuir. O valor do contador deve ser armazenado em um estado usando o hook useState</p>
      <h4>{adc}</h4>
      <button onClick={constAdd}>Aumentar</button>
      <button onClick={constRemove}>Diminuir</button>
      <hr />
    </>
  );
}
