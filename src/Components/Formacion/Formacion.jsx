import React from 'react'
import { formaciones } from '../../js/formaciones';

const Formacion = () => {
  return (
    <section id='formacion'>
      <div className='title-section'> <h3>Formacion</h3><span className='arrow'>→</span></div>
      <div className="content-projects-formacion"  >
        {formaciones.map((formacion) => (
          <div className="card-projects-formacion" key={formacion.id} >
            <div className="card-projects-img-formacion">
              <a target='_blank' href={formacion.link}><div className='img-formacion'  style={{ backgroundImage: `url(${formacion.img})` }} target='_blank'> </div></a>
            </div>
            <div className='card-projects-description-formacion'>
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