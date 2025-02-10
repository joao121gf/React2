import React, { useEffect, useState } from "react";

export default function Ex011() {
  const [cont, setCont] = useState(() => {
    // Inicializa diretamente com o valor do localStorage, se disponível
    const savedValue = localStorage.getItem("myItem");
    return savedValue ? Number(savedValue) : 0; // Se houver valor no localStorage, usa-o, caso contrário, inicia com 0
  });

  const addBtn = () => {
    setCont(cont + 1);
  };

  const removeBtn = () => {
    setCont(cont - 1);
  };

  // Salvando no localStorage sempre que 'cont' mudar
  useEffect(() => {
    localStorage.setItem("myItem", cont);
  }, [cont]);

  return (
    <>
      <h1>Funciona</h1>
      <button onClick={addBtn}>Adciona</button>
      <button onClick={removeBtn}>Remove</button>
      <h2>{cont}</h2>
    </>
  );
}
