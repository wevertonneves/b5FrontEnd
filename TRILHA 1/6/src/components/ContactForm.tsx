import "../styles/styles.css";

export default function ContactForm() {
  return (
    <div className="fullscreenWrapper">
      <div className="formContainer">
        <h2>Entre em Contato</h2>
        <form className="contactForm">
          <input type="text" placeholder="Seu nome" required />
          <input type="email" placeholder="Seu e-mail" required />
          <textarea placeholder="Sua mensagem" required />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
