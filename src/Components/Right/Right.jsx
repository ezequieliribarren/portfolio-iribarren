import React from 'react'
import SobreMi from "../SobreMi/SobreMi"
import Proyectos from '../Proyectos/Proyectos'
import Contacto from '../Contacto/Contacto'
import Curriculum from '../Curriculum/Curriculum'
import Formacion from '../Formacion/Formacion'

const Right = () => {
 
  return (
    <main className='right-section'>
      <SobreMi />
      <Proyectos />
      <Formacion/>
      <Curriculum/>
      <Contacto />
    </main>
  )
}

export default Right