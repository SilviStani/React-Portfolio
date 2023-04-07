import React from "react";
import "../topbar/TopBar.scss";

import { Mail, GitHub, LinkedIn, WhatsApp } from "@material-ui/icons";
const Sociales = () => {
  return (
    <>
      <div className="itemContainer">
        <a
          href="https://api.whatsapp.com/send/?phone=5491163632288&text&app_absent=0"
          target="blank"
        >
          <WhatsApp className="icon" />
        </a>
        {/*<img src="/assets/contact_me.png" alt="" height={50} width={50}/>*/}
      </div>
      <div className="itemContainer">
        <a
          href="mailto:silvina.stani@gmail.com?subject = Feedback&body = Message"
          target="blank"
        >
          <Mail className="icon" />
        </a>
        {/*<img src="/assets/mail.png" alt="" height={50} width={50}/>*/}
      </div>
      <div className="itemContainer">
        <a href="https://github.com/SilviStani" className="icon" target="blank">
          <GitHub className="icon" />
        </a>
        {/*<img src="/assets/github_st.png" alt="" height={50} width={50}/>*/}
      </div>
      <div className="itemContainer">
        <a
          href="https://www.linkedin.com/in/silvina-staniszewski-18493276/"
          target="blank"
          className="icon"
        >
          <LinkedIn className="icon" />
        </a>
        {/*} <img src="/assets/trabajo.png" alt="" height={50} width={50}/>*/}
      </div>
    </>
  );
};

export default Sociales;
