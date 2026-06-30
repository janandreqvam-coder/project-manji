import Card from "./ui/Card";

export default function Dashboard() {
  return (
    <section className="fade-up mx-auto max-w-7xl px-6 py-20">

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        <Card title="🟢 Server Status">
          <p className="text-3xl font-bold text-green-500">ONLINE</p>
          <p className="text-gray-400 mt-2">
            148 Members Online
          </p>
        </Card>

        <Card title="🏁 Next Event">
          <p className="text-2xl font-bold">
            Friday Drift Night
          </p>

          <p className="mt-2 text-gray-400">
            20:00 CET
          </p>
        </Card>

        <Card title="🚗 Latest Build">
          <p className="text-2xl font-bold">
            Nissan Silvia S15
          </p>

          <p className="mt-2 text-gray-400">
            Built by Jan
          </p>
        </Card>

        <Card title="👤 Driver Spotlight">
          <p className="text-2xl font-bold">
            Takumi
          </p>

          <p className="mt-2 text-gray-400">
            427 Drift Points
          </p>
        </Card>

        <Card title="📸 Gallery">
          <p className="text-2xl font-bold">
            284 Photos
          </p>

          <p className="mt-2 text-gray-400">
            Latest Community Uploads
          </p>
        </Card>

        <Card title="🏆 Leaderboard">
          <p className="text-2xl font-bold">
            #1 Ghost
          </p>

          <p className="mt-2 text-gray-400">
            12,548 Points
          </p>
        </Card>

      </div>

    </section>
  );
}