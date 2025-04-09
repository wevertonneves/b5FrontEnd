import { useState } from "react";
import "../styles/styles.css";

type SaudacaoProps = {
  nomeInicial: string;
};

export default function Saudacao({ nomeInicial }: SaudacaoProps) {
  const [nome, setNome] = useState(nomeInicial);
  const [novoNome, setNovoNome] = useState("");

  const atualizarNome = (e: React.FormEvent) => {
    e.preventDefault();
    if (novoNome.trim()) {
      setNome(novoNome.trim());
      setNovoNome("");
    }
  };

  return (
    <div className="saudacao-container">
      <h2>Olá, {nome}!</h2>
      <form onSubmit={atualizarNome} className="saudacao-form">
        <input
          type="text"
          value={novoNome}
          onChange={(e) => setNovoNome(e.target.value)}
          placeholder="Digite um novo nome"
          className="saudacao-input"
        />
        <button type="submit" className="saudacao-button">Atualizar</button>
      </form>
    </div>
  );
}
