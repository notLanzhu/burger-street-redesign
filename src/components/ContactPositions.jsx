import React from 'react'

const ContactPositions = () => {
  return (
    <section className='flex flex-col text-xl md:text-2xl bg-green py-2 mb-2'>
        <h2 className='underline decoration-white text-white underline-offset-4 font-semibold w-[95%] m-auto'>Available Positions</h2>
        <h3 className='w-[95%] m-auto font-semibold text-orange'>「Now Hiring Part-Time and Full-Time!」</h3>
        <ul className='w-[90%] m-auto text-white'>
            <li>Cashier</li>
            <li>Cook</li>
            <li>Manager</li>
            <li>Supervisor</li>
        </ul>
    </section>
  )
}

export default ContactPositions
