import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Nabvar/Navbar'
import Social from '../Social/Social'

const Left = () => {
  return (
    <div className="col-md-6 left-section">
      <Header />
      <Navbar />
      <Social/>
    </div>
  )
}

export default Left