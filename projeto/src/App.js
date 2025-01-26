import React from "react";

export default function App() {
  function sum(a, b) {
    return a + b;
  }
  const name = "João";
  const url = "https://placehold.co/400";
  return (
    <>
      <div className="app">
        <h1>Olá {sum(2, 1)}</h1>
        <img src={url} alt="minha imagem" />
      </div>
    </>
  );
}
 