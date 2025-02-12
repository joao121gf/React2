import React, { useState } from "react";
import { useRef } from "react";
export default function Pj003() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [dados, setDados] = useState([]);

  let pullGit = (event) => {
    setGitHub(event.target.value);
  };
  let pullEmail = (event) => {
    setEmail(event.target.value);
  };
  const pRef = useRef(null);

  let gitName = () => {
    setDados([
      <p key="nome">Name: {nome}</p>,
      <p key="email">E-mail: {email}</p>,
      <p key="github">Github: {gitHub}</p>,
    ]);
  };

  let pullInput = (event) => {
    setNome(event.target.value);
  };

  return (
    <>
      <h2>Conference ticket generator</h2>
      <h4>
        In this challenge, you'll create a form that generates a ticket. There's a lot of scope for
        customizing the generated ticket and putting your own stamp on the project.
      </h4>
      <div className="formulario">
        <div className="box-each">
          <h5>Nome</h5>
          <input type="text" placeholder="Your name" onChange={pullInput} />
        </div>
        <div className="box-each">
          <h5>E-mail</h5>
          <input type="text" placeholder="email@example.com" onChange={pullEmail} />
        </div>
        <div className="box-each">
          <h5>Github</h5>
          <input type="text" placeholder="@yourusername" onChange={pullGit} />
        </div>
      </div>
      <button onClick={gitName}>Generate</button>
      <div className="card">{dados}</div>
    </>
  );
}
