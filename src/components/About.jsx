import AboutGradientBackground from "./AboutGradientBackground";
import myImg from "../assets/myimg.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-800 text-white py-16 md:py-24 relative overflow-hidden"
    >
      <AboutGradientBackground />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative mx-auto w-full max-w-sm slide-in-left">
            <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-blue-500 to-purple-600 opacity-40 blur-3xl animate-float"></div>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-blue-400/20 bg-gray-900 shadow-xl shadow-blue-500/20">
              <img
                src={myImg}
                alt="Abhinav Verma"
                className="w-full h-full object-cover"
              />
              <div className="p-4 text-center bg-gray-900/90">
                <p className="text-sm text-gray-300">Abhinav Verma</p>
              </div>
            </div>
          </div>

          <div className="slide-in-right">
            <p className="text-gray-300 text-lg mb-6">
              I am an Electronics Hardware Design Engineer with 3+ years of
              experience in designing production-grade embedded systems for
              defense, metro infrastructure, industrial automation, and fintech
              applications.
            </p>

            <p className="text-gray-300 text-lg mb-6">
              I have contributed to mission-critical projects for organizations
              such as DRDO, BEL, DMRC, and Airtel Payments Bank involving radar
              systems, payment terminals, metro automation hardware, optical
              communication systems, and industrial embedded platforms.
            </p>

            <div className="text-gray-300 text-lg mb-8">
              <p className="mb-4">
                My development workflow spans complete hardware lifecycle
                activities including:
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">▹</span>
                  System architecture definition
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-blue-400">▹</span>
                  Schematic capture
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-blue-400">▹</span>
                  Component selection
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-blue-400">▹</span>
                  High-speed PCB layout
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-blue-400">▹</span>
                  FPGA & embedded integration
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-blue-400">▹</span>
                  Hardware bring-up
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-blue-400">▹</span>
                  Board-level debugging
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-blue-400">▹</span>
                  Validation & compliance testing
                </li>
              </ul>
            </div>

            <p className="text-gray-300 text-lg mb-8">
              I am passionate about building reliable, scalable, and
              manufacturable electronic systems optimized for real-world
              industrial environments.
            </p>

            
          </div>
        </div>
      </div>
    </section>
  );
}
