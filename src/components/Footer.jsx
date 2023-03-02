import React from 'react'

const Footer = () => {
  return (
    <section className='bg-green py-1 flex justify-center gap-2'>
      <p className='text-white text-xs md:text-sm'>Burger Street. All Rights Reserved.</p>
      <a href='https://twitter.com/burgerstcorp/' rel='noopener noreferrer' target='_blank' className='text-white text-xs md:text-sm underline'>Twitter</a>
      <a href='https://www.facebook.com/burgerstreetcorp' rel='noopener noreferrer' target='_blank' className='text-white text-xs md:text-sm underline'>Facebook</a>
    </section>
  )
}

export default Footer
