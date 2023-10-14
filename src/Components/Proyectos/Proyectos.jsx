import React from 'react'
import { proyectos } from '../../js/proyectos';

const Proyectos = () => {
    return (
        <section id='proyectos'>
            <div className='title-section'> <h3>Proyectos</h3><span className='arrow'>→</span></div>
            <div className="content-projects">
                {proyectos.map((proyecto) => (
                    <div className="card-projects"  key={proyecto.id} >
                        <div className="card-projects-img">
                            <a className='img-project' href={proyecto.link}  style={{ backgroundImage: `url(${proyecto.img})` }} target='_blank'> </a>
                        </div>       
                        <div className='card-projects-description'>
                            <div>
                                <h3>{proyecto.title}</h3>
                               
                            </div>
                            <div>
                                <p>{proyecto.description}</p> <a className='ver-sitio' href={proyecto.link}> Ver Sitio</a>
                            </div>
                            <div className='card-projects-skills'>
                                <div className='skill'> <div className='skill-img'><img src={proyecto.skill1} alt="" /></div> <h4>{proyecto.skill1name}</h4></div>
                                <div className='skill'> <div className='skill-img'><img src={proyecto.skill2} alt="" /></div> <h4>{proyecto.skill2name}</h4> </div>
                                <div className='skill'> <div className='skill-img'><img src={proyecto.skill3} alt="" /></div> <h4>{proyecto.skill3name}</h4></div>
                                <div className='skill'> <div className='skill-img'><img src={proyecto.skill4} alt="" /></div> <h4>{proyecto.skill4name}</h4></div>
                                <div className='skill'> <div className='skill-img'><img src={proyecto.skill5} alt="" /></div> <h4>{proyecto.skill5name}</h4></div>

                            </div>
                        </div>
                    </div>

                ))}
            </div>

        </section>
    )
}

export default Proyectos