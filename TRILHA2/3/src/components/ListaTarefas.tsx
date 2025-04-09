import { useState } from "react";
import "../styles/styles.css";

type ListaTarefasProps = {
  tarefasIniciais: string[];
};

export default function ListaTarefas({ tarefasIniciais }: ListaTarefasProps) {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = (e: React.FormEvent) => {
    e.preventDefault();
    if (novaTarefa.trim()) {
      setTarefas([...tarefas, novaTarefa.trim()]);
      setNovaTarefa("");
    }
  };

  return (
    <div className="lista-container">
      <h2>Lista de Tarefas</h2>
      <form onSubmit={adicionarTarefa} className="lista-form">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Nova tarefa"
          className="lista-input"
        />
        <button type="submit" className="lista-button">Adicionar</button>
      </form>
      <ul className="lista-tarefas">
        {tarefas.map((tarefa, index) => (
          <li key={index} className="tarefa-item">{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}
