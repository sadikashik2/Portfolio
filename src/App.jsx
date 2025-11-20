import "./App.css";
import About from "./components/About/About";
import BlurBlob from "./components/BlurBlob";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="bg-stone-950">
      <BlurBlob className="top-[35%] left-[20%] w-[30%] h-[40%]" />

      <div
        className="
    absolute inset-0
    bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),
       linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
    bg-size-[24px_24px]
    backdrop-blur-[2px]
    opacity-[0.35]
    mask-[radial-gradient(ellipse_70%_60%_at_50%_0%,black_80%,transparent_100%)]
  "
      ></div>

      <div className="relative pt-20">
        <Navbar></Navbar>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Education></Education>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
