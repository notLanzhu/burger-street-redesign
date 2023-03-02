import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

const Hours = () => {
  const [hourIntersecting, setHourIntersecting] = new useState();

  const hourRef = useRef();

  const fadeIn = (ele) => {
    gsap.to(ele, {opacity: 1, x: 0, ease: 'power3', duration: 0.25, clearProps: 'all'});
  };

  const fadeOut = (ele) => {
    gsap.to(ele, {opacity: 0, x: -20, ease: 'power3'});
  };

  let options = {
    root: null,
    rootMargin: '0px',
    threshold: '0.2'
  }
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHourIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(hourRef.current);
    
    console.log(hourIntersecting)

    hourIntersecting ? fadeIn(hourRef.current) : fadeOut(hourRef.current);
  },[hourIntersecting]);

  return (
    <section ref={hourRef} className='grid place-content-center text-center font-display leading-10 py-1 -z-10'>
      <h2 className='text-xl md:text-2xl underline decoration-green underline-offset-[0.5rem]'>Business Hours</h2>
      <p className='text-md md:text-xl'>We are open 7 days a week</p>
      <p className='text-md md:text-xl'>Sunday to Saturday:</p>
      <p className='text-md md:text-xl'>10am to 10pm</p>
      <br/>
      <h2 className='text-xl md:text-2xl underline decoration-green underline-offset-[0.5rem]'>Customer Support Hours:</h2>
      <p className='text-md md:text-xl'>Available 5 days a week</p>
      <p className='text-md md:text-xl'>Monday to Friday:</p>
      <p className='text-md md:text-xl'>8am to 5pm</p>
      <p className='text-md md:text-xl'>Number: 800-975-8818</p>
      <Link to='/Contact' className='text-md md:text-xl text-green'>Our Contact Page</Link>
  </section>
  )
}

export default Hours;
