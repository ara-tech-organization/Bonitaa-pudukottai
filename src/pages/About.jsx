import React, { useEffect } from 'react'
import StatsSection from '../components/Home/True'
import Header from '../components/Header'
import FooterSplit from '../components/Footer'
import HowWeWork from '../components/About/ourwork'
import SkinHairSection from '../components/About/solution'
import TestimonialCarousel from '../components/About/Testionimal'
import VisionMissionSection from '../components/About/about'
import TreatmentTabs from '../components/About/weare'

function About() {

  // 👇 Page open aana udane title set aagum
  useEffect(() => {
    document.title = "About Us | Botinaa – Pudhukottai";
  }, []);

  return (
    <div>
      <Header/>
      <VisionMissionSection/>
      <TreatmentTabs/>
      <SkinHairSection/>
      <HowWeWork/>
      <StatsSection/>
      <TestimonialCarousel/>
      <FooterSplit/>
    </div>
  )
}

export default About
