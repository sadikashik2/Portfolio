import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f1anqwv", //EmailJS Service ID
        "template_tdv2gz4", //EmailJS Template ID
        form.current,
        "hEsXJRpWTpYoFI8EU" //EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 1000,
            theme: "dark",
          });
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 1000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center  px-[7vw] lg:px-[20vw] font-sans"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">CONTACT</h2>
        <div className="w-48 h-0.5 bg-red-800 mx-auto mt-3 rounded-full"></div>
        <p className="text-stone-400 mt-4 text-lg max-w-2xl mx-auto">
          I’d be happy to hear from you! Please feel free to reach out with any opportunities or questions.
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-4 w-full max-w-md bg-stone-800/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-[0_0_20px_1px_rgba(255,50,50,0.25)]
">
        <h3 className="text-xl font-semibold text-white text-center mb-4">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-xl bg-stone-900 text-white border border-gray-700 focus:outline-none focus:border-red-400 transition"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-xl bg-stone-900 text-white border border-gray-700 focus:outline-none focus:border-red-400 transition"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-xl bg-stone-900 text-white border border-gray-700 focus:outline-none focus:border-red-400 transition"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-xl bg-stone-900 text-white border border-gray-700 focus:outline-none focus:border-red-400 transition"
          />

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-red-900 to-red-800 py-3 text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-md shadow-red-500/20 cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
