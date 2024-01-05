import React from 'react';
import { motion } from 'framer-motion';
import SobreMi from "../SobreMi/SobreMi";
import Proyectos from '../Proyectos/Proyectos';
import Contacto from '../Contacto/Contacto';
import Curriculum from '../Curriculum/Curriculum';
import Formacion from '../Formacion/Formacion';

const Right = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.main
      className='right-section'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div whileHover={{ scale: 1.05 }}>
        <SobreMi />
      </motion.div>
        <Proyectos />
        <Formacion />
        <Curriculum />
        <Contacto />
    </motion.main>
  );
};

export default Right;
