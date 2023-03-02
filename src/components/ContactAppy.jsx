import React from 'react'

const ContactAppy = () => {
  return (
    <section className='flex flex-col text-xl md:text-2xl mb-2'>
        <h2 className='underline decoration-green underline-offset-4 font-semibold w-[95%] m-auto'>Application Process</h2>
        <ul className='w-[90%] m-auto'>
            <li className='py-2'>For an in-person application process, walk into Burger Street and meet the restaurant manager between 2:00PM - 5:00PM.</li>
            <li>For an online application process, you have the choice of either filling out the application <a href='https://www.burgerstreet.com/Application.pdf' target='_blank' rel='noopener noreferrer' className='underline decoration-green underline-offset-2'>PDF file</a> and submitting it to 'careers@burgerstreet.com', or sending your resume via email to 'careers@burgerstreet.com'.</li>
        </ul>
    </section>
  )
}

export default ContactAppy
