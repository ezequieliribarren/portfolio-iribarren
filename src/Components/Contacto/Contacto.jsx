import React from 'react'

const Contacto = () => {
  return (
    <section id='contacto'>
      <div className='title-section'> <h3>Contacto</h3> <span className='arrow'>→</span> </div>
      <form id="contactForm">
        <div className="form-group">
          <input type="text" id="nombre" name="nombre" required placeholder='Nombre' />
        </div>
        <div className="form-group">
          <input type="email" id="email" name="email" required placeholder='Email' />
        </div>
        <div className="form-group">
          <input type="tel" id="tel" name="tel" required placeholder='Telefono' />
        </div>
        <div className="form-group">
          <textarea id="mensaje" name="mensaje" required placeholder='Estoy atento a tu mensaje'></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Contacto