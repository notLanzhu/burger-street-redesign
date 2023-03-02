import React from 'react'
import HeroImage from '../assets/HeroImg.jpg'

const Hero = () => {
  return (
    <section>
        <div className='flex flex-col md:flex-row font-display'>  
            <div className='flex flex-col items-center min-w-[20rem] max-w-[100%] m-auto pb-2'>
                <h2 className='text-xl md:text-2xl pb-1 md:pb-2 xl:text-3xl xl:pb-4'><span className='text-green font-semibold'>Fresh</span> + <span className='text-orange font-semibold'>Grilled</span> = <span className='text-red font-semibold'>Perfection</span></h2>

                <p className='text-md md:text-xl pb-1 md:pb-2 w-[70%] md:w-[90%] xl:max-w-[50%] xl:text-2xl xl:pb-4'>Take a trip down to Burger Street and get your hands on one of our finest, 1/3 pound beef burgers.</p>

                <button className='md:text-2xl text-green border-solid border-green border-2 bg-white px-2 rounded-md hover:bg-green hover:text-white hover:transition-[0.25s] hover:ease-in transition-[0.25s] uppercase max-w-[100%] mb-2'><a href='https://www.doordash.com/business/12023/?utm_source=partner-link&utm_medium=website&utm_campaign=12023' rel='noopener noreferrer' target='_blank'>Start an Order</a></button>
                <button className='md:text-2xl text-green border-solid border-green border-2 bg-white px-2 rounded-md hover:bg-green hover:text-white hover:transition-[0.25s] hover:ease-in transition-[0.25s] uppercase max-w-[100%]'><a href='https://www.ezcater.com/brand/pvt/burger-street-beefy-burgers' rel='noopener noreferrer' target='_blank'>Catering</a></button>
            </div>
            <div>
                <img src={HeroImage} alt='burger' loading='lazy' className='max-w-[100%] max-h-[100%] m-auto'></img>
            </div>
        </div>
        <div className='bg-green w-full py-1 text-center font-display'>
            <h3 className='text-md text-white xl:text-xl'>Loved by fellow Texans since 1985!</h3>
        </div>
    </section>
  )
}

export default Hero
