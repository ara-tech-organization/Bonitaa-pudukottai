import React, { useEffect } from 'react'
// import Header from '../components/Header'
import HeroSection from '../components/Home/Herosection'
import CardSlider from '../components/Home/Treatment'
import AboutUs from '../components/Home/About'
import HowWeWork from '../components/Home/ourwork'
import StatsSection from '../components/Home/True'
import WhyChooseUs from '../components/Home/whyuse'
import AppointmentSection from '../components/Home/Form'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Home() {

  // 👇 Page load aana udane title set aagum
  useEffect(() => {
    document.title = "Home | Botinaa – Pudhukottai";
  }, []);

  return (
    <div>
      <Header/>
      <HeroSection/>
      <CardSlider/>
      <AboutUs/>
      <HowWeWork/>
      <StatsSection/>
      <WhyChooseUs/>
      <AppointmentSection/>
      <Footer/>
    </div>
  )
}

export default Home
