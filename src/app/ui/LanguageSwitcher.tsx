"use client";

import React from "react";
import { useLanguage } from "@/app/context/LangContext";
import { motion, LayoutGroup } from "framer-motion";

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
        {/* Белый овал-индикатор */}
        <motion.div
          layoutId="active-pill"
          className="absolute rounded-[24px] bg-white shadow-md"
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            duration: 0.4
          }}
          style={{
            width: languages.find(l => l.code === lang) ? 'auto' : 0,
            height: 'calc(100% - 8px)',
            top: '4px'
          }}
        />
        
        {languages.map((l, idx) => {
          const isActive = lang === l.code;
          return (
            <button
              key={l.code}
              onClick={() => setLang(l.code as "ru" | "en" | "kz")}
              className={`relative flex items-center justify-center px-2 md:px-3 py-1 md:py-2 rounded-[24px] font-semibold z-10
                ${isActive ? "text-black" : "text-[#686F75] opacity-60 hover:opacity-100 hover:text-white"}
                ${idx !== languages.length - 1 ? "mr-1 md:mr-2" : ""}
              `}
              aria-current={isActive}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-[24px] bg-white shadow-md"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 0.4
                  }}
                />
              )}
              <span className="relative z-20">
                {l.label}
              </span>
            </button>
          );
        })}
      </LayoutGroup>
    </div>
  );
};

export default LanguageSwitcher;