import React, { use } from "react";
import { useState } from "react";
export default function Ex004() {
  const [tarefa, setTarefa] = useState("");
  const [listaTarefas, setListaTarefas] = useState([]);

  const handleInputChange = (event) => {
    setTarefa(event.target.value);
  };

  const adcionaTarefa = () => {
    if (tarefa.trim()) {
      setListaTarefas((prevLista) => [...prevLista, tarefa]);
      setTarefa("");
    } else {
      alert("por favor, insira uma tarefa válida");
    }
  };
  const removeTarefa = (index) => {
    setListaTarefas((prevLista) => prevLista.filter((_, i) => i !== index)); // Remove a tarefa pelo índice
  };
  return (
    <div>
      <h1>Exercício 4</h1>
      <p>Gerenciador de tarefas simples</p>
      <input type="text" name="nome" id="idnome" placeholder="Sua tarefa" value={tarefa} onChange={handleInputChange} />
      <button onClick={adcionaTarefa}>Adcionar tarefa</button>

      <h3>Tarefas: </h3>
      <ul>
        {listaTarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa} <button onClick={() => removeTarefa(index)}>Remover</button> {/* Botão para remover a tarefa */}
          </li> // Renderiza cada tarefa
        ))}
      </ul>
      <hr />
    </div>
  );
}
