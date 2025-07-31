import React from "react";

const lodges = [
  {
    title: "Достопочтенная ложа №1 «Алихан Букейханов»",
    founded: "2016",
    location: "Казахский, русский",
    img: "/lodges/lodge1.png",
  },
  {
    title: "Достопочтенная ложа №2 «Свет Востока»",
    founded: "2016",
    location: "Казахский, русский",
    img: "/lodges/lodge2.png",
  },
  {
    title: "Достопочтенная ложа №3 «United Nomadic Brothers»",
    founded: "2016",
    location: "Английский",
    img: "/lodges/lodge3.png",
  },
  {
    title: "Достопочтенная ложа №4 «Байтерек»",
    founded: "2017",
    location: "Казахский, русский",
    img: "/lodges/lodge4.png",
  },
  {
    title: "Достопочтенная ложа №5 «А.С. Пушкин»",
    founded: "2018",
    location: "Русский",
    img: "/lodges/lodge5.png",
  },
];

export default function LodgeCards() {
  return (
    <>
      <div
        className="relative min-h-screen p-8 -mt-[160px] pt-[260px]"
        style={{
          background: `linear-gradient(to bottom, rgba(17, 24, 39, 0.7), rgba(0, 0, 0, 0.7))`,
        }}
      >
        {/* Фоновое изображение */}
        <div className="absolute inset-0 z-0">
          <img
            src="/backlinesZoom.jpg"
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

          {/* Синий оверлей с 30% прозрачностью */}
          <div
            className="absolute inset-0 blur-sm opacity-10"
            style={{
              background: `linear-gradient(to bottom, rgba(13, 21, 40, 0.7), rgba(0, 0, 0, 0.7))`,
            }}
          />
        </div>

        <div className="z-50 relative">
          <div
            className="rounded-[24px] px-9 py-4 shadow-lg flex items-center gap-8 mx-auto"
            style={{
              width: "1528px",
              height: "295px",
              background:
                "radial-gradient(circle at center bottom, #0A141A 0%, #2A251C 50%, #1A1611 100%)",
            }}
          >
            <img
              src="/logo.png"
              alt="Великая ложа Казахстана"
              width={282}
              height={180}
              className="rounded-full"
            />
            <div className="text-left">
              <h3 className="text-[48px] font-semibold text-white">
                Великая ложа Казахстана
              </h3>
              <p className="text-[23px] text-gray-400">Основана в 2016</p>
            </div>
          </div>

          {/* Соединительные линии */}
          <svg
            className="absolute top-[260px] left-1/2 transform -translate-x-1/2 z-40"
            width="1528"
            height="160"
            style={{ pointerEvents: "none" }}
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

          <div className="flex justify-center mt-22">
            <div className="w-[1528px] flex justify-between gap-3">
              {lodges.slice(0, 5).map((lodge, idx) => (
                <div
                  key={idx}
                  className="rounded-[24px] px-4 py-6 shadow-lg flex flex-col items-center text-sm w-[296px] h-[414px]"
                  style={{
                    background: `linear-gradient(180deg, #1A1611 0%, #0A141A 100%)`,
                    border: "0.2px solid #211C14",
                  }}
                >
                  <div className="w-full h-[180px] flex justify-center items-center mb-10">
                    <img
                      src={lodge.img}
                      alt={lodge.title}
                      width={113}
                      height={180}
                      className="object-contain "
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between text-center">
                    <h4 className="text-[11px] font-semibold text-white leading-tight px-2">
                      {lodge.title}
                    </h4>
                    <div className="mt-auto space-y-1">
                      <p className="text-[10px] text-gray-400 mb-2">
                        Дата основания: {lodge.founded}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        Язык проведения работ:
                      </p>
                      <p className="text-[10px] text-gray-400">
                        {lodge.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
