
import React from 'react';
import Button from './components/Button';

const App: React.FC = () => {
  return <Button label="Clique aqui" onClick={() => alert('Botão clicado!')} />;
};

export default App;
