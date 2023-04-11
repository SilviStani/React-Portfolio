import Sociales from "../Sociales/Sociales";
import "./TopBar.scss";

export default function TopBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="/" className="logo">
            <img src="/assets/logoYo.png" alt="" height={60} width={60} />
          </a>
          <div className="itemContainerTrivia">
            <a href="/trivia" class="download-cv">
              /Trivia/
            </a>
          </div>
          <div className="itemContainerTrivia">
            <a href="/galeria" class="download-cv">
              /Galeria/
            </a>
          </div>
          <Sociales />
        </div>
      </div>
      <div className="WhatsappSilvinaContainer">
        <p>
          {" "}
          ¿Más info? <br />
          ¡Envíame Whatsapp!
        </p>
        <a
          href="https://api.whatsapp.com/send/?phone=5491163632288&text&app_absent=0"
          target="blank"
        >
          <img
            className="WhatsappSilvina"
            src="./assets/contact_me.png"
            alt="WhatsApp Silvina Staniszewski. Click aquí para enviar mensaje"
          />
        </a>
      </div>
    </div>
  );
}
