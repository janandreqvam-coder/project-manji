import Image from "next/image";

const cars = [
  {
    name: "Nissan Silvia S15",
    driver: "rob | WhtYaTalkinAbeet",
    power: "420 HP",
    class: "Drift",
  },
  {
    name: "Nissan Skyline R32",
    driver: "acid | MHQ",
    power: "600 HP",
    class: "Shutoko",
  },
  {
    name: "Toyota Supra MK4",
    driver: "bones13",
    power: "720 HP",
    class: "Racing",
  },
  {
    name: "Mazda RX-7 FD",
    driver: "Takumi",
    power: "500 HP",
    class: "Touge",
  },
  {
    name: "Toyota Chaser",
    driver: "Rin",
    power: "450 HP",
    class: "Drift",
  },
  {
    name: "Nissan 180SX",
    driver: "Ace",
    power: "380 HP",
    class: "Cruise",
  },
];

export default function GaragePage() {
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
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-white outline-none transition focus:border-red-500 lg:max-w-md"
          />

          <button className="rounded-xl bg-red-600 px-6 py-3 font-bold transition hover:bg-red-500">
            + Add Build
          </button>

        </div>

        {/* Filters */}

        <div className="mb-10 flex flex-wrap gap-3">

          {["All", "Drift", "Touge", "Shutoko", "Racing"].map((mode) => (

            <button
              key={mode}
              className="rounded-full border border-red-600 px-5 py-2 transition hover:bg-red-600"
            >
              {mode}
            </button>

          ))}

        </div>

        {/* Car Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {cars.map((car) => (

            <div
              key={car.name}
              className="overflow-hidden rounded-xl border border-red-600/20 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-red-500"
            >

              <Image
                src={`/images/${car.name}.png`}
                alt={car.name}
                width={800}
                height={500}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold">
                  {car.name}
                </h2>

                <p className="mt-2 text-gray-400">
                  Driver: {car.driver}
                </p>

                <p className="text-gray-400">
                  Power: {car.power}
                </p>

                <p className="text-red-500">
                  {car.class}
                </p>

                <button className="mt-6 w-full rounded-lg bg-red-600 py-3 font-bold transition hover:bg-red-500">
                  View Build
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}