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
      kz: "Қалай масон болуға болады",
    },
    href: "#",
    active: false,
    isButton: true,
  },
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
  const { lang } = useLanguage();

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

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-100 transition-all duration-500 ease-out ${
        scrolled 
          ? "bg-[rgba(4,4,4,0.95)] backdrop-blur-[20px] shadow-lg border-b border-[rgba(193,201,204,0.2)]" 
          : "bg-[rgba(4,4,4,0.1)] backdrop-blur-[75px] border-b border-[#C1C9CC]"
      } ${
        scrolled ? "h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] xl:h-[100px]" : "h-[70px] sm:h-[80px] md:h-[90px] lg:h-[120px] xl:h-[135px]"
      }`}
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
                  className={`block text-[#EAF8FF] font-light text-sm 2xl:text-[18px] xl:text-[16px] leading-relaxed px-3 2xl:px-4 py-2 text-center transition-all duration-300 hover:text-white relative ${
                    link.active ? "text-white" : "text-[rgba(234,248,255,0.7)] hover:text-[rgba(234,248,255,0.9)]"
                  }`}
                >
                  {link.label?.[lang] ?? ""}
                  {/* Подчеркивание для активной ссылки */}
                  <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] transition-all duration-300 ${
                    link.active ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </a>
              </div>
            ))}
          </div>

          {/* Центральное лого с анимацией */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10 transition-all duration-500">
            <div className="relative group">
              <Image
                src="/logo.png"
                alt="Логотип"
                width={90}
                height={57}
                className={`transition-all duration-500 ${
                  scrolled ? "w-[50px] h-[32px] 2xl:w-[70px] 2xl:h-[44px]" : "w-[60px] h-[38px] 2xl:w-[90px] 2xl:h-[57px]"
                } group-hover:scale-110`}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-300" />
            </div>
          </div>

          {/* Правая часть навигации */}
          <div className="flex items-center gap-2 2xl:gap-6">
            {rightNavLinks.map((link, idx) =>
              link.isButton ? (
                <div key={idx} className="relative group">
                  <button className="px-4 2xl:px-8 xl:px-6 py-2 2xl:py-3 xl:py-2 border-2 border-[#C1C9CC] rounded-full text-[#C1C9CC] text-sm 2xl:text-[18px] xl:text-[16px] leading-relaxed font-light transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFA500] hover:text-black hover:border-transparent hover:shadow-lg hover:shadow-[rgba(255,215,0,0.3)] transform hover:scale-105">
                    {link.label?.[lang] ?? ""}
                  </button>
                </div>
              ) : (
                <div key={idx} className="relative group">
                  <a
                    href={link.href}
                    className={`block text-[#EAF8FF] font-light text-sm 2xl:text-[18px] xl:text-[16px] leading-relaxed px-3 2xl:px-4 py-2 text-center transition-all duration-300 hover:text-white ${
                      link.active ? "text-white" : "text-[rgba(234,248,255,0.7)] hover:text-[rgba(234,248,255,0.9)]"
                    }`}
                  >
                    {link.label?.[lang] ?? ""}
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] transition-all duration-300 ${
                      link.active ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
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
                  className={`block text-[#EAF8FF] font-light text-sm px-3 py-2 text-center transition-all duration-300 hover:text-white ${
                    link.active ? "text-white" : "text-[rgba(234,248,255,0.7)]"
                  }`}
                >
                  {link.label?.[lang] ?? ""}
                  <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] transition-all duration-300 ${
                    link.active ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
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
                className={`transition-all duration-500 group-hover:scale-110 ${
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
                  className="block text-[rgba(234,248,255,0.7)] font-light text-sm px-3 py-2 text-center hover:text-white transition-all duration-300"
                >
                  {link.label?.[lang] ?? ""}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] w-0 group-hover:w-full transition-all duration-300" />
                </a>
              </div>
            ))}
            <div className="relative group">
              <button className="px-4 py-2 border-2 border-[#C1C9CC] rounded-full text-[#C1C9CC] text-sm font-light transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFA500] hover:text-black hover:border-transparent transform hover:scale-105">
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
              className={`transition-all duration-500 group-hover:scale-110 ${
                scrolled ? "w-[35px] h-[22px] sm:w-[40px] sm:h-[26px]" : "w-[40px] h-[26px] sm:w-[50px] sm:h-[32px]"
              }`}
              priority
            />
          </div>
        </div>

        {/* Улучшенная кнопка бургер-меню */}
        <button
          className={`lg:hidden absolute right-4 sm:right-6 flex items-center justify-center z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 ${
            open 
              ? "bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black shadow-lg" 
              : "bg-[rgba(255,215,0,0.1)] text-[#FFD700] hover:bg-[rgba(255,215,0,0.2)] hover:scale-110"
          }`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <span className={`absolute transition-all duration-300 ${
              open ? "rotate-45 translate-y-0" : "rotate-0 -translate-y-2"
            } w-6 h-0.5 bg-current rounded-full`} />
            <span className={`absolute transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            } w-6 h-0.5 bg-current rounded-full`} />
            <span className={`absolute transition-all duration-300 ${
              open ? "-rotate-45 translate-y-0" : "rotate-0 translate-y-2"
            } w-6 h-0.5 bg-current rounded-full`} />
          </div>
        </button>

        {/* Улучшенная боковая панель */}
        <div
          className={`fixed top-0 left-0 h-full w-[300px] sm:w-[350px] bg-gradient-to-b from-[#0a1419] via-[#070e10] to-[#050a0c] shadow-2xl z-40 transform transition-all duration-500 ease-out ${
            open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } flex flex-col pt-[80px] sm:pt-[100px] px-6 sm:px-8 lg:hidden`}
        >
          {/* Декоративная линия сверху */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500]" />
          
          {/* Заголовок меню */}
          <div className="mb-8 sm:mb-10">
            <h3 className="text-[#EAF8FF] text-lg sm:text-xl font-light tracking-wide">
              {lang === 'ru' ? 'Навигация' : lang === 'en' ? 'Navigation' : 'Навигация'}
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] mt-2" />
          </div>

          {/* Навигационные ссылки */}
          <div className="flex flex-col space-y-2">
            {allNavLinks.map((link: Link, idx) =>
              link.isButton ? (
                <button
                  key={idx}
                  className="mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full text-black text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(255,215,0,0.3)] transform hover:scale-105 w-full"
                  onClick={() => setOpen(false)}
                >
                  {link.label?.[lang] ?? ""}
                </button>
              ) : (
                <a
                  key={idx}
                  href={link.href}
                  className={`group relative py-3 sm:py-4 px-4 rounded-lg text-base sm:text-lg font-light transition-all duration-300 hover:bg-[rgba(255,215,0,0.05)] ${
                    link.active 
                      ? "text-[#FFD700] bg-[rgba(255,215,0,0.1)]" 
                      : "text-[rgba(234,248,255,0.8)] hover:text-[#FFD700]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <span className="relative z-10">{link.label?.[lang] ?? ""}</span>
                  {/* Индикатор активной ссылки */}
                  <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 bg-gradient-to-b from-[#FFD700] to-[#FFA500] transition-all duration-300 ${
                    link.active ? "h-8" : "h-0 group-hover:h-6"
                  }`} />
                  {/* Эффект hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,215,0,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </a>
              )
            )}
          </div>

          {/* Декоративные элементы */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-50" />
        </div>

        {/* Улучшенное затемнение фона */}
        {open && (
          <div
            className="fixed inset-0 bg-gradient-to-br from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.3)] backdrop-blur-sm z-30 lg:hidden transition-all duration-500"
            onClick={() => setOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;