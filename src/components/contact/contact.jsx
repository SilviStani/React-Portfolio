import "./contact.scss";

export default function Contact() {

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
      <form className='form' >
            <input className='name' placeholder="Nombre" name="user_name" />
            <input className='name' placeholder="N° Teléfono" />
            <input className='name' placeholder="Email" name='user_mail'/>
            <input className='name' placeholder="Asunto" name='user_subject'/>
            <textarea className='' placeholder="Mensaje" rows={6} name='message' />
            <button className='button'>Enviar</button>
        </form>
      <a download href="assets/SilvinaStaniCv.pdf">
        <button class="download-cv">Download CV</button>
      </a>
      </div>
    </div>
  );
}


