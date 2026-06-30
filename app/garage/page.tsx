"use client";

import { useState } from "react";
import Image from "next/image";
import CarCard from "../components/garage/CarCard";
import { cars } from "../data/data/cars";

export default function GaragePage() {
  const [selectedClass, setSelectedClass] = useState("All");
  const [search, setSearch] = useState("");

  const filteredCars = cars.filter((car) => {
    const matchesClass =
      selectedClass === "All" || car.class === selectedClass;

    const matchesSearch =
      car.name.toLowerCase().includes(search.toLowerCase()) ||
      car.driver.toLowerCase().includes(search.toLowerCase());

    return matchesClass && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="relative h-72 overflow-hidden">

        <Image
          src="/images/garage-hero.jpg"
          alt="Garage Hero"
          fill
          priority
          className="object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 flex h-full items-center justify-center">

          <h1 className="text-center text-5xl font-black uppercase tracking-widest md:text-7xl">
            Community Garage
          </h1>

        </div>

      </section>

      {/* Content */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        {/* Top Bar */}

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

         <input
          type="text"
          placeholder="Search community cars..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-white outline-none transition focus:border-red-500 lg:max-w-md"
/>

          <button className="rounded-xl bg-red-600 px-6 py-3 font-bold transition hover:bg-red-500">
            + Add Build
          </button>

        </div>

        {/* Filters */}

        <div className="mb-10 flex flex-wrap gap-3">

          {["All", "Drift", "Touge", "Shutoko", "Racing", "Cruise"].map((mode) => (
            <button
              key={mode}
              onClick={() => setSelectedClass(mode)}
              className={`rounded-full px-5 py-2 transition 
                
                ${

                selectedClass === mode
                  ? "bg-red-600 text-white"
                  : "border border-red-600 hover:bg-red-600"
              }
            `}
            >
              {mode}
            </button>
          ))}

        </div>

        {/* Car Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}

        </div>

      </section>

    </main>
  )
}
