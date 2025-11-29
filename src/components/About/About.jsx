import React from "react";
import profileImage from "../../assets/profile.png";
import { HiOutlineDownload } from "react-icons/hi";
const About = () => {
  return (
    <section
      id="about"
      className="py-10 px-[7vw] lg:px-[20vw] font-sans  lg:mt-24"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Greeting */}
          <h1 className="text-2xl sm:text-3xl  font-bold  text-white leading-tight">
            Hello, I am
          </h1>

          {/* Name */}
          <h2 className="text-3xl sm:text-4xl  font-bold text-white mt-2 leading-tight">
            Md Sadik Ashik
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-stone-400 mt-8 leading-relaxed">
            Recently completed my graduation in Computer Science and Engineering
            from Mawlana Bhashani Science and Technology University. I have a
            strong interest in frontend development and enjoy creating
            user-friendly, responsive web applications. I am eager to learn,
            grow, and contribute positively to a collaborative team, while
            continuously improving my skills in web development.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/192HQ5eU0agZmJpTR6UjBUVNd4A4MuB7S/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-stone-200 py-3 px-8 rounded-full text-lg font-semibold mt-8 transition duration-200 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8C1007, #660B05)",
              boxShadow: "0 0 6px #8C1007, 0 0 20px #8C1007",
            }}
          >
            <HiOutlineDownload className="mr-2 text-xl font-bold" />
            Download CV
          </a>
        </div>

        
        {/* RIGHT SIDE */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-[0_0_20px_5px_rgba(255,0,0,0.2)]">
            <img
              src={profileImage}
              alt="Md Sadik Ashik"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
