import React from "react";
import { useState } from "react";
export default function Ex009(){
    const [dado, setDado] = useState('')
    const [addTask, setAddTask] = useState([])
    let adcionarTask = () =>{
        setAddTask(valueInput => [...valueInput, dado, ", "])
        setDado("")
    }
    let pegaInput = (event) =>{
        setDado(event.target.value)
    }
    return<>
    <h1>Exercícios de fixação</h1>
    <input type="text" placeholder="Digite a tarefa" value={dado} onChange={pegaInput}/>
    <button onClick={adcionarTask}>Adcionar tarefa</button>
    <p>{addTask}</p>
    </>
}