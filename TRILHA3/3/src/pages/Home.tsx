// src/pages/Home.tsx
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const irParaSobre = () => {
    navigate("/about");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Bem-vindo à Home</h1>
      <button
        onClick={irParaSobre}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          borderRadius: "8px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Ir para Sobre
      </button>
    </div>
  );
}
