interface CardProps {
  title: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="rounded-2xl border border-red-600/30 bg-zinc-900/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]">

      <h2 className="mb-4 text-xl font-bold text-red-500">
        {title}
      </h2>

      {children}

    </div>
  );
}