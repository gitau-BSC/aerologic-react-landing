import { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
      setToggle(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'testimonials'];
      let closestSection = activeSection;
      let minDistance = Infinity;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - window.innerHeight / 2);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
        }
      });

      setActiveSection(closestSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="flex items-center justify-between p-5 sticky top-0 bg-white z-50 shadow-md">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          className="flex items-center text-2xl font-bold"
        >
          <img src="/images/bus.png" alt="logo" style={{ height: "40px" }} />
          <span className="ml-2">
            <span className="text-black">Aero</span>
            <span className="text-cyan-400">logic</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4">
          {['home', 'about', 'services', 'testimonials'].map(section => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(section); }}
              className={`${activeSection === section ? 'bg-gray-300' : ''} px-4 py-2 rounded-full hover:bg-gray-300`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          {toggle
            ? <AiOutlineClose size={28} onClick={() => setToggle(false)} className="cursor-pointer" />
            : <HiMenuAlt1 size={28} onClick={() => setToggle(true)} className="cursor-pointer" />
          }
        </div>
      </div>

      {/* Mobile Dropdown */}
      {toggle && (
        <div className="lg:hidden bg-blue-300 px-6 py-4">
          {['home', 'about', 'services', 'testimonials'].map(section => (
            <div
              key={section}
              onClick={() => scrollToSection(section)}
              className={`${activeSection === section ? 'font-bold' : ''} py-2 cursor-pointer`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Nav;
