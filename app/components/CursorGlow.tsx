export default function CursorGlow() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background:
          "radial-gradient(circle at center, rgba(220,38,38,0.08), transparent 45%)",
      }}
    />
  );
}