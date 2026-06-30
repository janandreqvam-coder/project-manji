export default function Rain() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
      {[...Array(80)].map((_, i) => (
        <span
          key={i}
          className="absolute h-8 w-px bg-white animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${1 + Math.random() * 1}s`,
            fontSize: `${12 + Math.random() * 25}px`,
          }}
        />
      ))}
    </div>
  );
}