
import ListaTarefas from "./components/ListaTarefas";

function App() {
  const tarefasIniciais = ["TAREFA1", "TAREFA2", "TAREFA3"];

  return (
    <div>
      
      <ListaTarefas tarefasIniciais={tarefasIniciais} />
    </div>
  );
}

export default App;
