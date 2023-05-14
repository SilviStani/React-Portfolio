import React from "react";
import "../topbar/TopBar.scss";

const Whatsapp = () => {
  return (
    <div className="WhatsappSilvinaContainer">
      <p>
        {" "}
        ¿Más info? <br />
        ¡Envíame Whatsapp!
      </p>
      <a
        href="https://wa.me/5491163632288?text=Hola!%20Me%20interesa%20información%20sobre%20las%20páginas%20Web.%0AGracias!"
        target="blank"
      >
        <img
          className="WhatsappSilvina"
          src="./assets/contact_me.png"
          alt="WhatsApp Silvina Staniszewski. Click aquí para enviar mensaje"
        />
      </a>
    </div>
  );
};

export default Whatsapp;
