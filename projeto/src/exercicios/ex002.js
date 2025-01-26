import React from "react";
import { useState } from "react";

export default function Comps() {
  // let count = 0
  const [count, setCount] = useState(0);
  const [valueInput, setValueInput] = useState("Joao");
  function incre() {
    setCount(count + 1);
  }

  function decre() {
    setCount(count - 1);
  }

  const onChangeInput = (event) => {
    setValueInput(event.target.value);
  };
  return (
    <>
      <div className="App">
        <h1>Esse é o exercício 2</h1>
        <h3>{count}</h3>
        <button onClick={incre}>Adcionar</button>
        <button onClick={decre}> Remover</button>
        <div>
          <input type="text" onChange={onChangeInput} />
        </div>
        <h3>{valueInput}</h3>
        <hr />
      </div>
    </>
  );
}
