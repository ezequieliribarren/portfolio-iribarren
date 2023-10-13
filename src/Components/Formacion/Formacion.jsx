import React from 'react'
import { formaciones } from '../../js/formaciones';

const Formacion = () => {
  return (
    <section id='formacion'>
      <div className='title-section'> <h3>Formacion</h3><span className='arrow'>→</span></div>
      <div className="content-projects"  >
        {formaciones.map((formacion) => (
          <div className="card-projects" key={formacion.id} >
            <div className="card-projects-img">
              <a className='img-formacion' href={formacion.link} style={{ backgroundImage: `url(${formacion.img})` }} target='_blank'> </a>
            </div>
            <div className='card-projects-description'>
              <div>
                <h3>{formacion.title}</h3>
              </div>
              <div>
                <p>{formacion.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Formacion