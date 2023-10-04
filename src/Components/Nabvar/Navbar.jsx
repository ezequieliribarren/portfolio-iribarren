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
          <a>SOBRE MI</a>
          </li>
        </Link>
        <Link smooth to="#proyectos">
          <li className={`nav-item ${selectedItem === 'proyectos' ? 'active' : ''}`} onClick={() => handleItemClick('proyectos')}>
            <div className='line'></div>
          <a>PROYECTOS</a>
          </li>
        </Link>
        <Link smooth to="#experiencia">
          <li className={`nav-item ${selectedItem === 'experiencia' ? 'active' : ''}`} onClick={() => handleItemClick('experiencia')}>
          <div className='line'></div>
            <a>EXPERIENCIA</a>
          </li>
        </Link>
        <Link smooth to="#experiencia">
          <li className={`nav-item ${selectedItem === 'experiencia' ? 'active' : ''}`} onClick={() => handleItemClick('experiencia')}>
          <div className='line'></div>
            <a>CONTACTO</a>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
