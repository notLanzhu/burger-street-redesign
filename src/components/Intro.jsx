import React from 'react'
import MadeToOrderImg from '../assets/MadeToOrder.jpg'
import Chef from '../assets/Chef.jpg'

const Intro = () => {
  return (
    <>
        <section className='flex flex-col md:flex-row font-display'>
            <img loading='lazy' src={MadeToOrderImg} alt='Grilling beef patties' className='max-h-[100%] max-w-[100%]'></img>
            <div className='grid place-content-center w-full'>
                <h3 className='text-xl md:text-2xl w-[90%] m-auto underline decoration-red underline-offset-[0.5rem] py-1'>Each meal made to order.</h3>
                <p className='text-md md:text-xl w-[90%] m-auto py-1'>The grilling and frying starts once you place your order, ensuring the juicy and delicous patties we offer. The potatoes coming out crispy and fried to perfection, giving you that crunch yet softness in your mouth.</p>
            </div>
        </section>
        <section className='flex flex-col md:flex-row font-display'>
            <div className='text-white bg-black grid place-content-center w-full'>
                <h3 className='text-xl md:text-2xl w-[90%] m-auto underline decoration-orange underline-offset-[0.5rem] py-1'>What is Burger Street?</h3>
                <p className='text-md md:text-xl w-[90%] m-auto py-1'>Burger Street is a family owned quick serve burger chain dating back to 1985. We are proud of keeping Bill Waugh's philsophy of quality and quickness for generations to come.</p>
            </div>
            <img loading='lazy' src={Chef} alt='chef' className='max-h-[100%] max-w-[100%]'></img>
        </section>    
    </>
  )
}

export default Intro
