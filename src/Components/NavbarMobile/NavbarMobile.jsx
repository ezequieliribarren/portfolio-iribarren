import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarMobile = () => {
    return (
        <nav className="navbar bg-dark fixed-top navbar-mobile">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img classNameName='nav-logo' src="images/ei.png" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <Link smooth to="#sobre-mi">
                                <li className="nav-item" onClick={() => { handleItemClick('sobre-mi'); closeOffcanvas(); }}>
                                    SOBRE MI
                                </li>
                            </Link>
                            <Link smooth to="#proyectos">
                                <li className="nav-item" onClick={() => { handleItemClick('sobre-mi'); closeOffcanvas(); }}>
                                    PROYECTOS
                                </li>
                            </Link>
                            <Link smooth to="#formacion">
                                <li className="nav-item" onClick={() => { handleItemClick('sobre-mi'); closeOffcanvas(); }}>
                                    FORMACION
                                </li>
                            </Link>
                            <Link smooth to="#curriculum">
                                <li className="nav-item" onClick={() => { handleItemClick('sobre-mi'); closeOffcanvas(); }}>
                                    CURRICULUM
                                </li>
                            </Link>
                            <Link smooth to="#contacto">
                                <li className="nav-item" onClick={() => { handleItemClick('sobre-mi'); closeOffcanvas(); }}>
                                    CONTACTO
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarMobile
