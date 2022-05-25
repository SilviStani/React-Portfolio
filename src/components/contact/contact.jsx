import "./contact.scss";
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

export default function Contact() {
const form =useRef();
const [send, setSend] = useState(false)
const [empty, setEmpty] = useState({
name: undefined,
phone: undefined,
mail: undefined,
subject: undefined,
message: undefined
})

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_j5bg2fa', 'template_fxxt0rn', form.current, 'user_No7Wk2Xmmcxmswl29wqsY')
    .then((result) => {
        console.log(result.text);
        setSend(true)
        setEmpty({
          name: '',
          phone: '',
          mail: '',
          subject:'',
          message: ''
        })
    }, (error) => {
        console.log(error.text);
    });
};
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
      <form className='form' ref={form} onSubmit={sendEmail}>
            <input className='name' placeholder="Nombre" name="user_name" value={empty.name}/>
            <input className='name' placeholder="N° Teléfono" name='user_phone' value={empty.phone}/>
            <input className='name' placeholder="Email" name='user_mail' value={empty.mail}/>
            <input className='name' placeholder="Asunto" name='user_subject' value={empty.subject}/>
            <textarea className='' placeholder="Mensaje" rows={6} name='message' value={empty.message} />
            <button className='button'>Enviar</button>
            {send && 'Gracias!!! Conversamos Pronto :)'}
        </form>
      <a download href="assets/Resume.pdf">
        <button class="download-cv">Download CV</button>
      </a>
      </div>
    </div>
  );
}


