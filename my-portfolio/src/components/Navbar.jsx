import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'WORK', href: '#showcase', id: 'showcase' }, // Updated link
    { name: 'CONTACT', href: '#contact', id: 'contact' },
       { name: 'RESUME', href: '#resume', id: 'resume' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const currentSection = links.find(link => {
        const el = document.getElementById(link.id);
        return el && el.offsetTop <= scrollPos && (el.offsetTop + el.offsetHeight) > scrollPos;
      });

      if (currentSection) {
        setActive(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  const linkClasses = (id) => 
    `text-gray-300 hover:text-accent-teal transition-colors duration-300 ${active === id ? "text-accent-teal" : ""}`;

  return (
    <nav className="bg-primary-dark/80 backdrop-blur-sm fixed w-full z-20 top-0 left-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-bold text-white">PortPaulio</a>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a key={link.name} href={link.href} className={linkClasses(link.id)}>{link.name}</a>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-secondary-dark`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className={`${linkClasses(link.id)} block px-3 py-2 rounded-md text-base font-medium`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

