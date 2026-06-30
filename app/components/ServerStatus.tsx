export default function ServerStatus() {
  return (
    <section className="bg-zinc-950 py-20">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="mb-10 text-center text-5xl font-black uppercase text-white">
          Live Server
        </h2>

        <div className="rounded-2xl border border-green-500 bg-zinc-900 p-10">

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-3xl font-bold text-green-400">
                🟢 ONLINE
              </h3>

              <p className="mt-2 text-gray-400">
                Project Manji Assetto Corsa
              </p>

            </div>

            <div className="text-right">

              <p className="text-5xl font-black text-white">
                14
              </p>

              <p className="text-gray-500">
                Drivers Online
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}