"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LangContext";

const texts = {
  ru: {
    position: "Великий Мастер Великой Ложи Казахстана",
    name: "Айдар Алпысбай",
    quote: "Добродетель — это основа нашей морали и этики. Пусть честность, справедливость и доброта будут твоими постоянными ориентирами. В каждом действии и решении стремись к высокому стандарту морали, отражая внутреннюю чистоту и уважение к окружающим.",
  },
  en: {
    position: "Grand Master of Grand Lodge of Kazakhstan",
    name: "Aidar Alpysbay",
    quote: "Virtue is the foundation of our morality and ethics. Let honesty, justice and kindness be your constant guides. In every action and decision, strive for a high standard of morality, reflecting inner purity and respect for others.",
  },
  kz: {
    position: "Қазақстанның Ұлы Ложасының Ұлы Мастері",
    name: "Айдар Алпысбай",
    quote: "Добродетель — біздің моральдық және этикалық негізіміз. Адалдық, әділеттілік және мейірімділік сіздің тұрақты бағдарыңыз болсын. Әрбір іс-қимылда және шешімде жоғары моральдық стандартқа ұмтылыңыз, ішкі тазалық пен басқаларға деген құрметті көрсетіңіз.",
  },
};

export default function InfoSection() {
  const { lang } = useLanguage();

  return (
    <section className="w-full relative overflow-hidden rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[80px] lg:rounded-t-[100px]">
      {/* Адаптивная высота секции */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] 2xl:h-[1000px]">
        
        {/* Фоновое изображение */}
        <div className="absolute inset-0 z-0 overflow-hidden w-full h-full pointer-events-none">
          <Image
            src="/master.png"
            alt="Grand Master background"
            fill
            priority
            className="object-cover object-center rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[80px] lg:rounded-t-[100px]"
            style={{ zIndex: 0 }}
            sizes="100vw"
          />
          
          {/* Градиентный оверлей */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[80px] lg:rounded-t-[100px]" />
        </div>

        {/* Контент */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24">
          
          {/* Должность */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#EAF8FF] opacity-80 mb-2 sm:mb-3 md:mb-4 font-light tracking-wide">
            {texts[lang].position}
          </p>
          
          {/* Имя */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#EAF8FF] mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-tight">
            {texts[lang].name}
          </h2>
          
          {/* Цитата */}
          <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#EAF8FF] opacity-90 font-light leading-relaxed sm:leading-relaxed md:leading-loose">
              {texts[lang].quote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}