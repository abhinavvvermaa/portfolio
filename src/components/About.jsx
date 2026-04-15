import AboutGradientBackground from './AboutGradientBackground'
import myImg from '../assets/myimg.jpeg'

export default function About() {
  return (
    <section id="about" className="bg-gray-800 text-white py-16 md:py-24 relative overflow-hidden">
      <AboutGradientBackground />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative mx-auto w-full max-w-sm slide-in-left">
            <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-blue-500 to-purple-600 opacity-40 blur-3xl animate-float"></div>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-blue-400/20 bg-gray-900 shadow-xl shadow-blue-500/20">
              <img src={myImg} alt="Abhinav Verma" className="w-full h-full object-cover" />
              <div className="p-4 text-center bg-gray-900/90">
                <p className="text-sm text-gray-300">Abhinav Verma</p>
              </div>
            </div>
          </div>

          <div className="slide-in-right">
            <p className="text-gray-300 text-lg mb-6">
              I am a Hardware & PCB Design Engineer with over 3 years of experience in building production-grade embedded systems across defense, fintech, and metro infrastructure domains. My work spans full-cycle hardware development, including schematic design, multi-layer PCB layout, signal and power integrity analysis, and EMI/EMC compliance.
            </p>

            <p className="text-gray-300 text-lg mb-6">
              I have contributed to high-impact projects for organizations like DRDO, BEL, DMRC, and Airtel Payment Bank. My experience includes developing EMV-certified payment terminals, radar signal processing systems, optical communication hardware, and reliable power solutions for metro ticketing systems.
            </p>

            <p className="text-gray-300 text-lg mb-8">
              I specialize in delivering robust and optimized hardware solutions by combining strong PCB design practices, embedded firmware integration, and system-level validation. I am passionate about solving complex engineering problems and building reliable systems that perform in real-world conditions.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-blue-400">✓</span>
                <span className="text-gray-300">3+ Years of Industry Experience</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-blue-400">✓</span>
                <span className="text-gray-300">Multi-layer PCB Design & Signal Integrity</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400">✓</span>
                <span className="text-gray-300">Embedded Systems & Hardware Debugging</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400">✓</span>
                <span className="text-gray-300">Worked with DRDO, BEL, DMRC & Airtel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}