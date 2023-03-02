import React, { Suspense, lazy } from 'react'
const LocationNav = lazy(() => import('./LocationNav'));
const TexasLocations = lazy(() => import('./TexasLocations'));
const OklahomaLocations = lazy(() => import('./OklahomaLocations'));

const Location = () => {
  return (
    <main className='font-display'>
        <Suspense fallback={<div>Loading Content...</div>}>
            <div className='flex justify-center bg-black text-orange p-2 top-16 text-xl md:text-2xl'>
                <LocationNav />
            </div>
            <section name='section1' className=''>
                <TexasLocations />
            </section>
            <section name='section2' className=''>
                <OklahomaLocations />
            </section>
        </Suspense>
    </main>
  )
}

export default Location
