import Link from "next/link";

const menu = [
  { name: "Home", href: "/", icon: "🏠" },
  { name: "Garage", href: "/garage", icon: "🚗" },
  { name: "Drivers", href: "/drivers", icon: "👥" },
  { name: "Events", href: "/events", icon: "🏁" },
  { name: "Gallery", href: "/gallery", icon: "📸" },
  { name: "Leaderboard", href: "/leaderboard", icon: "🏆" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 border-r border-red-900/30 bg-black/80 backdrop-blur-xl p-6">

      <h1 className="mb-10 text-3xl font-black tracking-widest">
        PROJECT <span className="text-red-600">MANJI</span>
      </h1>

      <nav className="space-y-3">

        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-4 rounded-xl px-5 py-4 transition hover:bg-red-600/20"
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="font-semibold">{item.name}</span>
          </Link>
        ))}

      </nav>

    </aside>
  );
}