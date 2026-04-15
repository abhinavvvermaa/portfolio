import pcb1 from "../assets/pcb1.jpeg";
import pcb2 from "../assets/pcb2.jpeg";
import pcb3 from "../assets/pcb3.jpeg";
import pcb4 from "../assets/pcb4.jpeg";
import pcb5 from "../assets/pcb5.jpeg";
import pcb6 from "../assets/pcb6.jpeg";
import pcb7 from "../assets/pcb7.jpeg";

export default function PCBShowcase() {
  const images = [pcb1, pcb2, pcb3, pcb4, pcb5, pcb6,pcb7];

  return (
    <section className="bg-gray-900 text-white py-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-400">
        PCB Design Work
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