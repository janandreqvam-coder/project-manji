export default function DiscordCTA() {
  return (
    <section className="bg-black py-24">

      <div className="mx-auto max-w-5xl rounded-2xl border border-red-600 bg-zinc-900 p-16 text-center">

        <h2 className="text-5xl font-black uppercase">
          Join the Crew
        </h2>

        <p className="mt-6 text-xl text-gray-300">
          Drifting.
          Touge.
          Shutoko.
          Racing.

          <br />

          One Crew.
          One Passion.
        </p>

        <a
          href="https://discord.gg/VMFycskcWp"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-xl bg-red-600 px-10 py-5 text-xl font-bold transition hover:bg-red-500"
        >
          Join Discord
        </a>

      </div>

    </section>
  );
}