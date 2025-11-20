import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        



        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6 ">
          {[
            
            
            { icon: <FaLinkedin className="hover:text-blue-500"/>, link: "www.linkedin.com/in/sadikashik02" },
            { icon: <FaGithub />, link: "https://github.com/sadikashik2" },
            { icon: <FaFacebook className="hover:text-blue-500"/>, link: "https://www.facebook.com/sadik.ashik.3" },
            { icon: <FaInstagram className="hover:text-pink-500"/>, link: "https://www.instagram.com/sadikashik16/" }
            
            
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-stone-300 transition-transform transform hover:scale-120"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-stone-400 mt-6">
          © 2025 Sadik Ashik. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
