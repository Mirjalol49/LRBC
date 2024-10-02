import React from "react";

import Building2 from "../../../../images/building2.jpg";

import "./WhyChoose.css";
const WhyChoose = () => {
  return (
    <section className="why-section">
      <div className="container">
        <div className="why-wrapper">
          <img className="why-img1" src={Building2} alt="building" />

          <div className="why-text-wrapper">
            <h2 className="why-title">
              O‘zbekistonning kelajagini qurish: L-R-B-CONSTRUCTION bilan 22
              yillik mukammallik, innovatsiya va ishonch yo‘li
            </h2>
            <p className="why-text">
              "L-R-B-CONSTRUCTION" MCHJ 22 yillik tajribaga ega bo‘lgan yetakchi
              qurilish kompaniyasidir. Metall konstruksiyalarga ixtisoslashgan
              holda, biz "IT-Park" va "Toshkent Chinni Zavodi" kabi yirik
              loyihalarni muvaffaqiyatli amalga oshirganmiz. Ishlarni o‘z
              vaqtida va yuqori sifatda bajarish bo‘yicha obro‘ga ega bo‘lib,
              O‘zbekiston bo‘ylab davlat va xususiy sektorlarga xizmat
              ko‘rsatamiz. Bizning tajribamiz, moslashuvchan narxlarimiz va
              mukammallikka intilishimiz mijozlar uchun ishonchli tanlov
              bo‘lishimizni ta’minlaydi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
