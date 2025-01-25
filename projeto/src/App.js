import React, { useState } from "react";
import Ex001 from "./exercicios/ex001";

function Header() {
  return <h1>Bem-vindo ao React!</h1>;
}
function Desc() {
  return <p>Essa é a descrição da nossa empresa</p>;
}

function Button(props) {
  return <p>Bem vindo senhor {props.name}, voce gostaria de reservar um Curriculo na nossa empresa?</p>;
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Desc />
      <Button name="João Giovani"></Button>
      <div>
        <h1>Contador: {count}</h1>
        <button onClick={() => setCount(count + 1)}> Adcionar </button>
        <button onClick={() => setCount(count - 1)}> Subtrair </button>
      </div>
      <Ex001></Ex001>
    </>
  );
}
