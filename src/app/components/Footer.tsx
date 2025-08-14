"use client";
import React from 'react';
import Image from 'next/image';
import { useLanguage } from "@/app/context/LangContext";

const translations = {
  ru: {
    structure: "Структура",
    mission: "Миссия ценности цели",
    structureVLK: "Структура ВЛК",
    council: "Совет Великих Офицеров",
    documents: "Учредительные документы",
    recognitions: "Международные признания",
    library: "Библиотека",
    constitution: "Конституция",
    media: "Информация в СМИ",
    dictionary: "Словарь терминов",
    books: "Популярные книги о масонстве",
    candidate: "Кандидату",
    faq: "Часто задаваемые вопросы",
    preparing: "Подготовка к интервью",
    form: "Анкета кандидата"
  },
  en: {
    structure: "Structure",
    mission: "Mission Values Goals",
    structureVLK: "GLK Structure",
    council: "Council of Grand Officers",
    documents: "Founding Documents",
    recognitions: "International Recognitions",
    library: "Library",
    constitution: "Constitution",
    media: "Media Information",
    dictionary: "Dictionary of Terms",
    books: "Popular Books on Freemasonry",
    candidate: "For Candidates",
    faq: "Frequently Asked Questions",
    preparing: "Interview Preparation",
    form: "Candidate Application"
  },
  kz: {
    structure: "Құрылым",
    mission: "Миссия құндылықтар мақсаттар",
    structureVLK: "ҰЛД құрылымы",
    council: "Ұлы Офицерлер Кеңесі",
    documents: "Құрылтай құжаттары",
    recognitions: "Халықаралық мойындаулар",
    library: "Кітапхана",
    constitution: "Конституция",
    media: "БАҚ-тағы ақпарат",
    dictionary: "Терминдер сөздігі",
    books: "Масондық туралы танымал кітаптар",
    candidate: "Кандидатқа",
    faq: "Жиі қойылатын сұрақтар",
    preparing: "Сұхбатқа дайындық",
    form: "Кандидат анкетасы"
  }
};

const FooterSection = () => {
  const { lang } = useLanguage();
  const t = React.useMemo(() => translations[lang], [lang]);

  return (
    <footer 
      className="text-gray-400 py-6 px-3 sm:py-12 sm:px-6 md:py-20 md:px-8"
      style={{
        background: 'linear-gradient(to right, #0B1313, #091622)'
      }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 lg:gap-16 place-items-center lg:place-items-start">
          <div className="flex justify-center lg:justify-start w-full">
            <div className="w-28 h-12 sm:w-44 sm:h-18 relative group">
              <Image
                src="/logo.png"
                alt="Логотип Великой Ложи Казахстана"
                fill
                sizes="(max-width: 640px) 7rem, (max-width: 768px) 11rem, 11rem"
                className="object-contain transition-all duration-200 group-hover:scale-110"
                loading="lazy"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-300" />
            </div>
          </div>
          
          <nav className="w-full text-center lg:text-left" aria-labelledby="structure-heading">
            <h3 id="structure-heading" className="text-white text-sm sm:text-lg font-bold mb-2 sm:mb-4">
              {t.structure}
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm leading-relaxed">
              <li className="flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                <a 
                  href="https://masons.kz/goals" 
                  className="hover:text-white transition-colors duration-200 focus:text-white focus:outline-none focus:underline"
                  rel="noopener"
                >
                  {t.mission}
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                <a 
                  href="https://masons.kz/structure" 
                  className="hover:text-white transition-colors duration-200 focus:text-white focus:outline-none focus:underline"
                  rel="noopener"
                >
                  {t.structureVLK}
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                <a 
                  href="https://masons.kz/orgstructura" 
                  className="hover:text-white transition-colors duration-200 focus:text-white focus:outline-none focus:underline"
                  rel="noopener"
                >
                  {t.council}
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                <a 
                  href="#documents" 
                  className="hover:text-white transition-colors duration-200 focus:text-white focus:outline-none focus:underline"
                >
                  {t.documents}
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                <a 
                  href="https://masons.kz/recognitions" 
                  className="hover:text-white transition-colors duration-200 focus:text-white focus:outline-none focus:underline"
                  rel="noopener"
                >
                  {t.recognitions}
                </a>
              </li>
            </ul>
          </nav>
          
          <nav className="w-full text-center lg:text-left" aria-labelledby="library-heading">
            <h3 id="library-heading" className="text-white text-sm sm:text-lg font-bold mb-2 sm:mb-4">
              {t.library}
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm leading-relaxed">
              <li className="flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                <a 
                  href="https://masons.kz/constitution" 
                  className="hover:text-white transition-colors duration-200 focus:text-white focus:outline-none focus:underline"
                  rel="noopener"
                >
                  {t.constitution}
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                <a 
                  href="#media" 
                  className="hover:text-white transition-colors duration-200 focus:text-white focus:outline-none focus:underline"
                >
                  {t.media}
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                <a 
                  href="https://masons.kz/dictionary" 
                  className="hover:text-white transition-colors duration-200 focus:text-white focus:outline-none focus:underline"
                  rel="noopener"
                >
                  {t.dictionary}
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                <a 
                  href="https://masons.kz/books" 
                  className="hover:text-white transition-colors duration-200 focus:text-white focus:outline-none focus:underline"
                  rel="noopener"
                >
                  {t.books}
                </a>
              </li>
            </ul>
          </nav>
          
          <nav className="w-full text-center lg:text-left" aria-labelledby="candidate-heading">
            <h3 id="candidate-heading" className="text-white text-sm sm:text-lg font-bold mb-2 sm:mb-4">
              {t.candidate}
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm leading-relaxed">
              <li className="flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                <a 
                  href="https://masons.kz/faq" 
                  className="hover:text-white transition-colors duration-200 focus:text-white focus:outline-none focus:underline"
                  rel="noopener"
                >
                  {t.faq}
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                <a 
                  href="https://masons.kz/preparing" 
                  className="hover:text-white transition-colors duration-200 focus:text-white focus:outline-none focus:underline"
                  rel="noopener"
                >
                  {t.preparing}
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                <a 
                  href="https://masons.kz/candidateform" 
                  className="hover:text-white transition-colors duration-200 focus:text-white focus:outline-none focus:underline"
                  rel="noopener"
                >
                  {t.form}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;