import "./contact.scss";

export default function Contact() {

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
      <a download href="assets/SilvinaStaniEn.pdf">
        <button class="download-cv">Download CV</button>
      </a>
      </div>
    </div>
  );
}


