import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <nav className="navbar">
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
  );
};

export default Navbar;
