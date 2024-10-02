import React from "react";
import "./Hero.css";
import Button from "../../../Components/Button/Button";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title">SIFAT VA ISHONCH</h1>
        <p className="hero-text">
          Biz sifat va innovatsiyalarga ustuvor ahamiyat beramiz, har bir
          loyihada ishonch va ishonchlilik kabi qadriyatlarimiz aks etishini
          ta’minlaymiz.
        </p>
        <Button />
      </div>
    </section>
  );
};

export default Hero;
