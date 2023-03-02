import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home'));
const Menu = lazy(() => import('./components/Menu'));
const Location = lazy(() => import('./components/Location'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
    return(
        <div>
        <BrowserRouter>
            <Suspense fallback={<div>Loading Content...</div>}>
            <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/Menu' element={<Menu />} />
                    <Route path='/Location' element={<Location />} />
                    <Route path='/Contact' element={<Contact />} />
                </Routes>
                <Footer />
            </Suspense>
        </BrowserRouter>
        </div>
    )
}

export default App;