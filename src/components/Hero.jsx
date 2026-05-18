import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-gray-900 via-slate-950 to-gray-900 text-white py-20 md:py-32 relative overflow-hidden"
    >
      <HeroBackground />
      <div className="max-w-6xl mx-auto px-4 lg:px-8 grid gap-12 lg:grid-cols-[1.4fr_1fr] items-center relative z-10">
        <div className="space-y-8 text-center lg:text-left hero-text">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
            Hardware & PCB Engineer
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
            Hardware System Design Engineer{" "}
            <span className="text-white-400 text-2xl md:text-4xl">|</span> PCB{" "}
            <span className="text-white-400 text-2xl md:text-4xl">|</span> FPGA{" "}
            <span className="text-white-400 text-2xl md:text-4xl">|</span>{" "}
            Embedded Systems
          </h1>
          <p className="max-w-2xl mx-auto lg:mx-0 text-gray-300 text-lg md:text-xl">
            Designing high-reliability embedded hardware, high-speed multilayer
            PCBs, FPGA-based systems, and industrial electronics for defense and metro infrastructure applications.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full bg-blue-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
            >
              Contact Me
            </button>
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border border-blue-400/60 bg-white/5 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-blue-200 transition hover:border-blue-300 hover:text-white"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
