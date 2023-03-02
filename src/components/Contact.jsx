import React, { Suspense, lazy } from 'react'
const ContactInfo = lazy(() => import('./ContactInfo'));
const ContactWhy = lazy(() => import('./ContactWhy'));
const ContactBenefits = lazy(() => import('./ContactBenefits'));
const ContactPositions = lazy(() => import('./ContactPositions'));
const ContactApply = lazy(() => import('./ContactAppy'));

const Contact = () => {
  return (
    <main className='font-display'>
        <Suspense fallback={<div>Loading Content...</div>}>
            <ContactInfo />
            <ContactWhy />
            <ContactBenefits />
            <ContactPositions />
            <ContactApply />
        </Suspense>
    </main>
  )
}

export default Contact
