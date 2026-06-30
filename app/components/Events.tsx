const events = [
  "Friday Night Drift",
  "Touge Championship",
  "Shutoko Cruise",
];

export default function Events() {
  return (
    <section className="fade-up bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="mb-10 text-5xl font-black uppercase text-white">
          Upcoming Events
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {events.map((event) => (

            <div
              key={event}
              className="rounded-xl border border-red-600/20 bg-zinc-900 p-8 hover:border-red-500 transition"
            >

              <h3 className="text-2xl font-bold text-red-500">
                {event}
              </h3>

              <p className="mt-3 text-gray-400">
                Every Friday • 20:00 UTC
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}