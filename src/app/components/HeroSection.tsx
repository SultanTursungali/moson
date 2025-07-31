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
    <section className="relative w-full overflow-hidden">
      {/* Адаптивный отступ сверху под хедер */}
      <div className="h-[70px] sm:h-[80px] md:h-[90px] lg:h-[120px] xl:h-[135px]" />
      
      {/* Контейнер для изображения */}
      <div className="relative w-full">
        {/* Фоновое изображение */}
        <img
          src="/moson.gif"
          alt="moson background"
          className="w-full h-auto block min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] object-cover"
          draggable={false}
        />
        
        {/* Градиентный оверлей */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent" />
        
        {/* Контент поверх изображения */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end">
          <div className="relative z-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 pb-6 sm:pb-8 md:pb-12 lg:pb-16 xl:pb-20">
            
            {/* Контейнер контента */}
            <div className="flex flex-col lg:flex-row lg:items-end w-full gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              
              {/* Заголовок */}
              <div className="flex-1 lg:mb-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-[#EAF8FF] mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-[1.15] md:leading-[1.2]">
                  {texts[lang].title}
                </h1>
              </div>
              
              {/* Описание и кнопка */}
              <div className="w-full lg:max-w-md xl:max-w-lg 2xl:max-w-xl lg:ml-auto">
                <p className="text-[#EAF8FF] opacity-70 mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-[1.5] sm:leading-[1.6]">
                  {texts[lang].desc}
                </p>
                
                <button className="bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-[12px] hover:bg-gray-200 transition-colors duration-200 font-semibold text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-auto">
                  {lang === "ru" ? "Вступить" : lang === "en" ? "Join" : "Қосылу"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;