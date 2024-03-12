import React, { useState, useRef } from 'react';
import { proyectos } from '../../js/proyectos';

const Proyectos = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const videoRefs = useRef(proyectos.map(() => React.createRef()));

    const handleHover = (index) => {
        setHoveredProject(index);
        // Pausar todos los demás videos
        videoRefs.current.forEach((ref, i) => {
            if (i !== index && ref.current) {
                ref.current.pause();
            }
        });
        // Reproducir el video actual
        if (videoRefs.current[index].current) {
            videoRefs.current[index].current.play();
        }
    };

    const handleLeave = (index) => {
        setHoveredProject(null);
        // Pausar el video actual al salir y volver al segundo 0
        if (videoRefs.current[index].current) {
            videoRefs.current[index].current.pause();
            videoRefs.current[index].current.currentTime = 0;
        }
    };
    return (
        <section id='proyectos'>
            <div className='title-section'> <h3>Proyectos</h3><span className='arrow'>→</span></div>
            {proyectos.map((proyecto, index) => (
                      <div whileHover={{ scale: 1.02 }}>
                <div
                    className="card-projects"
                    key={proyecto.id}
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={() => handleLeave(index)}
                > 
             
                    <div className="card-projects-img">
                        <video
                            className='video-project'
                            loop
                            muted
                            autoPlay
                            src={proyecto.video}
                            ref={videoRefs.current[index]}
                        ></video>   
                      
                    </div>
                   <div className='card-projects-description'>
                            <div>   
                                <h3>{proyecto.title}</h3>
                                <p>{proyecto.description}</p>
                            </div>
                             <div className='card-projects-skills'>
                                <div className='skill'> <div className='skill-img'><img src={proyecto.skill1} alt="Skill" /></div> <h4>{proyecto.skill1name}</h4></div>
                                <div className='skill'> <div className='skill-img'><img src={proyecto.skill2} alt="Skill" /></div> <h4>{proyecto.skill2name}</h4> </div>
                                <div className='skill'> <div className='skill-img'><img src={proyecto.skill3} alt="Skill" /></div> <h4>{proyecto.skill3name}</h4></div>
                                <div className='skill'> <div className='skill-img'><img src={proyecto.skill4} alt="Skill" /></div> <h4>{proyecto.skill4name}</h4></div>
                                <div className='skill'> <div className='skill-img'><img src={proyecto.skill5} alt="Skill" /></div> <h4>{proyecto.skill5name}</h4></div>
                            </div>
                            <div className='link-ver-sitio'><a className='ver-sitio' href={proyecto.link}>Ver sitio</a>
                                </div>
                        </div>   
                    
                    </div></div>
                ))}

        </section>
    )
}

export default Proyectos