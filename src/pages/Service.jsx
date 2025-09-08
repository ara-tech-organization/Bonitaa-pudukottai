import React, { useEffect } from "react";
import Header from "../components/Header";
import SkinHairSection from "../components/Service/Servicesection";
import FooterSplit from "../components/Footer";
import FaqDropdown from "../components/Service/FAQ";

function Service() {

  // 👇 Page load aana udane title set aagum
  useEffect(() => {
    document.title = "Our Services | Botinaa – Pudhukottai";
  }, []);

  return (
    <div>
      <Header />
      <SkinHairSection />
      <FaqDropdown />
      <FooterSplit />
    </div>
  );
}

export default Service;
