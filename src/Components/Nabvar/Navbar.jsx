import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    closeOffcanvas();
  };

  const closeOffcanvas = () => {
    const offcanvas = document.querySelector('.offcanvas.offcanvas-end');
    if (offcanvas && offcanvas.classList.contains('show')) {
      const closeButton = offcanvas.querySelector('.btn-close');
      if (closeButton) {
        closeButton.click();
      }
    }
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

    <nav class="navbar bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img className='nav-logo' src="images/ei.png" alt="" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <Link smooth to="#sobre-mi">
                  <li className="nav-item" onClick={() => handleItemClick('sobre-mi')}>
                    SOBRE MI
                  </li>
                </Link>
          <Link smooth to="#proyectos">
          <li className="nav-item">
            PROYECTOS
          </li>
        </Link>
          <Link smooth to="#formacion">
          <li className="nav-item">
            FORMACION
          </li>
        </Link>
        <Link smooth to="#curriculum">
          <li className="nav-item">
            CURRICULUM
          </li>
        </Link>
        <Link smooth to="#contacto">
        <li className="nav-item">
            CONTACTO
          </li>
        </Link>
        </ul>
      </div>
    </div>
  </div>
</nav>
    </>

  );
};

export default Navbar;
