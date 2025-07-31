import React from "react";

export default function MainLodges() {
  return (
    <section className="relative w-full h-screen bg-blue-700 text-white overflow-hidden rounded-[80px]">
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
    backgroundBlendMode: 'multiply',
  }}
/>
 <div className="absolute h-[10%] inset-0 bg-gradient-to-b from-black/100 via-black/50 to-transparent rounded-[80px]" />

      </div>

      {/* Контент */}
      <div className="relative z-10 flex items-start justify-center h-full py-40">
        <div className="text-center">
          <h1
            className="text-[120px] font-bold tracking-tight leading-[0.9]"
            style={{
              color: "#F4B860",
              textShadow: "0 4px 20px rgba(0,0,0,0.5)",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Основные ложи
            <br />в Казахстане
          </h1>
        </div>
      </div>
    </section>
  );
}
