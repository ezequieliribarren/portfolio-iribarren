import React from 'react'
import { proyectos } from '../../js/proyectos';

const Proyectos = () => {
    return (
        <section id='proyectos'>
            {proyectos.map((proyecto) => (
                <div className="card-projects">
                    <div className="card-projects-img">
                        <img src={proyecto.img} alt="" />
                    </div>
                    <div className='card-projects-description'>
                        <div>
                            <h3>{proyecto.title}</h3>
                        </div>
                        <div>
                            <p>{proyecto.description}</p>
                        </div>
                        <div className='card-projects-skills'>
                            <img className='skill' src={proyecto.skill1} alt="" /> <img className='skill' src={proyecto.skill2} alt="" /> <img className='skill' src={proyecto.skill3} alt="" />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Proyectos