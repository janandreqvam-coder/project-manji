import Image from "next/image";

const cars = [
  {
    name: "Nissan Silvia S15",
    image: "/images/Nissan Silvia S15.png",
  },
  {
    name: "Nissan Skyline R32",
    image: "/images/Nissan Skyline R32.png",
  },
  {
    name: "Toyota Supra MK4",
    image: "/images/Toyota Supra MK4.png",
  },
];

export default function FeaturedCars() {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-center text-5xl font-black uppercase">
          Featured <span className="text-red-600">Garage</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {cars.map((car) => (
            <div
              key={car.name}
              className="overflow-hidden rounded-xl border border-red-600/20 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-red-600"
            >
              <Image
                src={car.image}
                alt={car.name}
                width={800}
                height={500}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {car.name}
                </h3>

                <p className="mt-2 text-gray-400">
                  Community build.
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}