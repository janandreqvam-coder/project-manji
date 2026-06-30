import { notFound } from "next/navigation";
import Image from "next/image";
import { cars } from "../../data/data/cars";

interface Props {
  params: {
    car: string;
  };
}

export default function CarPage({ params }: Props) {
  const car = cars.find(
    (c) =>
      c.name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "") === params.car
  );

  if (!car) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <section className="relative h-[500px]">

        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center">

          <h1 className="text-center text-6xl font-black">
            {car.name}
          </h1>

          <p className="mt-6 text-2xl text-gray-300">
            Driver: {car.driver}
          </p>

        </div>

      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-xl bg-zinc-900 p-6">
            <h2 className="text-red-500 font-bold">Power</h2>
            <p className="mt-2 text-3xl">{car.power}</p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-6">
            <h2 className="text-red-500 font-bold">Class</h2>
            <p className="mt-2 text-3xl">{car.class}</p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-6">
            <h2 className="text-red-500 font-bold">Driver</h2>
            <p className="mt-2 text-3xl">{car.driver}</p>
          </div>

        </div>

      </section>

    </main>
  );
}