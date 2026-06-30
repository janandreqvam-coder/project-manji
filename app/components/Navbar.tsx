import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-red-900/30 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <Image
          src="/images/logo.png"
          alt="Project Manji"
          width={180}
          height={60}
          className="h-12 w-auto"
          priority
        />

<div className="hidden items-center gap-8 md:flex text-white font-semibold">

  <a href="#home" className="hover:text-red-500 transition">Home</a>

  <a href="#garage" className="hover:text-red-500 transition">Garage</a>

  <a href="#drivers" className="hover:text-red-500 transition">Drivers</a>

  <a href="#events" className="hover:text-red-500 transition">Events</a>

  <a href="#gallery" className="hover:text-red-500 transition">Gallery</a>

  <a href="#leaderboards" className="hover:text-red-500 transition">Leaderboard</a>

  <a
    href="https://discord.gg/VMFycskcWp"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg bg-red-600 px-5 py-2 hover:bg-red-700 transition"
  >
    Join
  </a>

</div>
      </div>
    </nav>
  );
}