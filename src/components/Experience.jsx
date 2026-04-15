import ExperienceBackground from './ExperienceBackground'

export default function Experience() {
  const experiences = [
    {
      role: "Hardware & PCB Designer",
      company: "Applied Electro Magnetics Pvt Ltd",
      duration: "Jan 2026 - Present",
      responsibilities: [
        "Led radar signal processing hardware design for Bharat Electronics Limited, including board-level debugging and signal integrity optimization.",
        "Executed system validation and hardware test plans to improve processing stability and performance.",
        "Supported gimbal aligner system development for Velmenni, including optical wireless communication calibration and hardware integration."
      ],
      projects: [
        {
          title: "Radar Signal Processing Module",
          description: "Designed and validated embedded radar processing hardware for air traffic control with precise signal conditioning and EMI mitigation."
        },
        {
          title: "Gimbal Aligner Communication Interface",
          description: "Developed hardware and calibration workflows for optical wireless gimbal alignment systems, ensuring robust link stability."
        },
        {
          title: "Board-Level Validation and System Testing",
          description: "Executed comprehensive board-level testing, system debugging, and performance tuning across power and signal domains."
        }
      ]
    },
    {
      role: "Electronic Design Engineer",
      company: "Satyam Software Solutions Pvt. Ltd. (S-CUBE)",
      duration: "April 2023 - Present",
      responsibilities: [
        "Designed an Open-Loop Card Reader with an Android application board, ensuring compliance with EMVCo L1, L2, and L3 certifications for secure payment processing.",
        "Developed hardware architectures, schematics, and PCB layouts for Card Dispenser modules for Airtel Payment Bank with NPCI, and USB-HUB interfaces for DMRC TVMs.",
        "Designed DC UPS hardware for CMRL ticket vending machines, AFC gates, and automatic/manual power-off control via UART.",
        "Performed reverse engineering on the DC Booster Module for DMRC AC exhaust fan PCB.",
        "Resolved design errors and optimized layouts for DMRC platform screen doors and flap-controller systems.",
        "Created detailed project documentation aligned with SOPs and supported project execution with process compliance."
      ]
    },
    {
      role: "Engineering Intern",
      company: "Aerial Delivery Research and Development Establishment (DRDO)",
      duration: "June 2022 - July 2022",
      responsibilities: [
        "Built an application to measure the distance between two coordinates and determine location using radar data.",
        "Collaborated on electronic system integration for aerial delivery research applications."
      ]
    }
  ]

  const education = [
    {
      degree: "B.Tech. (ECE)",
      field: "Electronics & Communication Engineering",
      institution: "Dr. A.P.J. Abdul Kalam Technical University",
      year: "Aug 2019 - May 2023"
    },
    {
      degree: "Intermediate (CBSE)",
      field: "Senior Secondary",
      institution: "Gayatri Public School, Agra",
      year: "Jun 2018 - May 2019"
    },
    {
      degree: "High School (CBSE)",
      field: "Secondary Education",
      institution: "University Model School, Agra",
      year: "Jun 2016 - May 2017"
    }
  ]

  return (
    <section id="experience" className="bg-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
      <ExperienceBackground />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400 fade-in">Experience & Education</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-300 fade-in-slow">Work Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, idx) => {
                const isCurrent = exp.company === "Applied Electro Magnetics Pvt Ltd"
                return (
                <div key={idx} className="experience-card bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500 relative overflow-hidden" style={{ animationDelay: `${idx * 0.16}s` }}>
                  <h4 className="text-lg font-bold text-blue-400">{exp.role}</h4>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div>
                      <p className="text-gray-400 text-sm">{exp.company}</p>
                      <p className="text-gray-500 text-xs">{exp.duration}</p>
                    </div>
                    {isCurrent && (
                      <span className="px-3 py-1 bg-green-500/20 border border-green-500 rounded-full text-xs font-semibold text-green-400 whitespace-nowrap">
                        Active Now
                      </span>
                    )}
                  </div>
                  {exp.projects && (
                    <div className="mb-4 rounded-lg border border-blue-500/30 bg-blue-950/20 p-4">
                      <h5 className="text-base font-semibold text-blue-200 mb-3">Applied Electro Magnetics Projects</h5>
                      <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm">
                        {exp.projects.map((project, projectIdx) => (
                          <li key={projectIdx}>
                            <span className="font-semibold text-white">{project.title}:</span> {project.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                    {exp.responsibilities.map((line, lineIdx) => (
                      <li key={lineIdx}>{line}</li>
                    ))}
                  </ul>
                </div>
                )
              })}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-300">Education</h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="education-card bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500 relative" style={{ animationDelay: `${0.5 + idx * 0.16}s` }}>
                  <div className="absolute top-2 right-2 flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs text-cyan-400 font-semibold">Certified</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-400">{edu.degree}</h4>
                  <p className="text-gray-400 text-sm mb-2">{edu.field}</p>
                  <p className="text-gray-300 text-sm">{edu.institution}</p>
                  <p className="text-gray-500 text-sm mt-2">{edu.year}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-8 bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition duration-500">
              <h4 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Certifications
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300 group">
                  <span className="text-green-400 text-xl">⬢</span>
                  <span>IoT & Embedded Systems Specialist</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300 group">
                  <span className="text-cyan-400 text-xl">⬢</span>
                  <span>PCB Design & Manufacturing</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300 group">
                  <span className="text-blue-400 text-xl">⬢</span>
                  <span>Firmware Development Certification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
