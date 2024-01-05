import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Nabvar/Navbar'
import Social from '../Social/Social'

const Left = () => {
  return (

    <div className="left-section">
    <div className="col-md-5 left-section">
      <Header />
      <Navbar />
      <Social/>
    </div>
    </div>
  )
}

export default Left