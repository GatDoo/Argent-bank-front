import React from "react";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";

function Accueil() {
  return (
    <>
      <Header />
      <Banner />
      <Content />
      <Footer />
    </>
  );
}

export default Accueil;