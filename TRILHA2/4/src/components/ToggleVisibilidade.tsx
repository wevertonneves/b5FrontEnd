// src/components/ToggleVisibilidade.tsx
import { useState } from "react";

type ToggleVisibilidadeProps = {
  texto: string;
};

export default function ToggleVisibilidade({ texto }: ToggleVisibilidadeProps) {
  const [visivel, setVisivel] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <button onClick={() => setVisivel(!visivel)}>
        {visivel ? "Ocultar" : "Mostrar"}
      </button>

      {visivel && <p style={{ marginTop: "20px" }}>{texto}</p>}
    </div>
  );
}
