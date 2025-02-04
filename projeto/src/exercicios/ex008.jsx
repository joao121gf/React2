import React from "react";
import { useState } from "react";
export default function Ex008(){
    const [tarefa, setTarefa] = useState([])
    const [dados, setDados] = useState('')
    let pegaInput = (event) =>{
        setDados(event.target.value)
    }
    let adcionaTarefa = () =>{
        if (/[\d]/.test(dados) || dados.trim() === "") {
            alert('Erro, a tarefa não pode conter apenas números ou estar vazia');
        } else{
            setTarefa(prevItens => [...prevItens, dados , ', '])
        }
        setDados("")

    }
    return<>
    <h1>Nova lista de tarefas</h1>
    <input type="text" placeholder="Adcionar Tarefa" onChange={pegaInput} value={dados}/>
    <button onClick={adcionaTarefa}>Adcionar</button>
    <p>{tarefa}</p>
    <hr />

    </>
}