import React, { useEffect } from 'react'
import Header from '../components/Header'
import ContactOverlayForm from '../components/Contact/form'
import FooterSplit from '../components/Footer'

function Contact() {

  // 👇 Page open aana udane browser title set aagum
  useEffect(() => {
    document.title = "Contact Us | Botinaa – Pudhukottai";
  }, []);

  return (
    <div>
      <Header/>
      <ContactOverlayForm/>
      <FooterSplit/>
    </div>
  )
}

export default Contact
