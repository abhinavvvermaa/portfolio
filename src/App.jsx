import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import { ArchitectureShowcase } from './components/ArchitectureShowcase'
import PCBShowcase from './components/PCBShowcase'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingBackground from './components/FloatingBackground'

function App() {
  return (
    <div className="bg-gray-900 text-white relative">
      <FloatingBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
        <PCBShowcase />
        <ArchitectureShowcase />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
