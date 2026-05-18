export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-4">About</h4>
            <p className="text-sm">
              Hardware & PCB Engineer passionate about designing innovative
              embedded systems, IoT solutions, FPGA-based applications, and
              high-speed PCB hardware.{" "}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#home" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/abhinavvvermaa?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  className="hover:text-blue-400 transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:abhinavverma0205@gmail.com"
                  className="hover:text-blue-400 transition"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p className="text-gray-500">
            © {currentYear} Electronics Engineer Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
