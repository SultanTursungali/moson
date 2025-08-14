"use client";
import React from "react";
import "@/app/globals.css";
import { useLanguage } from "@/app/context/LangContext";

const texts = {
  ru: {
    title: "Великая ложа Казахстана",
    desc: "Великая ложа Казахстана Grand Lodge of Qazaqstan ООО Великая ложа Казахстана — единственная регулярная и общепризнанная масонская организация в Республике Казахстан с 2016 года",
    joinButton: "Вступить"
  },
  en: {
    title: "Grand Lodge of Kazakhstan",
    desc: "Grand Lodge of Kazakhstan — the only regular and recognized Masonic organization in the Republic of Kazakhstan since 2016",
    joinButton: "Join"
  },
  kz: {
    title: "Қазақстанның Ұлы Ложасы",
    desc: "Қазақстанның Ұлы Ложасы — Қазақстан Республикасындағы жалғыз мойындалған масондық ұйым (2016 жылдан бастап)",
    joinButton: "Қосылу"
  },
};

const HeroSection = () => {
  const { lang } = useLanguage();
  const t = texts[lang];

  return (
    <section 
      className="relative w-full mt-[30px] sm:mt-[60px] md:mt-[70px] lg:mt-[110px] xl:mt-[130px] h-[90vh] sm:h-[85vh] md:h-[85vh] lg:h-[90vh] xl:h-[90vh]"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[80px] lg:rounded-t-[100px]" />
      <img 
        src="/moson.gif" 
        alt="Масоны Казахстана" 
        className="w-full h-screen object-cover"
        draggable={false}
        loading="eager"
        decoding="async"
        onError={(e) => {
          console.log('GIF loading error, trying fallback');
          (e.target as HTMLImageElement).src = '/bg.jpg';
        }}
        onLoad={() => {
          console.log('GIF loaded successfully');
        }}
      />
      <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />
      <div className="absolute inset-0 z-20 flex flex-col justify-end md:justify-center lg:justify-end px-4 md:px-12 pb-12 sm:pb-20 md:pb-16 lg:pb-20">
        <div className="flex flex-col md:flex-row w-full items-start md:items-end justify-between gap-4 md:gap-8">
          <div className="md:max-w-[55%]">
            <h1 
              id="hero-title"
              className="text-white text-2xl sm:text-3xl md:text-5xl font-light leading-tight mb-4 md:mb-0"
            >
              {t.title}
            </h1>
          </div>
          <div className="md:max-w-[40%] w-full">
            <p className="text-white/80 text-sm sm:text-base md:text-lg font-light mb-4 leading-relaxed">
              {t.desc}
            </p>
            <button 
              className="w-full md:w-auto bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-xl hover:bg-gray-200 transition font-semibold text-sm md:text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black/40"
              type="button"
              aria-describedby="hero-title"
            >
              {t.joinButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;