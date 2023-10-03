import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (section) => {
        setSelectedButton(section);
        // Puedes personalizar la duración, el desplazamiento y otras opciones aquí
        scroll.scrollTo(section, {
            duration: 800,
            offset: -50, // Ajusta el valor de compensación según sea necesario
            smooth: 'easeInOutQuad', // Tipo de animación
        });
    };

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <Link
                    to="experiencia"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={800}
                    onClick={() => handleButtonClick('experiencia')}
                >
                    <li className={`navbar-item ${selectedButton === 'experiencia' ? 'active' : ''}`}>

                        Experiencia

                    </li>
                </Link>
                <li className={`navbar-item ${selectedButton === 'sobre-mi' ? 'active' : ''}`}>
                    <Link
                        to="sobre-mi"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={800}
                        onClick={() => handleButtonClick('sobre-mi')}
                    >
                        Sobre mí
                    </Link>
                </li>
                <li className={`navbar-item ${selectedButton === 'proyectos' ? 'active' : ''}`}>
                    <Link
                        to="proyectos"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={800}
                        onClick={() => handleButtonClick('proyectos')}
                    >
                        Proyectos
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
