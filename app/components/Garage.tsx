export default function Garage() {
  return (
    <section
      id="garage"
      className="bg-black py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-5xl font-black uppercase">
          Community <span className="text-red-600">Garage</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-4">

          {[
            "S15 Silvia",
            "R32 GT-R",
            "Supra MK4",
            "RX-7 FD",
          ].map((car) => (

            <div
              key={car}
              className="rounded-xl border border-red-600/20 bg-zinc-900 p-8 hover:border-red-500 transition"
            >

              <h3 className="text-2xl font-bold">
                {car}
              </h3>

              <p className="mt-3 text-gray-400">
                Community Build
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}