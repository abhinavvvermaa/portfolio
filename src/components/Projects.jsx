import ProjectsBackground from './ProjectsBackground'

export default function Projects() {
  const projects = [
  {
    id: 1,
    title: "Wireless Digital Notice Board",
    description: "Mobile-phone-controlled notice board using LoRa modules for large spaces like campuses and offices, enabling real-time message updates.",
    tech: ["LoRa", "Arduino", "Mobile App", "Wireless Communication", "Bluetooth"],
    icon: "📡"
  },
  {
    id: 2,
    title: "LOS Optical Communication Model",
    description: "Line-of-sight optical data transmission system using Arduino, LED, and photodiode with parity and Hamming error correction for reliable communication.",
    tech: ["Arduino", "Optical Communication", "LED", "Error Correction", "IR Sensor"],
    icon: "💡"
  },

  // 🔥 NEW PROFESSIONAL PROJECTS

  {
    id: 3,
    title: "EMV Open Loop Card Reader",
    description: "Designed EMVCo L1/L2/L3 compliant card reader integrated with Android board for secure and seamless payment processing.",
    tech: ["PCB Design", "Android", "Payment Systems", "Dual Host Architecture", "VGA Routing"],
    icon: "💳"
  },
  {
    id: 4,
    title: "Card Dispenser System (Airtel)",
    description: "Developed hardware architecture, schematics, and PCB layouts for Airtel Payment Bank card dispenser in collaboration with NPCI.",
    tech: ["PCB Design", "Hardware Architecture", "OPTO Sensors", "Embedded Systems", "Stepper Motor Driver"],
    icon: "🏧"
  },
  {
    id: 5,
    title: "USB Hub Interface for DMRC",
    description: "Designed GPIO, UART, and HDMI based USB hub for Delhi Metro TVM system integration with peripheral devices.",
    tech: ["UART", "GPIOs", "HDMI", "Embedded Systems", "USB Type A"],
    icon: "🔌"
  },
  {
    id: 6,
    title: "DC UPS for Metro Systems",
    description: "Developed DC UPS system for CMRL providing reliable backup for TVM and AFC gates with UART-based control logic.",
    tech: ["Power Electronics", "UPS", "UART Auto Shutdown", "Embedded Systems", "Lithium Cell Battery"],
    icon: "🔋"
  },
  {
    id: 7,
    title: "DC Booster Module Reverse Engineering",
    description: "Performed reverse engineering on DMRC AC exhaust fan PCB to optimize circuit performance and efficiency.",
    tech: ["Reverse Engineering", "PCB", "Power Circuits", "Transformer", "3 Phase AC"],
    icon: "⚙️"
  },
  {
    id: 8,
    title: "Platform Screen Door System",
    description: "Reverse Engineering and Optimized PCB layouts, resolved design issues for DMRC platform screen door and flap controller systems.",
    tech: ["PCB Optimization", "Control Systems", "Embedded Hardware", "Testing"],
    icon: "🚪"
  },
  {
    id: 9,
    title: "Gimbal Aligner",
    description: "Developed a gimbal aligner system with motor control, LoRa, GPS, and barometric sensor integration for precise positioning and alignment.",
    tech: ["Motor Driver", "RTK GPS", "Barometer", "LoRa", "LAN", "Hardware Integration"],
    icon: "🛰️"
  },
  {
    id: 10,
    title: "Radar Signal Processing System",
    description: "Designed and validated radar-based embedded hardware for air traffic control systems with high signal accuracy.",
    tech: ["Radar", "Signal Processing", "PCB Design", "RPi", "CPLD"],
    icon: "📡"
  },
  /*{
    id: 11,
    title: "Board-Level Validation System",
    description: "Executed board-level testing, debugging, and validation for high-performance embedded systems.",
    tech: ["Testing", "Debugging", "Signal Integrity"],
    icon: "🧪"
  }*/
]

  return (
    <section id="projects" className="bg-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
      <ProjectsBackground />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400 fade-in">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[...projects].reverse().map((project, idx) => (
            <div
              key={project.id}
              className="project-card bg-gray-800 rounded-lg p-6 border border-gray-700 fade-in-slow hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="relative">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-blue-400 hover:scale-105 transition duration-300">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                {project.title === 'Battery Management System' && (
                  <div className="energy-flow-group mb-4">
                    <div className="energy-flow-label">Charging Energy</div>
                    <div className="energy-flow">
                      <span className="energy-stream" />
                      <span className="energy-core" />
                      <span className="energy-burst" />
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
