import Image from "next/image";

export default function info() {
  return (
    <section className="w-full relative aspect-[16/12] overflow-hidden rounded-[80px]">
      {/* Фон-картинка без блюра */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full pointer-events-none">
        <Image
          src="/master.png"
          alt="Background"
          fill
          priority
          className="object-cover w-auto h-[1440px] rounded-[80px]"
          style={{ zIndex: 0 }}
        />
        {/* Только градиент без блюра */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent rounded-[80px]" />
      </div>

      {/* Контент */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center md:pb-20">
        <p className="text-sm md:text-base mb-2">
          Великий Мастер Великой Ложи Казахстана
        </p>
        <h2 className="text-3xl md:text-5xl font-bold">Айдар Алпысбай</h2>
        <p className="mt-4 max-w-2xl text-sm md:text-base">
          Добродетель — это основа нашей морали и этики. Пусть честность,
          справедливость и доброта будут твоими постоянными ориентирами. В
          каждом действии и решении стремись к высокому стандарту морали,
          отражая внутреннюю чистоту и уважение к окружающим.
        </p>
      </div>
    </section>
  );
}
