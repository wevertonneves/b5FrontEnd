
import { useParams, useNavigate } from "react-router-dom";

export default function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const reservar = () => {
  
    navigate("/success");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Detalhes do Quarto</h2>
      <p>Você está visualizando o quarto com ID: <strong>{id}</strong></p>
      <button
        onClick={reservar}
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Reservar Quarto
      </button>
    </div>
  );
}
