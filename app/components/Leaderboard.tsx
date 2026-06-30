const drivers = [
  { name: "bones13", points: 9650 },
  { name: "Rob | WhtYaTalkinAbeet", points: 9400 },
  { name: "MHQ | AciD", points: 9210 },
  { name: "Curtis (BrakeCheckBurt)", points: 8870 },
];

export default function Leaderboard() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-5xl px-6">

        <h2 className="mb-10 text-center text-5xl font-black uppercase text-white">
          Leaderboard
        </h2>

        <div className="space-y-4">

          {drivers.map((driver, index) => (

            <div
              key={driver.name}
              className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 p-6"
            >

              <div className="flex gap-6">

                <span className="text-3xl font-black text-red-500">
                  #{index + 1}
                </span>

                <span className="text-2xl font-bold text-white">
                  {driver.name}
                </span>

              </div>

              <span className="text-xl text-gray-300">
                {driver.points} pts
              </span>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}