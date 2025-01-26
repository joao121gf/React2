import React, { useState } from "react";

export default function Ex001(props) {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState("");
  let mensagem = "Você clicou muitas vezes";
  if (count >= 5) {
    mensagem = "Você clicou muitas vezes";
  } else {
    mensagem = "Você clicou poucas vezes";
  }
  let mensagem2 = "mensagem aqui";
  const handleSubmit = () => {
    mensagem2 = `Número enviado: ${number}`;
  };

  return (
    <p>
      Seja muito bem vindo {props.name}
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <button type="submit" onClick={handleSubmit}>
        Enviar
      </button>
      <h1>contador: {count}</h1>
      <p>
        {mensagem} {props.name}
      </p>
      <button onClick={() => setCount(count - 1)}> Subtrair </button>
      <button onClick={() => setCount(count + 1)}> somar </button>
      <p>Você digitou: {number}</p>
    </p>
  );
}
