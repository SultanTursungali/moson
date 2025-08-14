"use client";

import React from "react";
import { motion, LayoutGroup } from "framer-motion";
import { useLanguage } from "@/app/context/LangContext";

const languages = [
  { code: "ru", label: "Рус" },
  { code: "en", label: "Eng" },
  { code: "kz", label: "Қаз" },
];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center justify-center bg-[rgba(4,4,4,0.1)] backdrop-blur-[75px] rounded-[24px] px-2 md:px-3 h-[40px] md:h-[49px] text-[15px] md:text-[18px] font-semibold shadow-lg">
      <LayoutGroup>
        {languages.map((l, idx) => {
          const isActive = lang === l.code;
          return (
            <button
              key={l.code}
              onClick={() => setLang(l.code as "ru" | "en" | "kz")}
              className={`relative flex items-center justify-center px-2 md:px-3 py-1 md:py-2 rounded-[24px] font-semibold transition-all duration-300
                ${
                  isActive
                    ? "text-[#686F75] mr-1 md:mr-2 scale-105"
                    : "text-[#686F75] opacity-40 hover:opacity-80"
                }
                ${idx !== languages.length - 1 ? "mr-1 md:mr-2" : ""}
              `}
              aria-current={isActive}
            >
              {isActive && (
                <motion.div
                  layoutId="lang-pill"
                  className="absolute inset-0 rounded-[24px] bg-[#EAF8FF] shadow"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </button>
          );
        })}
      </LayoutGroup>
    </div>
  );
};

const texts = {
  ru: {
    mainTitle: "Основные ложи\nв Казахстане",
    grandLodgeTitle: "Великая ложа Казахстана",
    foundedLabel: "Основана в 2016",
    dateFoundedLabel: "Дата основания:",
    languageLabel: "Язык проведения работ:",
    lodges: [
      {
        title: "Достопочтенная ложа №1 «Алихан Букейханов»",
        founded: "2016",
        location: "Казахский, русский",
      },
      {
        title: "Достопочтенная ложа №2 «Свет Востока»",
        founded: "2016",
        location: "Казахский, русский",
      },
      {
        title: "Достопочтенная ложа №3 «United Nomadic Brothers»",
        founded: "2016",
        location: "Английский",
      },
      {
        title: "Достопочтенная ложа №4 «Байтерек»",
        founded: "2017",
        location: "Казахский, русский",
      },
      {
        title: "Достопочтенная ложа №5 «А.С. Пушкин»",
        founded: "2018",
        location: "Русский",
      },
    ],
  },
  en: {
    mainTitle: "Main Lodges\nin Kazakhstan",
    grandLodgeTitle: "Grand Lodge of Kazakhstan",
    foundedLabel: "Founded in 2016",
    dateFoundedLabel: "Date Founded:",
    languageLabel: "Working Language:",
    lodges: [
      {
        title: "Worshipful Lodge No. 1 «Alikhan Bukeikhanov»",
        founded: "2016",
        location: "Kazakh, Russian",
      },
      {
        title: "Worshipful Lodge No. 2 «Light of the East»",
        founded: "2016",
        location: "Kazakh, Russian",
      },
      {
        title: "Worshipful Lodge No. 3 «United Nomadic Brothers»",
        founded: "2016",
        location: "English",
      },
      {
        title: "Worshipful Lodge No. 4 «Baiterek»",
        founded: "2017",
        location: "Kazakh, Russian",
      },
      {
        title: "Worshipful Lodge No. 5 «A.S. Pushkin»",
        founded: "2018",
        location: "Russian",
      },
    ],
  },
  kz: {
    mainTitle: "Қазақстандағы\nнегізгі ложалар",
    grandLodgeTitle: "Қазақстанның Ұлы Ложасы",
    foundedLabel: "2016 жылы құрылған",
    dateFoundedLabel: "Құрылған күні:",
    languageLabel: "Жұмыс тілі:",
    lodges: [
      {
        title: "Құрметті ложа №1 «Әлихан Бөкейханов»",
        founded: "2016",
        location: "Қазақ, орыс",
      },
      {
        title: "Құрметті ложа №2 «Шығыс жарығы»",
        founded: "2016",
        location: "Қазақ, орыс",
      },
      {
        title: "Құрметті ложа №3 «United Nomadic Brothers»",
        founded: "2016",
        location: "Ағылшын",
      },
      {
        title: "Құрметті ложа №4 «Бәйтерек»",
        founded: "2017",
        location: "Қазақ, орыс",
      },
      {
        title: "Құрметті ложа №5 «А.С. Пушкин»",
        founded: "2018",
        location: "Орыс",
      },
    ],
  },
};

const lodges = [
  {
    img: "/lodges/lodge1.png",
  },
  {
    img: "/lodges/lodge2.png",
  },
  {
    img: "/lodges/lodge3.png",
  },
  {
    img: "/lodges/lodge4.png",
  },
  {
    img: "/lodges/lodge5.png",
  },
];

