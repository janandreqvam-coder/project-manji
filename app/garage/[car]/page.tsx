export default async function CarPage({
  params,
}: {
  params: Promise<{ car: string }>;
}) {
  const { car } = await params;

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-5xl font-bold">
        Car Slug: {car}
      </h1>
    </main>
  );
}