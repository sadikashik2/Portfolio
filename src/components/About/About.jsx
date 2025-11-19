import React from "react";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.png";

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
          <h1 className="text-2xl sm:text-3xl  font-bold text-white leading-tight">
            Hello, I am
          </h1>

          {/* Name */}
          <h2 className="text-3xl sm:text-4xl  font-bold text-white mt-2 leading-tight">
            Md Sadik Ashik
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-stone-400 mt-8 leading-relaxed">
             Recently completed my graduation in Computer Science and Engineering from Mawlana Bhashani Science and Technology University. I have a strong interest in frontend development and enjoy creating user-friendly, responsive web applications. I am eager to learn, grow, and contribute positively to a collaborative team, while continuously improving my skills in web development.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1jP7xshPSmSn_XwNTetd0ZC1rRa2IBnDy/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-stone-200 py-3 px-8 rounded-full text-lg font-bold mt-8 transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8C1007, #660B05)",
              boxShadow: "0 0 6px #8C1007, 0 0 20px #8C1007",
            }}
          >
            DOWNLOAD CV
          </a>

        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
         <Tilt
  className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-[0_0_20px_5px_rgba(255,0,0,0.2)]"
  tiltMaxAngleX={20}
  tiltMaxAngleY={20}
  perspective={900}
  scale={1.07}
  transitionSpeed={1500}
  gyroscope={true}
>
  <img
    src={profileImage}
    alt="Md Sadik Ashik"
    className="w-full h-full object-cover"
  />
</Tilt>

        </div>
      </div>
    </section>
  );
};

export default About;
