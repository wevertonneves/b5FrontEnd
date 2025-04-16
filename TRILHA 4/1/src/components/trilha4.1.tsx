import React, { useState } from 'react';
import '../styles/BuscarUsuario.css'; 

const BuscarUsuario: React.FC = () => {
  const [id, setId] = useState('');
  const [usuario, setUsuario] = useState<{ name: string; email: string } | null>(null);
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);

  const buscarUsuario = async () => {
    if (!id.trim()) {
      setErro('Por favor, digite um ID.');
      setUsuario(null);
      return;
    }

    setLoading(true);
    setErro('');
    setUsuario(null);

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) {
        throw new Error('Usuário não encontrado.');
      }

      const data = await response.json();
      setUsuario({ name: data.name, email: data.email });
    } catch (err: any) {
      setErro(err.message || 'Erro ao buscar usuário.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="buscar-usuario-container">
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Digite o ID do usuário"
        className="buscar-usuario-input"
      />
      <button onClick={buscarUsuario} className="buscar-usuario-button" disabled={loading}>
        {loading ? 'Buscando...' : 'Buscar'}
      </button>

      {usuario && (
        <div className="buscar-usuario-resultado">
          <p><strong>Nome:</strong> {usuario.name}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
        </div>
      )}

      {erro && <p className="buscar-usuario-erro">{erro}</p>}
    </div>
  );
};

export default BuscarUsuario;
