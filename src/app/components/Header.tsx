"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LangContext";

const navLinks = [
  {
    label: { ru: "Главная", en: "Home", kz: "Басты бет" },
    href: "#",
    active: true,
  },
  {
    label: { ru: "Наши ложи", en: "Our Lodges", kz: "Біздің ложалар" },
    href: "#",
    active: false,
  },
  {
    label: {
      ru: "Мировое признание",
      en: "World Recognition",
      kz: "Әлемдік мойындау",
    },
    href: "#",
    active: false,
  },
];

const rightNavLinks = [
  {
    label: { ru: "Совет ВО", en: "Council", kz: "Кеңес" },
    href: "#",
    active: false,
  },
  {
    label: { ru: "Контакты", en: "Contacts", kz: "Байланыс" },
    href: "#",
    active: false,
  },
  {
    label: {
      ru: "Как стать масоном",
      en: "How to join",
      kz: "Қалай масон атанамын",
    },
    href: "#",
    active: false,
    isButton: true,
  },
];

const languages = [
  { code: "ru" as const, label: "RU" },
  { code: "en" as const, label: "EN" },
  { code: "kz" as const, label: "KZ" },
];

interface Link {
  label: { ru: string; en: string; kz: string };
  href: string;
  active: boolean;
  isButton?: boolean;
}

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();

  // Отслеживание скролла для изменения стиля хедера
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Закрытие меню при изменении размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const allNavLinks = [...navLinks, ...rightNavLinks];

  const handleLanguageChange = (newLang: "ru" | "en" | "kz") => {
    setLang(newLang);
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-100 transition-all duration-300 ease-out ${
        scrolled
          ? "bg-[rgba(0,0,0,0.05)] backdrop-blur-[30px] shadow-lg border-b border-[rgba(255,255,255,0.05)]"
          : "bg-transparent backdrop-blur-[50px] border-b border-[rgba(255,255,255,0.08)]"
      } ${
        scrolled
          ? "h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] xl:h-[100px]"
          : "h-[70px] sm:h-[80px] md:h-[90px] lg:h-[120px] xl:h-[135px]"
      }`}
      style={{
        backdropFilter: scrolled
          ? "blur(30px) saturate(180%)"
          : "blur(50px) saturate(180%)",
        WebkitBackdropFilter: scrolled
          ? "blur(30px) saturate(180%)"
          : "blur(50px) saturate(180%)",
      }}
    >
      <nav className="w-full max-w-[1920px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[60px] 2xl:px-[170px] relative h-full">
        {/* Десктопная навигация (XL и выше) */}
        <div className="hidden xl:flex w-full items-center justify-between relative">
          {/* Левая часть навигации */}
          <div className="flex items-center gap-2 2xl:gap-6">
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative group">
                <a
                  href={link.href}
                  className={`block text-white font-light text-sm 2xl:text-[18px] xl:text-[16px] leading-relaxed px-3 2xl:px-4 py-2 text-center transition-all duration-300 hover:text-white relative ${
                    link.active
                      ? "text-white drop-shadow-lg"
                      : "text-[rgba(255,255,255,0.8)] hover:text-white hover:drop-shadow-lg"
                  }`}
                >
                  {link.label?.[lang] ?? ""}
                  {/* Подчеркивание для активной ссылки */}
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] transition-all duration-300 drop-shadow-glow ${
                      link.active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Центральное лого с анимацией */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10 transition-all duration-200">
            <div className="relative group">
              <Image
                src="/logo.png"
                alt="Логотип"
                width={90}
                height={57}
                className={`transition-all duration-200 drop-shadow-2xl ${
                  scrolled
                    ? "w-[50px] h-[32px] 2xl:w-[70px] 2xl:h-[44px]"
                    : "w-[60px] h-[38px] 2xl:w-[90px] 2xl:h-[57px]"
                } group-hover:scale-110`}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] opacity-0 group-hover:opacity-30 rounded-full blur-md transition-opacity duration-300" />
            </div>
          </div>

          {/* Правая часть навигации */}
          <div className="flex items-center gap-2 2xl:gap-6">
            {rightNavLinks.map((link, idx) =>
              link.isButton ? (
                <div key={idx} className="relative group">
                  <button className="px-4 2xl:px-8 xl:px-6 py-2 2xl:py-3 xl:py-2 border-2 border-[rgba(255,255,255,0.3)] rounded-full text-white text-sm 2xl:text-[18px] xl:text-[16px] leading-relaxed font-light transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFA500] hover:text-black hover:border-[#FFD700] hover:shadow-lg hover:shadow-[rgba(255,215,0,0.4)] transform hover:scale-105 backdrop-blur-sm bg-[rgba(255,255,255,0.05)]">
                    {link.label?.[lang] ?? ""}
                  </button>
                </div>
              ) : (
                <div key={idx} className="relative group">
                  <a
                    href={link.href}
                    className={`block text-white font-light text-sm 2xl:text-[18px] xl:text-[16px] leading-relaxed px-3 2xl:px-4 py-2 text-center transition-all duration-300 hover:text-white ${
                      link.active
                        ? "text-white drop-shadow-lg"
                        : "text-[rgba(255,255,255,0.8)] hover:text-white hover:drop-shadow-lg"
                    }`}
                  >
                    {link.label?.[lang] ?? ""}
                    <span
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] transition-all duration-300 drop-shadow-glow ${
                        link.active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </div>
              )
            )}
          </div>
        </div>

        {/* Планшетная навигация (LG) */}
        <div className="hidden lg:flex xl:hidden w-full items-center justify-between relative">
          {/* Левая часть */}
          <div className="flex items-center gap-1">
            {navLinks.slice(0, 2).map((link, idx) => (
              <div key={idx} className="relative group">
                <a
                  href={link.href}
                  className={`block text-white font-light text-sm px-3 py-2 text-center transition-all duration-300 hover:text-white ${
                    link.active
                      ? "text-white drop-shadow-lg"
                      : "text-[rgba(255,255,255,0.8)] hover:drop-shadow-lg"
                  }`}
                >
                  {link.label?.[lang] ?? ""}
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] transition-all duration-300 ${
                      link.active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Центральное лого */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="relative group">
              <Image
                src="/logo.png"
                alt="Логотип"
                width={60}
                height={38}
                className={`transition-all duration-200 group-hover:scale-110 drop-shadow-2xl ${
                  scrolled ? "w-[50px] h-[32px]" : "w-[60px] h-[38px]"
                }`}
                priority
              />
            </div>
          </div>

          {/* Правая часть */}
          <div className="flex items-center gap-1">
            {rightNavLinks.slice(0, 1).map((link, idx) => (
              <div key={idx} className="relative group">
                <a
                  href={link.href}
                  className="block text-[rgba(255,255,255,0.8)] font-light text-sm px-3 py-2 text-center hover:text-white hover:drop-shadow-lg transition-all duration-300"
                >
                  {link.label?.[lang] ?? ""}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] w-0 group-hover:w-full transition-all duration-300" />
                </a>
              </div>
            ))}
            <div className="relative group">
              <button className="px-4 py-2 border-2 border-[rgba(255,255,255,0.3)] rounded-full text-white text-sm font-light transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFA500] hover:text-black hover:border-[#FFD700] transform hover:scale-105 backdrop-blur-sm bg-[rgba(255,255,255,0.05)]">
                {rightNavLinks[2].label?.[lang] ?? ""}
              </button>
            </div>
          </div>
        </div>

        {/* Мобильная навигация */}
        <div className="flex lg:hidden w-full items-center justify-center relative">
          {/* Центральное лого */}
          <div className="relative group">
            <Image
              src="/logo.png"
              alt="Логотип"
              width={70}
              height={40}
              className={`transition-all duration-200 group-hover:scale-110 drop-shadow-2xl ${
                scrolled
                  ? "w-[35px] h-[22px] sm:w-[40px] sm:h-[26px]"
                  : "w-[40px] h-[26px] sm:w-[50px] sm:h-[32px]"
              }`}
              priority
            />
          </div>
        </div>

        {/* Улучшенная кнопка бургер-меню */}
        <button
          className={`lg:hidden absolute right-4 sm:right-6 flex items-center justify-center z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 ${
            open
              ? "bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black shadow-lg shadow-[rgba(255,215,0,0.4)]"
              : "bg-[rgba(255,215,0,0.15)] text-white backdrop-blur-sm border border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,215,0,0.25)] hover:scale-110"
          }`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <span
              className={`absolute transition-all duration-300 ${
                open ? "rotate-45 translate-y-0" : "rotate-0 -translate-y-2"
              } w-6 h-0.5 bg-current rounded-full drop-shadow-lg`}
            />
            <span
              className={`absolute transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              } w-6 h-0.5 bg-current rounded-full drop-shadow-lg`}
            />
            <span
              className={`absolute transition-all duration-300 ${
                open ? "-rotate-45 translate-y-0" : "rotate-0 translate-y-2"
              } w-6 h-0.5 bg-current rounded-full drop-shadow-lg`}
            />
          </div>
        </button>

        {/* Улучшенная боковая панель с еще более прозрачным фоном */}
        <div
          className={`fixed top-0 left-0 h-screen w-[300px] sm:w-[350px] bg-[#091622] shadow-2xl z-40 transform transition-all duration-500 ease-out ${
            open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } flex flex-col pt-[80px] sm:pt-[100px] px-6 sm:px-8 lg:hidden border-r-2 border-[#FFD700] border-opacity-30`}
        >
          {/* Декоративная линия сверху */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] drop-shadow-glow" />
          {/* Декоративные золотистые бордеры */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#FFD700] to-[#FFA500] opacity-40" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] opacity-60" />

          {/* Заголовок меню */}
          <div className="mb-8 sm:mb-10">
            <h3 className="text-white text-lg sm:text-xl font-light tracking-wide drop-shadow-lg">
              {lang === "ru"
                ? "Навигация"
                : lang === "en"
                ? "Navigation"
                : "Навигация"}
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] mt-2 drop-shadow-glow" />
          </div>

          {/* Навигационные ссылки */}
          <div className="flex flex-col space-y-2">
            {allNavLinks.map((link: Link, idx) =>
              link.isButton ? (
                <button
                  key={idx}
                  className="mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full text-black text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(255,215,0,0.4)] transform hover:scale-105 w-full drop-shadow-lg"
                  onClick={() => setOpen(false)}
                >
                  {link.label?.[lang] ?? ""}
                </button>
              ) : (
                <a
                  key={idx}
                  href={link.href}
                  className={`group relative py-3 sm:py-4 px-4 rounded-lg text-base sm:text-lg font-light transition-all duration-300 hover:bg-[rgba(255,215,0,0.1)] backdrop-blur-sm ${
                    link.active
                      ? "text-[#FFD700] bg-[rgba(255,215,0,0.15)] drop-shadow-lg"
                      : "text-[rgba(255,255,255,0.9)] hover:text-white"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <span className="relative z-10 drop-shadow-lg">
                    {link.label?.[lang] ?? ""}
                  </span>
                  {/* Индикатор активной ссылки */}
                  <div
                    className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 bg-gradient-to-b from-[#FFD700] to-[#FFA500] transition-all duration-300 drop-shadow-glow ${
                      link.active ? "h-8" : "h-0 group-hover:h-6"
                    }`}
                  />
                  {/* Эффект hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,215,0,0.08)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </a>
              )
            )}
          </div>

          {/* Кнопка смены языка в боковой панели */}
          <div className="mt-8 pt-6 border-t border-[rgba(255,215,0,0.3)]">
            <h4 className="text-white text-sm font-light mb-4 opacity-80 drop-shadow-lg">
              {lang === "ru" ? "Язык" : lang === "en" ? "Language" : "Тіл"}
            </h4>
            <div className="flex gap-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`px-4 py-2 rounded-md text-sm font-light transition-all duration-300 backdrop-blur-sm ${
                    lang === language.code
                      ? "bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black drop-shadow-lg"
                      : "bg-[rgba(255,215,0,0.15)] text-white border border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,215,0,0.25)] hover:text-white"
                  }`}
                >
                  {language.label}
                </button>
              ))}
            </div>
          </div>

          {/* Декоративные элементы */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-60 drop-shadow-glow" />
        </div>

        {/* Улучшенное затемнение фона с блюром */}
        {open && (
          <div
            className="fixed inset-0 z-30 lg:hidden transition-all duration-500"
            onClick={() => setOpen(false)}
            style={{
              background: "rgba(0,0,0,0.2)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
