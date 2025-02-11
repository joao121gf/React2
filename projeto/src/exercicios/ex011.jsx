import React, { use, useCallback, useEffect, useState } from "react";
export default function Ex011() {
  const [estado, setEstado] = useState(() => {
    const saved = localStorage.getItem("myItem");
    return saved !== null ? Number(saved) : 0;
  });
  useEffect(() => {
    localStorage.setItem("myItem", estado);
  }, [estado]);
  let addBtn = useCallback(() => {
    setEstado((prev) => prev + 1);
  });
  let removeBtn = useCallback(() => {
    setEstado((prev) => prev - 1);
  });
  let resetBtn = useCallback(() => {
    setEstado(0);
  });

  return (
    <>
      <h1>Funciona</h1>
      <button onClick={addBtn}>Adcionar</button>
      <button onClick={removeBtn}>Remover</button>
      <button onClick={resetBtn}>Resetar</button>
      <h2>{estado}</h2>
    </>
  );
}
