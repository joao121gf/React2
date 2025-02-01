import React from "react";
import { useState } from "react";

export default function Ex003() {
  const [count, setCount] = useState(1);
  const numberMax = 10;
  const numberMin = 0;
  const mensagem = "LIMITE ATINGIDO";
  function soma() {
    if (count < 10 && count >= 0) {
      setCount(count + 1);
    }
  }
  function sub() {
    if (count <= 10 && count > 0) {
      setCount(count - 1);
    } else {
      return mensagem;
    }
  }

  return (
    <>
      <h1>Exercício 3</h1>
      <h2>Contador cujo o máximo é 10 e o minimo é 0</h2>
      <h3>{count}</h3>
      {count === numberMax && <p>{mensagem} (Máximo)</p>}
      {count === numberMin && <p>{mensagem} (Mínimo)</p>}
      <button onClick={soma}>Somar</button>
      <button onClick={sub}>Subtrai</button>
      <hr />
    </>
  );
}
