import React, { useEffect, useState } from "react";

export default function Ex012() {
  const [valueInputAtt, setValueInputAtt] = useState("");
  const [arrayTasks, setArrayTasks] = useState(() => {
    const stored = localStorage.getItem("storeArray");
    return stored ? JSON.parse(stored) : [];
  });
  useEffect(() => {
    localStorage.setItem("storeArray", JSON.stringify(arrayTasks));
  }, [arrayTasks]);
  let getInput = (event) => {
    setValueInputAtt(event.target.value);
  };
  let addInpt = () => {
    setArrayTasks((prev) => [...prev, valueInputAtt]);
  };
  return (
    <>
      <h1>Local Storage</h1>
      <input type="text" placeholder="Sua Tarefa" onChange={getInput} value={valueInputAtt} />
      <button onClick={addInpt}>Adcionar</button>
      <ul>
        {arrayTasks.map((item, index) => (
          <li key={index}>{item} </li>
        ))}
      </ul>
    </>
  );
}
