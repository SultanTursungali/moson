"use client";

import React, { useState } from "react";
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
  isButton?: boolean; // Опциональное свойство, если оно есть не всегда
}

const Header = () => {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();

  // Для бургер-меню: все ссылки без разделения
  const allNavLinks = [...navLinks, ...rightNavLinks];

  return (
    <header className="w-full fixed top-0 left-0 z-51 bg-[rgba(4,4,4,0.1)] backdrop-blur-[75px] border-b border-[#C1C9CC] h-[70px] sm:h-[80px] md:h-[90px] lg:h-[120px] xl:h-[135px] flex items-center">
      <nav className="w-full max-w-[1920px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[60px] 2xl:px-[170px] relative h-full">
        
        {/* Десктопная навигация */}
        <div className="hidden xl:flex w-full items-center justify-between relative">
          {/* Левая часть навигации */}
          <div className="flex items-center gap-4 2xl:gap-8">
            {navLinks.map((link, idx) => (
              <div key={idx} className="whitespace-nowrap">
                <a
                  href={link.href}
                  className={`block text-[#EAF8FF] font-light text-sm 2xl:text-[21px] leading-[29px] px-2 2xl:px-4 py-1 h-full text-center transition-all hover:opacity-100 ${
                    link.active ? "opacity-100" : "opacity-40"
                  }`}
                >
                  {link.label && link.label[lang] ? link.label[lang] : ""}
                </a>
              </div>
            ))}
          </div>

          {/* Центральное лого */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
            <Image
              src="/logo.png"
              alt="Логотип"
              width={90}
              height={57}
              className="w-[60px] h-[38px] 2xl:w-[90px] 2xl:h-[57px]"
              priority
            />
          </div>

          {/* Правая часть навигации */}
          <div className="flex items-center gap-4 2xl:gap-8">
            {rightNavLinks.map((link, idx) =>
              link.isButton ? (
                <div key={idx} className="whitespace-nowrap">
                  <button className="px-4 2xl:px-10 py-1 2xl:py-2 border border-[#C1C9CC] rounded-[24px] text-[#C1C9CC] text-sm 2xl:text-[23px] leading-[31px] font-light hover:bg-[#C1C9CC] hover:text-black transition-all">
                    {link.label && link.label[lang] ? link.label[lang] : ""}
                  </button>
                </div>
              ) : (
                <div key={idx} className="whitespace-nowrap">
                  <a
                    href={link.href}
                    className={`block text-[#EAF8FF] font-light text-sm 2xl:text-[21px] leading-[29px] px-2 2xl:px-4 py-1 h-full text-center transition-all hover:opacity-100 ${
                      link.active ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    {link.label && link.label[lang] ? link.label[lang] : ""}
                  </a>
                </div>
              )
            )}
          </div>
        </div>

        {/* Планшетная навигация */}
        <div className="hidden lg:flex xl:hidden w-full items-center justify-between relative">
          {/* Левая часть */}
          <div className="flex items-center gap-2">
            {navLinks.slice(0, 2).map((link, idx) => (
              <div key={idx} className="whitespace-nowrap">
                <a
                  href={link.href}
                  className={`block text-[#EAF8FF] font-light text-xs px-2 py-1 text-center transition-all hover:opacity-100 ${
                    link.active ? "opacity-100" : "opacity-40"
                  }`}
                >
                  {link.label && link.label[lang] ? link.label[lang] : ""}
                </a>
              </div>
            ))}
          </div>

          {/* Центральное лого */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/logo.png"
              alt="Логотип"
              width={60}
              height={38}
              className="w-[60px] h-[38px]"
              priority
            />
          </div>

          {/* Правая часть */}
          <div className="flex items-center gap-2">
            {rightNavLinks.slice(0, 1).map((link, idx) => (
              <div key={idx} className="whitespace-nowrap">
                <a
                  href={link.href}
                  className="block text-[#EAF8FF] font-light text-xs px-2 py-1 text-center opacity-40 hover:opacity-100 transition-all"
                >
                  {link.label && link.label[lang] ? link.label[lang] : ""}
                </a>
              </div>
            ))}
            <div className="whitespace-nowrap">
              <button className="px-3 py-1 border border-[#C1C9CC] rounded-[24px] text-[#C1C9CC] text-xs font-light hover:bg-[#C1C9CC] hover:text-black transition-all">
                {rightNavLinks[2].label && rightNavLinks[2].label[lang] ? rightNavLinks[2].label[lang] : ""}
              </button>
            </div>
          </div>
        </div>

        {/* Мобильная навигация */}
        <div className="flex lg:hidden w-full items-center justify-center relative">
          {/* Центральное лого */}
          <Image
            src="/logo.png"
            alt="Логотип"
            width={70}
            height={40}
            className="w-[40px] h-[26px] sm:w-[50px] sm:h-[32px]"
            priority
          />
        </div>

        {/* Кнопка бургер-меню (знак вопроса) */}
        <button
          className="lg:hidden absolute right-4 sm:right-6 flex items-center justify-center z-50 w-8 h-8 sm:w-10 sm:h-10"
          onClick={() => setOpen(!open)}
          aria-label="Открыть меню"
        >
          <span className="text-[#FFD700] text-2xl sm:text-3xl font-bold">?</span>
        </button>

        {/* Боковая панель */}
        <div
          className={`fixed top-0 left-0 h-full w-[280px] sm:w-[320px] bg-[#070E10] shadow-2xl z-40 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          } flex flex-col pt-[100px] sm:pt-[120px] px-6 sm:px-8 lg:hidden`}
        >
          <button
            className="absolute top-4 sm:top-6 right-4 sm:right-6 text-2xl sm:text-3xl text-[#EAF8FF] focus:outline-none"
            onClick={() => setOpen(false)}
            aria-label="Закрыть меню"
          >
            &times;
          </button>
          
          {allNavLinks.map((link, idx) =>
            link.isButton ?  (
              <button
                key={idx}
                className="mb-4 sm:mb-6 px-4 sm:px-5 py-2 border border-[#C1C9CC] rounded-[24px] text-[#C1C9CC] text-base sm:text-lg font-light hover:bg-[#C1C9CC] hover:text-black transition-all w-full"
                onClick={() => setOpen(false)}
              >
                {link.label && link.label[lang] ? link.label[lang] : ""}
              </button>
            ) : (
              <a
                key={idx}
                href={link.href}
                className={`mb-4 sm:mb-6 text-[#EAF8FF] font-light text-base sm:text-lg transition-all hover:opacity-100 ${
                  link.active ? "opacity-100" : "opacity-60"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label && link.label[lang] ? link.label[lang] : ""}
              </a>
            )
          )}
        </div>

        {/* Затемнение фона при открытом меню */}
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;