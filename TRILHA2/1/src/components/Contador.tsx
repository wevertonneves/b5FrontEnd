import { useState } from "react";

type ContadorProps = {
  valorInicial: number;
};

export default function Contador({ valorInicial }: ContadorProps) {
  const [contador, setContador] = useState(valorInicial);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <div style={styles.container}>
      <h2>Contador: {contador}</h2>
      <div style={styles.buttons}>
        <button onClick={decrementar}>-</button>
        <button onClick={incrementar}>+</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center" as const,
    marginTop: "50px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
};
