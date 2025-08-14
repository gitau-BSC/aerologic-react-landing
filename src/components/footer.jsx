import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo / Brand */}
        <div className="flex items-center mb-6 md:mb-0">
          <img src="/images/bus.png" alt="logo" style={{ height: "40px" }} />
          <span className="ml-2 text-xl font-bold">
            <span className="text-white">Aero</span>
            <span className="text-cyan-400">logic</span>
          </span>
        </div>

               {/* Social Links */}
        <div className="flex space-x-5">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-400 transition"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-400 transition"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-400 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div> 
    {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Aerologic. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;
