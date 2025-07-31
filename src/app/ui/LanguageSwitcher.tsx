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
      {languages.map((l, idx) => {
        const isActive = lang === l.code;
        return (
          <button
            key={l.code}
            onClick={() => setLang(l.code as "ru" | "en" | "kz")}
            className={`relative flex items-center justify-center px-2 md:px-3 py-1 md:py-2 rounded-[24px] font-semibold transition-all duration-300
              ${isActive ? "text-[#686F75] mr-1 md:mr-2 scale-105" : "text-[#686F75] opacity-40 hover:opacity-80"}
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

export default LanguageSwitcher;
