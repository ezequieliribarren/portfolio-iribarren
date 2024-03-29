import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xthaauk', 'template_65mqa4v', form.current, 'EpVha9be-Hi30Au-g')
      .then((result) => {
          window.location.href = "#/enviado"
      }, (error) => {
        window.location.href = "#/error"
      });
  };

  return (
    <section id='contacto'>
      <div className='title-section'> <h3>Contacto</h3> <span className='arrow'>→</span> </div>
      <form id="contactForm" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <input type="text" id="nombre" name='user_name' required placeholder='Nombre' />
        </div>
        <div className="form-group">
          <input type="email" id="email" name='user_email' required placeholder='Email' />
        </div>
        <div className="form-group">
          <input type="tel" id="tel" name="user_tel" required placeholder='Telefono' />
        </div>
        <div className="form-group">
          <textarea id="mensaje" name="mensaje" required placeholder='Tu mensaje'></textarea>
        </div>
        <button type="submit" value="Enviar">Enviar</button>
      </form>
    </section>
  )
}

export default Contacto