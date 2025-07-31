"use client";
import Image from 'next/image';
import React from 'react';
import { useLanguage } from '../context/LangContext';

const translations = {
  ru: {
    title: "Уважаемые читатели!",
    description: "На территории Республики Казахстан вы можете посетить сайт только одной постоянной организации — Казахской Высшей ложи (КЛ), признанной и занимающейся работой со стороны постоянных высших лож мира. Хранитель древних традиций ордена Свободных каменщиков (масонов) и содействующий широкому распространению масонского света в нашей стране и других государствах."
  },
  en: {
    title: "Dear Readers!",
    description: "On the territory of the Republic of Kazakhstan, you can visit the website of only one permanent organization — the Grand Lodge of Kazakhstan (GLK), recognized and working with permanent grand lodges around the world. Guardian of ancient traditions of the Order of Free and Accepted Masons (Freemasons) and promoting the widespread dissemination of Masonic light in our country and other states."
  },
  kz: {
    title: "Құрметті оқырмандар!",
    description: "Қазақстан Республикасының аумағында сіз тек бір тұрақты ұйымның веб-сайтын - әлемнің тұрақты ұлы ложаларымен мойындалған және жұмыс істейтін Қазақстанның Ұлы Ложасына (ҰЛД) барысыз. Еркін және Қабылданған Тас қалаушылар (Масондар) орденінің ежелгі дәстүрлерінің сақшысы және біздің елімізде және басқа мемлекеттерде масондық жарықтың кең таралуына ықпал етуші."
  }
};

export default function MasonicSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <main className="relative w-full min-h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/backReaders.jpg"
          alt="Фоновое изображение"
          fill
          className="object-cover z-0"
          style={{ filter: 'brightness(1.1) ' }}
          priority
        />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent"></div>
      </div>
      <div className="relative z-20 flex items-end justify-center min-h-screen px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center max-w-3xl mx-auto relative">
          <div className="absolute inset-2 -mx-20 sm:-mx-70 bg-black/78  z-0"></div>
          <div className="relative z-10 p-6">
            <h1 className="text-3xl md:text-5xl font-medium mb-4">{t.title}</h1>
            <p className="text-xs md:text-base leading-relaxed text-gray-400">
              {t.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}