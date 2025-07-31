"use client";

import React from "react";
import "@/app/globals.css";
import { useLanguage } from "../context/LangContext";

const texts = {
  ru: {
    title: "Великая ложа Казахстана",
    desc: "Великая ложа Казахстана Grand Lodge of Qazaqstan ООО Великая ложа Казахстана — единственная регулярная и общепризнанная масонская организация в Республике Казахстан с 2016 года",
  },
  en: {
    title: "Grand Lodge of Kazakhstan",
    desc: "Grand Lodge of Kazakhstan — the only regular and recognized Masonic organization in the Republic of Kazakhstan since 2016",
  },
  kz: {
    title: "Қазақстанның Ұлы Ложасы",
    desc: "Қазақстанның Ұлы Ложасы — Қазақстан Республикасындағы жалғыз мойындалған масондық ұйым (2016 жылдан бастап)",
  },
};

const HeroSection = () => {
  const { lang } = useLanguage();

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ marginTop: "90px" }}
    >
      {/* Гифка задаёт высоту секции */}
      <img
        src="/moson.gif"
        alt="moson background"
        className="w-full h-auto block"
        draggable={false}
        style={{ display: "block" }}
      />
      {/* Контент поверх гифки */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end">
        <div className="relative z-20 px-4 md:px-8 pb-8 md:pb-16 flex flex-col md:flex-row md:items-end w-full mt-auto">
          <div className="flex-1 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-light text-[#EAF8FF] mb-4 leading-[1.2]">
              {texts[lang].title}
            </h1>
          </div>
          <div className="max-w-full md:max-w-md ml-0 md:ml-auto">
            <p className="text-[#EAF8FF] opacity-70 mb-4 text-base md:text-lg font-light leading-[1.6]">
              {texts[lang].desc}
            </p>
            <button className="bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded-[12px] hover:bg-gray-200 transition font-semibold text-base md:text-lg">
              {lang === "ru" ? "Вступить" : lang === "en" ? "Join" : "Қосылу"}
            </button>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent rounded-[80px]" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
