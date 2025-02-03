import React, { use } from "react";
import { useState } from "react";
export default function Ex007() {
  const [prod, setProd] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const adcionarItem = () => {
    setProd([...prod, inputValue]);
    setInputValue(""); // Limpa o input após adicionar
  };
  const verLista = () => {
    return <p>{prod.join(", ")}</p>;
  };
  return (
    <>
      <h1>Lista de Compras 🛒</h1>
      <input type="text" placeholder="Nome do produto" name="nomeP" onChange={handleChange} value={inputValue} />
      <button onClick={adcionarItem}>Adcionar</button>
      <button onClick={() => alert(prod.join(", "))}>Ver Lista</button>
    </>
  );
}
