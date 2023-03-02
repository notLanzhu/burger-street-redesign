import React from 'react'

const ContactInfo = () => {
  return (
    <section className='flex flex-col text-xl md:text-2xl mb-2'>
        <h2 className='underline decoration-green font-semibold underline-offset-4 w-[95%] m-auto'>Contact Information</h2>
        <h3 className='font-semibold w-[95%] m-auto'>Customer Service Email:</h3>
        <p className='w-[90%] m-auto'>customerservice@burgerstreet.com</p>
        <h3 className='font-semibold w-[95%] m-auto'>Application Email:</h3>
        <p className='w-[90%] m-auto'>careers@burgerstreet.com</p>
        <h3 className='font-semibold w-[95%] m-auto'>Phone:</h3>
        <p className='w-[90%] m-auto'>(800)-975-8818</p>
    </section>
  )
}

export default ContactInfo
