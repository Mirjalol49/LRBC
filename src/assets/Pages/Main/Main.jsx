import React from "react";
import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";
import { ServicesSec } from "./ServicesSec/ServicesSec";

const Main = () => {
  return (
    <main>
      <Hero />
      <ServicesSec />
      <WhyChoose />
    </main>
  );
};

export default Main;
