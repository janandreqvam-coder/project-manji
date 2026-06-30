import CherryBlossoms from "./CherryBlossoms";
import Image from "next/image";
import Rain from "./Rain";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <Image
        src="/images/hero.png"
        alt="Project Manji Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Rain */}
      <Rain />
      <CherryBlossoms />

      {/* Content */}
   <div className="relative z-10 flex animate-[fadeIn_1.5s_ease] flex-col items-center px-6 text-center">

    
        <Image
          src="/images/logo.png"
          alt="Project Manji Logo"
          width={650}
          height={650}
          className="mb-8 w-full max-w-2xl"
          priority
        />

        <p className="text-xl italic text-gray-300 md:text-3xl">
          Built on Passion.
          <br />
          A community of petrol heads having fun in their virtual race cars.
        </p>

        <div className="mt-10 flex flex-col gap-4 md:flex-row">

          <a
            href="/garage"
            className="rounded-xl bg-red-600 px-8 py-4 text-xl font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-red-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.6)]"
          >
            ENTER GARAGE
          </a>

          <button className="rounded-xl border border-red-600 px-8 py-4 text-xl font-bold transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-red-600/20">
            JOIN DISCORD
          </button>

        </div>

      </div>
    </section>
  );
}