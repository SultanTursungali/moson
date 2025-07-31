"use client";
import Image from "next/image";
import { useLanguage } from "../context/LangContext";

const translations = {
  ru: {
    title: "Наши ценности",
    values: [
      {
        title: "Свет и Знание",
        description:
          "Мы стремимся к просвещению и распространению знаний, веря, что свет разума освещает путь к истине.",
      },
      {
        title: "Этика и Честь",
        description:
          "Наша деятельность основывается на высоких моральных стандартах. Мы придерживаемся принципов честности, справедливости и ответственности.",
      },
      {
        title: "Братство и Единство",
        description:
          "Мы объединяемся в духе братства, поддерживая друг друга и создавая крепкие связи, основанные на доверии и уважении.",
      },
    ],
  },
  en: {
    title: "Our Values",
    values: [
      {
        title: "Light and Knowledge",
        description:
          "We strive for enlightenment and the dissemination of knowledge, believing that the light of reason illuminates the path to truth.",
      },
      {
        title: "Ethics and Honor",
        description:
          "Our activities are based on high moral standards. We adhere to the principles of honesty, justice and responsibility.",
      },
      {
        title: "Brotherhood and Unity",
        description:
          "We unite in the spirit of brotherhood, supporting each other and creating strong bonds based on trust and respect.",
      },
    ],
  },
  kz: {
    title: "Біздің құндылықтарымыз",
    values: [
      {
        title: "Жарық пен Білім",
        description:
          "Біз ағарту мен білімді тарату үшін күресеміз, ақыл-ойдың жарығы шындыққа апаратын жолды жарықтандырады деп сенеміз.",
      },
      {
        title: "Этика мен Намыс",
        description:
          "Біздің қызметіміз жоғары моральдық стандарттарға негізделген. Біз адалдық, әділдік және жауапкершілік қағидаттарын ұстанамыз.",
      },
      {
        title: "Бауырластық пен Бірлік",
        description:
          "Біз бауырластық рухында бірігіп, бір-бірімізді қолдап, сенім мен құрметке негізделген берік байланыстар құрамыз.",
      },
    ],
  },
};

const ValuesSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="relative bg-black py-20 px-6 z-30 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/goldenlines.jpg"
          alt="Background rays"
          fill
          className="object-cover object-center"
          style={{
            filter: "blur(2px) brightness(0.5) contrast(1.3)",
            transform: "scale(2.9)",
          }}
          quality={100}
          priority={false}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-white text-4xl md:text-5xl font-medium text-center mb-16">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div
            className="relative w-[344px] h-[259px] rounded overflow-hidden mx-auto flex flex-col justify-end"
            style={{
              background:
                "linear-gradient(112.72deg, #0B1313 7.95%, #091622 94.16%)",
            }}
          >
            <Image
              src="/values/book.png"
              alt={t.values[0].title}
              width={750}
              height={760}
              className="absolute object-cover object-center z-10"
              style={{
                top: "-325px",
                left: "75px",
                transform: "scale(1.3)",
                filter: "brightness(0.7)",
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
              }}
              quality={100}
              priority
              unoptimized
            />
            <div className="relative z-20 h-full flex items-end">
              <div className="pl-[20px] pr-6 pb-6 flex flex-col gap-[12px] h-[125px] w-[285px]">
                <h3 className="text-white text-xl font-medium leading-none">
                  {t.values[0].title}
                </h3>
                <p className="text-gray-400 text-[15px] font-light leading-[1.2] font-sans">
                  {t.values[0].description}
                </p>
              </div>
            </div>
          </div>
          <div
            className="relative w-[344px] h-[259px] rounded overflow-hidden mx-auto flex flex-col justify-end"
            style={{
              background:
                "linear-gradient(112.72deg, #0B1313 7.95%, #091622 94.16%)",
            }}
          >
            <Image
              src="/values/hands.png"
              alt={t.values[1].title}
              width={450}
              height={259}
              className="absolute object-cover z-10"
              style={{
                top: "21px",
                left: "0px",
                transform: "scale(1)",
                filter: "brightness(0.7)",
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
              }}
              quality={100}
              priority
              unoptimized
            />
            <div className="relative z-20 h-full flex items-end">
              <div className="pl-[20px] pr-6 pb-6 flex flex-col gap-[12px] h-[125px] w-[385px]">
                <h3 className="text-white text-xl font-medium leading-none">
                  {t.values[1].title}
                </h3>
                <p className="text-gray-400 text-[15px] font-light leading-[1.2] font-sans">
                  {t.values[1].description}
                </p>
              </div>
            </div>
          </div>
          <div
            className="relative w-[344px] h-[259px] rounded overflow-hidden mx-auto flex flex-col justify-end"
            style={{
              background:
                "linear-gradient(112.72deg, #0B1313 7.95%, #091622 94.16%)",
            }}
          >
            <Image
              src="/values/man.png"
              alt={t.values[2].title}
              width={700}
              height={500}
              className="absolute object-cover object-center z-10"
              style={{
                left: "45px",
                top: "25px",
                transform: "scale(1.4)",
                filter: "brightness(0.7)",
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
              }}
              quality={100}
              priority
              unoptimized
            />
            <div className="relative z-20 h-full flex items-end">
              <div className="pl-[20px] pr-6 pb-6 flex flex-col gap-[12px] h-[125px] w-[385px]">
                <h3 className="text-white text-xl font-medium leading-none">
                  {t.values[2].title}
                </h3>
                <p className="text-gray-400 text-[15px] font-light leading-[1.2] font-sans">
                  {t.values[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
