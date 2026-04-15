import arch1 from "../assets/Architecture1.jpeg";
import arch2 from "../assets/Architecture2.jpeg";
import arch3 from "../assets/Architecture3.jpeg";
import arch4 from "../assets/Architecture4.jpeg";
import arch5 from "../assets/Architecture5.jpeg";
import arch7 from "../assets/Architecture7.jpeg";
import arch8 from "../assets/Architecture8.jpeg";
import arch9 from "../assets/Architecture9.jpeg";

export function ArchitectureShowcase() {
  const images = [
    arch1, arch2, arch3, arch4, arch5,
    , arch7, arch8, arch9
  ];

  return (
    <section className="bg-black text-white py-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-400">
        Architecture Work
      </h2>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-5 px-6 max-w-6xl mx-auto space-y-5">
        {images.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl break-inside-avoid"
          >
            <img
              src={img}
              className="w-full rounded-2xl transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}