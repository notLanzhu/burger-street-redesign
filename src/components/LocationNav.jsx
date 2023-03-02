import React from 'react'
import { Link } from 'react-scroll'

const LocationNav = () => {
  return (
    <>
        <Link to="section1" spy={true} smooth={true} offset={-120} duration={500} className='mx-8 cursor-pointer'>Texas</Link>
        <Link to="section2" spy={true} smooth={true} offset={-105} duration={500} className='mx-8 cursor-pointer'>Oklahoma</Link>
    </>
  )
}

export default LocationNav
