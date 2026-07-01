import { notFound } from "next/navigation";
import Image from "next/image";
import { cars } from "../../data/data/cars";

export default async function CarPage({
  params,
}: {
  params: Promise<{ car: string }>;
}) {
  const { car: slug } = await params;

  const selectedCar = cars.find(
    (c) =>
      c.name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "") === slug
  );

  if (!selectedCar) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="relative h-[450px]">

        <Image
          src={selectedCar.image}
          alt={selectedCar.name}
          fill
          priority
          className="object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center">

          <h1 className="text-center text-5xl font-black md:text-7xl">
            {selectedCar.name}
          </h1>

          <p className="mt-4 text-xl text-gray-300">
            Driver: {selectedCar.driver}
          </p>

        </div>

      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-xl bg-zinc-900 p-6">
            <h2 className="text-lg font-bold text-red-500">Power</h2>
            <p className="mt-3 text-3xl font-black">
              {selectedCar.power}
            </p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-6">
            <h2 className="text-lg font-bold text-red-500">Class</h2>
            <p className="mt-3 text-3xl font-black">
              {selectedCar.class}
            </p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-6">
            <h2 className="text-lg font-bold text-red-500">Driver</h2>
            <p className="mt-3 text-3xl font-black">
              {selectedCar.driver}
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}