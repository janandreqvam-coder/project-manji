export default function Modes() {

  const modes = [
    "Drifting",
    "Touge",
    "Shutoko",
    "Racing",
    "Cruises",
    "Events",
  ];

  return (
    <section className="bg-black py-24">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-center text-5xl font-black uppercase text-white">
          Community Modes
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {modes.map((mode) => (

            <div
              key={mode}
              className="rounded-xl border border-red-600/20 bg-zinc-900 p-10 transition hover:scale-105 hover:border-red-600"
            >

              <h3 className="text-2xl font-bold text-red-500">
                {mode}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}