import { useState } from 'react'
import ContactBackground from './ContactBackground'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Email integration can be added here
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    alert('Message sent! I will get back to you soon.')
  }

  return (
    <section id="contact" className="bg-gray-800 text-white py-16 md:py-24 relative overflow-hidden">
      <ContactBackground />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400 fade-in">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in-slow">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-400 text-lg mb-8">
              I'm always interested in hearing about new projects and opportunities in electronics engineering. Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📧</span>
                <div>
                  <h4 className="font-bold text-blue-400">Email</h4>
                  <p className="text-gray-400">abhinavverma0205@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-3xl">📱</span>
                <div>
                  <h4 className="font-bold text-blue-400">Phone</h4>
                  <p className="text-gray-400">+91 96364 24084</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <h4 className="font-bold text-blue-400">Location</h4>
                  <p className="text-gray-400">Noida, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-bold text-blue-400 mb-4">Connect</h4>
              <div className="flex gap-4 flex-wrap">
                <a href="https://linkedin.com/in/abhinavvermaa" target="_blank" rel="noreferrer" className="text-2xl hover:text-blue-400 transition">LinkedIn</a>
                <a href="mailto:abhinavverma0205@gmail.com" className="text-2xl hover:text-blue-400 transition">Email</a>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/AV_Resume.pdf"
                download="AV_Resume.pdf"
                className="inline-block rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-blue-400"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-slow">
            <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg border border-gray-700">
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="contact-input w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                className="btn-glow w-full bg-blue-500 hover:bg-blue-600 font-bold py-3 rounded transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
