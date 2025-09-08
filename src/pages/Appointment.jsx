import React, { useEffect } from 'react'
import AppointmentSection from '../components/Appointment/form'
import Header from '../components/Header'
import FooterSplit from '../components/Footer'

export default function Appointment() {

  // 👇 Page load aana udane title set aagum
  useEffect(() => {
    document.title = "Book Appointment | Botinaa – Pudhukottai";
  }, []);

  return (
    <div>
      <Header/>
      <AppointmentSection/>
      <FooterSplit/>
    </div>
  )
}
