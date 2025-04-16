import React, { useState } from 'react';
import '../styles/BuscarUsuario.css';
const CadastrarUsuario: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);

  const cadastrarUsuario = async () => {
    if (!nome.trim() || !email.trim()) {
      setMensagem('Preencha todos os campos.');
      return;
    }

    setLoading(true);
    setMensagem('');

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: nome, email })
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário.');
      }

      const data = await response.json();
      console.log('Usuário cadastrado:', data);
      setMensagem('Usuário cadastrado com sucesso!');
      setNome('');
      setEmail('');
    } catch (error: any) {
      setMensagem(error.message || 'Erro desconhecido.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cadastrar-usuario-container">
      <h2>Cadastro de Usuário</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="cadastrar-usuario-input"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="cadastrar-usuario-input"
      />
      <button
        onClick={cadastrarUsuario}
        className="cadastrar-usuario-button"
        disabled={loading}
      >
        {loading ? 'Cadastrando...' : 'Cadastrar'}
      </button>
      {mensagem && <p className="cadastrar-usuario-mensagem">{mensagem}</p>}
    </div>
  );
};

export default CadastrarUsuario;
