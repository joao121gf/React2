import React, { useState } from "react";
export default function Pj001() {
  const [addTask, setAddTask] = useState([]);
  const [pullInput, setPullInput] = useState("");

  let funcInput = (event) => {
    setPullInput(event.target.value);
  };
  let funcTask = () => {
    if (!pullInput.trim()) {
      alert("Erro, Escreva uma tarefa válida porfavor");
      return;
    }
    if (addTask.some((task) => task.toLowerCase() === pullInput.toLocaleLowerCase())) {
      alert("Erro, essa tarefa já foi adcionada anteriormente");
      setPullInput("");
      return;
    }
    setAddTask((addArray) => [...addArray, pullInput]);

    setPullInput("");
  };

  let removeItem = (itemToRemove) => {
    setAddTask((remov) => [...remov.filter((item) => item != itemToRemove)]);
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
        <div className="flex2">
          <div className="add-tarefas">
            <h2>Gerenciador de tarefas</h2>
            <h3>Adcione sua tarefa</h3>
            <input onKeyDown={(event) => event.key === "Enter" && funcTask()} type="text" placeholder="Digite a tarefa" onChange={funcInput} value={pullInput} />
            <button onClick={funcTask}>Adcionar</button>
          </div>
          <div className="area-tarefa">
            <ul className="ul-tp">
              {addTask.map((item, index) => (
                <li key={index}>
                  {item} <button onClick={() => removeItem(item)}>Remover</button>
                  <button className="feita">Marcar como feita</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex">
            <h2>Todas tarefas</h2>
            <h2>Pendentes</h2>
            <h2>Concluidas</h2>
          </div>
        </div>
      </div>
    </>
  );
}
