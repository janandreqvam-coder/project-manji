interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-red-600/20 bg-zinc-900/80 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.35)]">

      <div className="mb-4 flex items-center justify-between">

        <h3 className="text-lg font-bold text-gray-300">
          {title}
        </h3>

        <span className="text-4xl">
          {icon}
        </span>

      </div>

      <p className="text-4xl font-black text-white">
        {value}
      </p>

      <p className="mt-2 text-gray-400">
        {subtitle}
      </p>

    </div>
  );
}