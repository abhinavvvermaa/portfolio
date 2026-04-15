import SkillsBackground from './SkillsBackground'

export default function Skills() {
  const skillCategories = [
    {
      category: "Circuit Design Tools",
      skills: ["Altium Designer", "KiCad", "SOLIDWORKS"]
    },
    {
      category: "Hardware Design",
      skills: ["Component Selection", "Schematic Capture", "PCB Layout", "Testing", "Debugging"]
    },
    {
      category: "Programming & Simulation",
      skills: ["C", "C++", "Python", "Verilog", "LTspice"]
    },
    {
      category: "Electronics Domains",
      skills: ["Analog", "Digital", "RF/Mixed-Signal", "EMI/EMC"]
    },
    {
      category: "Protocols",
      skills: ["CAN", "Ethernet", "I2C", "I2S", "PCIe", "SPI", "UART", "USB"]
    },
    {
      category: "Testing Equipment",
      skills: ["Oscilloscope", "Multimeter", "LCR Meter", "Power Supply", "Electronic Load", "Soldering"]
    }
  ]

  return (
    <section id="skills" className="bg-gray-800 text-white py-16 md:py-24 relative overflow-hidden">
      <SkillsBackground />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400 fade-in">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-card bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition duration-500 hover:shadow-lg hover:shadow-blue-500/25" style={{ animationDelay: `${idx * 0.13}s` }}>
              <h3 className="text-xl font-bold mb-4 text-blue-300">{category.category}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="skill-item" style={{ animationDelay: `${0.15 + idx * 0.08 + i * 0.06}s` }}>
                    <span className="skill-bullet" />
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
