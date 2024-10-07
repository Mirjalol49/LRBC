/* eslint-disable no-unused-vars */
import React from "react";
import "./Steps.css";
const Steps = () => {
  return (
    <section className="steps-section">
      <div className="container">
        <h2 className="text-7xl leading-snug font-medium mb-10">
          G‘oyadan muvaffaqiyatgacha: Bizning tizimli yondashuvimiz
        </h2>
        <div className="steps-wrapper">
          <div className="steps-box">
            <p className="text-8xl text-blue-600 font-medium mb-5">01</p>
            <h3 className="text-6xl mb-5">G‘oya yaratish</h3>
            <p className="text-2xl">
              Ushbu bosqichda biz sizning ehtiyojlaringizga mos keladigan ijodiy
              g‘oyalarni o‘ylab topamiz va rivojlantiramiz. Bunda har bir loyiha
              mustahkam va innovatsion poydevorga ega bo‘lishini ta’minlaymiz.
            </p>
          </div>
          <div className="steps-box">
            <p className="text-8xl text-blue-600 font-medium mb-5">02</p>
            <h3 className="text-6xl mb-5">Rejalashtirish & Dizayn</h3>
            <p className="text-2xl">
              Bu yerda tasavvur haqiqatga aylanadi! Biz sizning g‘oyalaringizni
              hayotga tatbiq etadigan batafsil va zamonaviy loyihalarni
              yaratamiz, har bir rejaning muvaffaqiyat uchun poydevor bo‘lishini
              kafolatlaymiz.
            </p>
          </div>
        </div>

        <div className="steps-wrapper">
          <div className="steps-box">
            <p className="text-8xl text-blue-600 font-medium mb-5">03</p>
            <h3 className="text-6xl mb-5">Natija olish</h3>
            <p className="text-2xl">
              Loyihangizning poydevordan boshlab ko‘tarilib, chizmalardan
              haqiqatga aylanishini kuzating. Har bir g‘isht terilishi va har
              bir mayda detal mukammallashtirilishi bilan, yakuniy natija
              taassurot qoldiradigan va uzoq vaqt xizmat qiladigan inshootga
              aylanadi.
            </p>
          </div>

          <div className="steps-box">
            <p className="text-8xl text-blue-600 font-medium mb-5">04</p>
            <h3 className="text-6xl mb-5">Loyihani Tekshirish</h3>
            <p className="text-2xl">
              Biz yakuniy topshirishdan oldin chidamlilik, xavfsizlik va
              benuqson ishlashni ta’minlash uchun loyihaning har bir jihatini
              qat’iy sinovdan o‘tkazamiz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
