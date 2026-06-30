export default function Drivers() {

  const drivers = [
    "bones13",
    "Rob27",
    "Takumi",
    "Rin",
  ];

  return (
    <section
      id="drivers"
      className="bg-zinc-950 py-24"
    >

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-5xl font-black uppercase text-white">
          Driver Profiles
        </h2>

        <div className="grid gap-6 md:grid-cols-4">

          {drivers.map((driver) => (

            <div
              key={driver}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 hover:border-red-600 transition"
            >

              <h3 className="text-2xl font-bold text-red-500">
                {driver}
              </h3>

              <p className="mt-3 text-gray-400">
                Elite Driver
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}