export default function Lodges() {
  const { lang } = useLanguage();
  const currentTexts = texts[lang];

  return (
    <div className="relative">
      {/* Языковой переключатель */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Главная секция */}
      <section className="relative w-full h-screen bg-blue-700 text-white overflow-hidden rounded-[20px] sm:rounded-[40px] lg:rounded-[80px]">
        {/* Фоновое изображение */}
        <div className="absolute inset-0 z-0">
          <img
            src="/lodgesTable.jpg"
            alt="Freemasons meeting"
            className="w-full h-full object-cover object-center filter grayscale brightness-125 contrast-75"
          />
          <div
            className="absolute inset-0 blur-sm opacity-40"
            style={{
              background: `linear-gradient(to bottom, rgba(13, 21, 40, 0.7), rgba(0, 0, 0, 0.7))`,
            }}
          />

          <div
            className="absolute top-0 left-0 w-full h-[30%] pointer-events-none opacity-50 blur-xl"
            style={{
              backgroundImage: `
                linear-gradient(
                  to bottom,
                  rgba(0, 0, 0, 1) 0%,
                  rgba(0, 0, 0, 0) 100%
                ),
                linear-gradient(
                  to right,
                  rgba(11, 19, 19, 1) 0%,
                  rgba(11, 19, 19, 1) 30%,
                  rgba(10, 20, 26, 1) 50%,
                  rgba(9, 22, 34, 1) 70%,
                  rgba(9, 22, 34, 1) 100%
                )
              `,
              backgroundBlendMode: "multiply",
            }}
          />
          <div className="absolute h-[10%] inset-0 bg-gradient-to-b from-black/100 via-black/50 to-transparent rounded-[20px] sm:rounded-[40px] lg:rounded-[80px]" />
        </div>

        {/* Контент главной секции */}
        <div className="relative z-10 flex items-start justify-center h-full py-20 sm:py-32 lg:py-40">
          <div className="text-center px-4 ">
            <h1
              className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tight leading-[0.9] whitespace-pre-line"
              style={{
                color: "#F4B860",
                textShadow: "0 4px 20px rgba(0,0,0,0.5)",
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              {currentTexts.mainTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* Секция с карточками - накладывается на 160px */}
      <div
        className="relative -mt-20 sm:-mt-32 md:-mt-40 pt-20 sm:pt-32 md:pt-40 min-h-screen p-4 sm:p-6 md:p-8"
        style={{
          background: `linear-gradient(to bottom, rgba(17, 24, 39, 0.7), rgba(0, 0, 0, 0.7))`,
        }}
      >
        {/* Фоновое изображение для секции карточек */}
        <div className="absolute inset-0 z-0">
          <img
            src="/backlines.jpg"
            alt="Background"
            className="w-full h-full object-cover filter blur-xl brightness-200 opacity-20"
            style={{
              transform: "scaleX(-1)",
              WebkitMaskImage:
                "linear-gradient(to top, black 80%, transparent 100%)",
              maskImage: "linear-gradient(to top, black 80%, transparent 100%)",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          />
          <div
            className="absolute inset-0 blur-sm opacity-10"
            style={{
              background: `linear-gradient(to bottom, rgba(13, 21, 40, 0.7), rgba(0, 0, 0, 0.7))`,
            }}
          />
        </div>

        <div className="z-50 relative">
          {/* Главная карточка Великой ложи */}
          <div
            className="rounded-[16px] sm:rounded-[20px] md:rounded-[24px] px-4 sm:px-6 md:px-8 py-4 sm:py-6 shadow-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 mx-auto max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl"
            style={{
              background:
                "radial-gradient(circle at center bottom, #0A141A 0%, #2A251C 50%, #1A1611 100%)",
            }}
          >
            <img
              src="/logo.png"
              alt={currentTexts.grandLodgeTitle}
              className="rounded-full w-16 h-10 sm:w-24 sm:h-16 md:w-32 sm:h-20 lg:w-40 lg:h-24 xl:w-72 xl:h-44"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white">
                {currentTexts.grandLodgeTitle}
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400">
                {currentTexts.foundedLabel}
              </p>
            </div>
          </div>

          {/* Соединительные линии - только на больших экранах */}
          <svg
            className="absolute top-32 sm:top-40 md:top-48 lg:top-52 xl:top-56 left-1/2 transform -translate-x-1/2 z-40 hidden lg:block"
            width="min(100vw, 1528px)"
            height="160"
            style={{ pointerEvents: "none" }}
            viewBox="0 0 1528 160"
          >
            <defs>
              <style>
                {`.connection-line { fill: none; stroke: #2C2F38; stroke-width: 2; }`}
              </style>
            </defs>

            {/* Центральная вертикальная линия от главной карточки */}
            <path d="M 764 40 L 764 70" className="connection-line" />

            {/* Закругленное соединение с горизонтальной линией */}
            <path d="M 764 70 Q 764 80 754 80" className="connection-line" />
            <path d="M 764 70 Q 764 80 774 80" className="connection-line" />

            {/* Горизонтальные линии влево и вправо от центра */}
            <path
              d="M 754 80 L 158 80 Q 148 80 148 90"
              className="connection-line"
            />
            <path
              d="M 754 80 L 474 80 Q 464 80 464 90"
              className="connection-line"
            />
            <path
              d="M 774 80 L 1054 80 Q 1064 80 1064 90"
              className="connection-line"
            />
            <path
              d="M 774 80 L 1370 80 Q 1380 80 1380 90"
              className="connection-line"
            />

            {/* Центральная вертикальная линия продолжение */}
            <path d="M 764 80 L 764 120" className="connection-line" />

            {/* Вертикальные линии к центрам карточек */}
            <path d="M 148 90 L 148 120" className="connection-line" />
            <path d="M 464 90 L 464 120" className="connection-line" />
            <path d="M 1064 90 L 1064 120" className="connection-line" />
            <path d="M 1380 90 L 1380 120" className="connection-line" />
          </svg>

          {/* Карточки лож */}
          <div className="flex justify-center mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
            {/* Desktop версия - 5 карточек в ряд */}
            <div className="hidden xl:block w-full max-w-7xl">
              <div className="flex justify-between gap-3">
                {lodges.slice(0, 5).map((lodge, idx) => (
                  <div
                    key={idx}
                    className="rounded-[24px] px-4 py-6 shadow-lg flex flex-col items-center text-sm flex-1 max-w-xs h-[414px]"
                    style={{
                      background: `linear-gradient(180deg, #1A1611 0%, #0A141A 100%)`,
                      border: "0.2px solid #211C14",
                    }}
                  >
                    <div className="w-full h-[180px] flex justify-center items-center mb-10">
                      <img
                        src={lodge.img}
                        alt={currentTexts.lodges[idx].title}
                        className="object-contain max-w-[113px] max-h-[180px]"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between text-center">
                      <h4 className="text-[11px] font-semibold text-white leading-tight px-2">
                        {currentTexts.lodges[idx].title}
                      </h4>
                      <div className="mt-auto space-y-1">
                        <p className="text-[10px] text-gray-400 mb-2">
                          {currentTexts.dateFoundedLabel}{" "}
                          {currentTexts.lodges[idx].founded}
                        </p>
                        <p className="text-[10px] text-gray-400">
                          {currentTexts.languageLabel}
                        </p>
                        <p className="text-[10px] text-gray-400">
                          {currentTexts.lodges[idx].location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tablet версия - 2-3 карточки в ряд */}
            <div className="hidden md:grid xl:hidden grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {lodges.slice(0, 5).map((lodge, idx) => (
                <div
                  key={idx}
                  className="rounded-[20px] px-4 py-5 shadow-lg flex flex-col items-center text-sm h-[350px]"
                  style={{
                    background: `linear-gradient(180deg, #1A1611 0%, #0A141A 100%)`,
                    border: "0.2px solid #211C14",
                  }}
                >
                  <div className="w-full h-[140px] flex justify-center items-center mb-6">
                    <img
                      src={lodge.img}
                      alt={currentTexts.lodges[idx].title}
                      className="object-contain max-w-[90px] max-h-[140px]"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between text-center">
                    <h4 className="text-xs font-semibold text-white leading-tight px-2 mb-4">
                      {currentTexts.lodges[idx].title}
                    </h4>
                    <div className="mt-auto space-y-1">
                      <p className="text-[10px] text-gray-400 mb-2">
                        {currentTexts.dateFoundedLabel}{" "}
                        {currentTexts.lodges[idx].founded}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        {currentTexts.languageLabel}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        {currentTexts.lodges[idx].location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile версия - 1 карточка в столбец */}
            <div className="grid md:hidden grid-cols-1 gap-4 max-w-sm mx-auto">
              {lodges.slice(0, 5).map((lodge, idx) => (
                <div
                  key={idx}
                  className="rounded-[16px] px-4 py-4 shadow-lg flex items-center gap-4 text-sm min-h-[120px]"
                  style={{
                    background: `linear-gradient(180deg, #1A1611 0%, #0A141A 100%)`,
                    border: "0.2px solid #211C14",
                  }}
                >
                  <div className="flex-shrink-0 w-[60px] h-[80px] flex justify-center items-center">
                    <img
                      src={lodge.img}
                      alt={currentTexts.lodges[idx].title}
                      className="object-contain max-w-[50px] max-h-[80px]"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="text-xs font-semibold text-white leading-tight mb-3">
                      {currentTexts.lodges[idx].title}
                    </h4>
                    <div className="space-y-1">
                      <p className="text-[9px] text-gray-400">
                        {currentTexts.dateFoundedLabel}{" "}
                        {currentTexts.lodges[idx].founded}
                      </p>
                      <p className="text-[9px] text-gray-400">
                        {currentTexts.languageLabel}{" "}
                        {currentTexts.lodges[idx].location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
