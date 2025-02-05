import React, { useState } from "react";
export default function Pj001() {
  const [addTask, setAddTask] = useState([]);
  const [pullInput, setPullInput] = useState("");

  let funcInput = (event) => {
    setPullInput(event.target.value);
  };
  let funcTask = () => {
    setAddTask((addArray) => [...addArray, pullInput]);
    setPullInput("");
  };

  return (
    <>
      <div>
        <h1>To-Do List com Filtros</h1>
        <ul className="no-bullets">
          <li>📌 Adicionar tarefas</li>
          <li>❌ Remover tarefas</li>
          <li>✅ Marcar tarefas como concluídas</li>
          <li>🔍 Filtrar tarefas (Todas, Pendentes, Concluídas)</li>
          <li>💾 Salvar no Local Storage</li>
        </ul>
        <hr />
      </div>
      <div>
        <div className="add-tarefas">
          <h2>Gerenciador de tarefas</h2>
          <h3>Adcione sua tarefa</h3>
          <input type="text" placeholder="Digite a tarefa" onChange={funcInput} value={pullInput} />
          <button onClick={funcTask}>Adcionar</button>
        </div>
        <div className="area-tarefa">
          <ul className="ul-tp">
            {addTask.map((task, index) => (
              <li key={index}>
                {task} <button>Remover</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
