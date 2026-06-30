"use client";

import { useState } from "react";
import Image from "next/image";

type Car = {
  id: number;
  name: string;
  driver: string;
  power: string;
  class: string;
  image: string;
};

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-red-600/20 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]">

      <div className="relative">
        <Image
          src={car.image}
          alt={car.name}
          width={800}
          height={500}
          className="h-56 w-full object-cover"
        />

        <button
          onClick={() => setFavorite(!favorite)}
          className="absolute right-4 top-4 rounded-full bg-black/60 p-2 transition hover:scale-110"
        >
          {favorite ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="p-6">

        <h2 className="text-2xl font-bold">
          {car.name}
        </h2>

        <div className="mt-3 space-y-1 text-sm text-gray-400">
          <p>👤 {car.driver}</p>
          <p>⚡ {car.power}</p>
          <p>🏁 {car.class}</p>
        </div>

        <button className="mt-6 w-full rounded-lg bg-red-600 py-3 font-bold transition hover:bg-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.5)]">
          → View Build
        </button>

      </div>

    </div>
  );
}