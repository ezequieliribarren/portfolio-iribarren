import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeOffcanvas() {
    var offcanvas = document.getElementById('offcanvasNavbar');
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
  }

  // Función para manejar los clics en los elementos del menú
  function handleItemClick(sectionId) {
    // Aquí puedes agregar lógica personalizada si es necesario
    console.log("Se hizo clic en:", sectionId);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <nav className="navbar-desktop">
        <ul>
          <Link smooth to="#sobre-mi">
            <li className={`nav-item ${selectedItem === 'sobre-mi' ? 'active' : ''}`} onClick={() => handleItemClick('sobre-mi')}>
              <div className='line'></div>
              SOBRE MI
            </li>
          </Link>
          <Link smooth to="#proyectos">
            <li className={`nav-item ${selectedItem === 'proyectos' ? 'active' : ''}`} onClick={() => handleItemClick('proyectos')}>
              <div className='line'></div>
              PROYECTOS
            </li>
          </Link>

          <Link smooth to="#formacion">
            <li className={`nav-item ${selectedItem === 'formacion' ? 'active' : ''}`} onClick={() => handleItemClick('formacion')}>
              <div className='line'></div>
              FORMACION
            </li>
          </Link>
          <Link smooth to="#curriculum">
            <li className={`nav-item ${selectedItem === 'curriculum' ? 'active' : ''}`} onClick={() => handleItemClick('curriculum')}>
              <div className='line'></div>
              CURRICULUM
            </li>
          </Link>
          <Link smooth to="#contacto">
            <li className={`nav-item ${selectedItem === 'contacto' ? 'active' : ''}`} onClick={() => handleItemClick('contacto')}>
              <div className='line'></div>
              CONTACTO
            </li>
          </Link>
        </ul>
      </nav>






    </>

  );
};

export default Navbar;
