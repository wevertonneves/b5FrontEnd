
import { useParams } from "react-router-dom";

export default function Animal() {
  const { name } = useParams<{ name: string }>();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
     
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>{name}</p>
    </div>
  );
}
