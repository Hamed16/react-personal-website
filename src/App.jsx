import React from 'react'
import './index.css'
import Header from './components/Header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'


const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Portfolio />
            <Testimonials />
            <Footer />
        </>
    )
}

export default App