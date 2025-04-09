// src/pages/Rooms.tsx
import { Link } from "react-router-dom";

const quartos = [
  { id: "1", nome: "EXPRESS" },
  { id: "2", nome: "SIMPES" },
  { id: "3", nome: "DUPLO" },
];

export default function Rooms() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>Quartos Disponíveis</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {quartos.map((quarto) => (
          <li key={quarto.id} style={{ margin: "10px 0" }}>
            <Link to={`/room/${quarto.id}`}>{quarto.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
