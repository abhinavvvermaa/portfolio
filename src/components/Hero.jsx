import HeroBackground from './HeroBackground'

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-gray-900 via-slate-950 to-gray-900 text-white py-20 md:py-32 relative overflow-hidden">
      <HeroBackground />
      <div className="max-w-6xl mx-auto px-4 lg:px-8 grid gap-12 lg:grid-cols-[1.4fr_1fr] items-center relative z-10">
        <div className="space-y-8 text-center lg:text-left hero-text">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300">Electronics Engineer</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
            Building embedded systems, IoT devices, and intelligent hardware solutions.
          </h1>
          <p className="max-w-2xl mx-auto lg:mx-0 text-gray-300 text-lg md:text-xl">
            I design smart hardware and firmware for real-world products, from PCB layouts to cloud-connected devices.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <button
              type="button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full bg-blue-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
            >
              Contact Me
            </button>
            <button
              type="button"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full border border-blue-400/60 bg-white/5 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-blue-200 transition hover:border-blue-300 hover:text-white"
            >
              View Projects
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl hero-card">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-cyan-400/20 to-purple-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gray-900 shadow-2xl shadow-blue-500/20 p-8">
            <div className="circuit-card">
              <span className="signal-dot" style={{ top: '18%', left: '22%' }} />
              <span className="signal-dot" style={{ bottom: '20%', right: '18%' }} />
              <div className="chip-block">
                <div className="chip-pin pin-top-left" />
                <div className="chip-pin pin-top-right" />
                <div className="chip-pin pin-bottom-left" />
                <div className="chip-pin pin-bottom-right" />
                <div className="chip-center">IoT</div>
              </div>
              <div className="circuit-lines">
                <span className="circuit-line horizontal" style={{ top: '18%', left: '5%', width: '72%' }} />
                <span className="circuit-line vertical" style={{ top: '18%', left: '77%', height: '30%' }} />
                <span className="circuit-line horizontal" style={{ top: '50%', left: '15%', width: '60%' }} />
                <span className="circuit-line vertical" style={{ top: '50%', left: '15%', height: '25%' }} />
                <span className="circuit-node" style={{ top: '18%', left: '5%' }} />
                <span className="circuit-node" style={{ top: '50%', left: '15%' }} />
                <span className="circuit-node" style={{ top: '78%', left: '77%' }} />
              </div>
              <div className="circuit-status">
                <div>
                  <span className="status-dot active" />
                  Live Prototype
                </div>
                <div>
                  <span className="status-dot" />
                  Embedded Design
                </div>
                <div>
                  <span className="status-dot" />
                  Firmware Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
