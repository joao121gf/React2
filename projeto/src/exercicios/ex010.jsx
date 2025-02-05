import React, { useState } from "react";
export default function Ex010() {
  const [tarefaInput, setTarefaInput] = useState("");
  const [tarefaArray, setTarefaArray] = useState([]);
  let pegarInput = (event) => {
    setTarefaInput(event.target.value);
  };

  let adcionaTarefa = () => {
    setTarefaArray((funcAdd) => [...funcAdd, tarefaInput]);
    setTarefaInput("");
  };
  let removeItem = (itemAnexo) => {
    setTarefaArray((remov) => remov.filter((item) => item !== itemAnexo));
  };
  return (
    <>
      <h1>Exercicio removendo tarefas</h1>
      <input type="text" placeholder="Sua tarefa" value={tarefaInput} onChange={pegarInput} />
      <button onClick={adcionaTarefa}>Adcionar tarefa</button>

      <ul>
        {tarefaArray.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItem(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}
