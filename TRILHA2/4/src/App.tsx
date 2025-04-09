import ToggleVisibilidade from "./components/ToggleVisibilidade.tsx";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>APARECE E SOME</h1>
      <ToggleVisibilidade texto="conteudo deve aparecer depois de clicar no botao" />
    </div>
  );
}

export default App;
