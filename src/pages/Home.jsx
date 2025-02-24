import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Events from '../components/Events'
import Schedule from '../components/Schedule'
import Registration from '../components/Registration'
import Gallery from '../components/Gallery'
import Sponsors from '../components/Sponsors'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-900"> 
      <main>
        <Hero />
        <About />
        <Events />
        <Schedule />
        <Registration />
        <Gallery />
        <Sponsors />
        <Contact />
      </main>
    </div>
  )
}

export default Home;
