import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScroll, setIsScroll] = useState(false);

  // Detect scroll for navbar background + active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);

      const sections = ["about", "skills", "projects", "education", "contact"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll (with offset ONLY on About)
  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    setIsOpen(false);

    if (!section) return;

    if (sectionId === "about") {
      const yOffset = -110; // navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      return;
    }

    section.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] ${
        isScroll ? "bg-stone-900" : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">

        {/* Logo */}
        <div
          className="text-lg font-bold cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection("about");
            setIsOpen(false);
          }}
        >
          <span className="text-red-400">&lt;</span>
          Sadik Ashik
          <span className="text-red-400">/&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`cursor-pointer transition hover:text-red-400 ${
                activeSection === item.id ? "text-red-400" : ""
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/sadikashik2"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sadikashik02"
            className="text-gray-400 hover:text-blue-400"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {!isOpen && (
            <FiMenu
              className="text-2xl text-white cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/90 z-50 md:hidden">
          <FiX
            className="absolute top-5 right-7 text-white text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />

          <ul className="flex flex-col items-center justify-center space-y-6 mt-20 text-gray-300">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`cursor-pointer hover:text-red-400 ${
                  activeSection === item.id ? "text-red-400" : ""
                }`}
              >
                {item.label}
              </li>
            ))}

            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/sadikashik2"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sadikashik02"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
