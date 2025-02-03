import React from "react";
import { useState } from "react";

export default function Ex006() {
  const [mudaTema, setMudaTema] = useState("white");

  let mudaCor = () => {
    setMudaTema(mudaTema === "white" ? "black" : "white");
  };

  return (
    <>
      <div className="bckg" style={{ backgroundColor: mudaTema }}>
        <h3 style={{ color: mudaTema === "white" ? "black" : "white" }}>Exercício: Alternador de Tema</h3>
        <button onClick={mudaCor}>Mudar Tema</button>
        <hr />
      </div>
    </>
  );
}
