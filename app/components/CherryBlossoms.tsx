export default function CherryBlossoms() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="absolute animate-bounce text-pink-300 opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${1 + Math.random() * 1}s`,
            fontSize: `${12 + Math.random() * 25}px`,
          }}
        >
          🌸
        </span>
      ))}
    </div>
  );
}