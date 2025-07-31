"use client";
import Image from "next/image";
import { useLanguage } from "../context/LangContext";

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
    form: "Анкета кандидата",
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
    form: "Candidate Application",
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
    form: "Кандидат анкетасы",
  },
};

const Footer = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section
      className="text-gray-400 py-20 px-6"
      style={{
        background: "linear-gradient(to right, #0B1313, #091622)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 place-items-center lg:place-items-start">
          <div className="flex justify-center lg:justify-start w-full">
            <div className="w-52 h-20 relative">
              <Image
                src="/logo.png"
                alt="Логотип"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="w-full text-center lg:text-left">
            <h3 className="text-white text-lg font-bold mb-4">{t.structure}</h3>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>
                <a
                  href="https://masons.kz/goals"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t.mission}
                </a>
              </li>
              <li>
                <a
                  href="https://masons.kz/structure"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t.structureVLK}
                </a>
              </li>
              <li>
                <a
                  href="https://masons.kz/orgstructura"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t.council}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t.documents}
                </a>
              </li>
              <li>
                <a
                  href="https://masons.kz/recognitions"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t.recognitions}
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full text-center lg:text-left">
            <h3 className="text-white text-lg font-bold mb-4">{t.library}</h3>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>
                <a
                  href="https://masons.kz/constitution"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t.constitution}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t.media}
                </a>
              </li>
              <li>
                <a
                  href="https://masons.kz/dictionary"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t.dictionary}
                </a>
              </li>
              <li>
                <a
                  href="https://masons.kz/books"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t.books}
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full text-center lg:text-left">
            <h3 className="text-white text-lg font-bold mb-4">{t.candidate}</h3>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>
                <a
                  href="https://masons.kz/faq"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t.faq}
                </a>
              </li>
              <li>
                <a
                  href="https://masons.kz/preparing"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t.preparing}
                </a>
              </li>
              <li>
                <a
                  href="https://masons.kz/candidateform"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t.form}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
