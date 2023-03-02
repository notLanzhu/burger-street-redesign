import React, { Suspense, lazy } from 'react'
const Hero = lazy(() => import('./Hero'));
const Intro = lazy(() => import('./Intro'));
const Hours = lazy(() => import('./Hours'))

const Home = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading Content...</div>}>
        <Hero />
        <Intro />
        <Hours />
      </Suspense>
    </main>
  )
}

export default Home
