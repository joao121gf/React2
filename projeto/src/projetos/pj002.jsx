import React, { useState } from "react";
import { useEffect } from "react";
export default function Pj002() {
  const [numero, setNumero] = useState(Number(localStorage.getItem("contador")) || 0);
  useEffect(() => {
    localStorage.setItem("contador", numero);
  }, [numero]);
  const aumentar = () => {
    setNumero(numero + 1);
  };
  const diminuir = () => {
    setNumero(numero - 1);
  };
  const reset = () => {
    setNumero(0);
  };
  localStorage.getItem(numero);

  return (
    <>
      <h4>Crie um contador com React que tenha as seguintes funcionalidades: Um botão para aumentar o valor. Um botão para diminuir o valor. Um botão para resetar o valor para 0. O valor do contador deve ser salvo no localStorage para que, ao recarregar a página, ele continue do último valor salvo.</h4>
      <h2>{numero}</h2>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Diminuir</button>
      <button onClick={reset}>Resetar valeor</button>
    </>
  );
}
