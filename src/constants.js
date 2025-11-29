// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mssqlLogo from "./assets/tech_logo/mssql.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import visualStudio from "./assets/tech_logo/vs.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Education Section Logo's
import MBSTU_Logo from "./assets/education_logo/MBSTU_Logo.png";
import tgc_logo from "./assets/education_logo/tgc_logo.png";
import tgbhs_logo from "./assets/education_logo/tgbhs_logo.png";

// Project Section Logo's
import aiCodeReview from "./assets/work_logo/aiCodeReview.png";
import furniture from "./assets/work_logo/furniture.png";
import todo from "./assets/work_logo/todoapp.png";
import currency from "./assets/work_logo/currency.png";


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Visual Studio", logo: visualStudio },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },

  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", logo: mysqlLogo },
      { name: "MSSQL", logo: mssqlLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: MBSTU_Logo,
    school: "Mawlana Bhashani Science and Technology University, Tangail",
    date: "2020 - 2025",
    grade: "CGPA - 3.40",
    degree: "Bachelor of Science in Computer Science and Engineering",
  },
  {
    id: 1,
    img: tgc_logo,
    school: "Thakurgaon Government College, Thakurgaon",
    date: "2016 - 2018",
    grade: "GPA - 4.92",
    degree: "HSC in Science",
  },
  {
    id: 2,
    img: tgbhs_logo,
    school: "Thakurgaon Government Boys High School, Thakurgaon",
    date: "2011 - 2016",
    grade: "GPA - 5.00",
    degree: "SSC in Science",
  },
];

export const projects = [
  {
  id: 0,
  title: "AI Code Review Tool",
  description:
    "A web-based AI-powered code review and fixing tool built with React, Monaco Editor, and Tailwind CSS. It supports multiple programming languages (C, C++, JavaScript, Python, etc.) and provides AI-generated code review feedback. Users can automatically fix issues, highlight corrected lines, undo/reapply fixes, and work seamlessly on mobile with a responsive interface. The app uses Google Gemini 2.5 Flash API for smart code suggestions and corrections.",
  image: aiCodeReview,
  tags: ["React JS", "Tailwind CSS", "Monaco Editor", "Google Gemini API"],
  github: "https://github.com/sadikashik2/AI-powered-code-reviewer",
  webapp: "https://ai-powered-code-reviewer-alpha.vercel.app/",
},

  {
    id: 1,
    title: "Furniture Landing Page",
    description:
      "This is a modern and responsive furniture landing page designed with a clean UI and smooth user experience. The page includes a fully functional shopping cart with add/remove items, quantity controls, and local storage to save the user’s selections. It also supports both dark and light themes for better usability. A testimonial slider built with Swiper.js adds interactivity and enhances the overall presentation of the site.",
    image: furniture,
    tags: ["HTML", "Tailwind Css", "JavaScript", "React JS"],
    github: "https://github.com/sadikashik2/Furniture-Landing-Page",
    webapp: "https://furniture-landing-page-zeta.vercel.app/",
  },
  {
    id: 2,
    title: "To-Do App",
    description:
      "This is a responsive and user-friendly To-Do App that helps users manage their daily tasks easily. It allows adding, editing, and deleting tasks, as well as marking them as complete or incomplete. All tasks are saved using browser local storage, ensuring the list stays intact even after refreshing or reopening the app.",
    image: todo,
    tags: ["React JS", "HTML", "Tailwind Css", "JavaScript"],
    github: "https://github.com/sadikashik2/ToDo-app",
    webapp: "https://sadikashik2.github.io/ToDo-app/",
  },
  {
    id: 3,
    title: "Currency Converter",
    description:
      "A dynamic and responsive currency converter built with HTML, CSS, and JavaScript. This project allows users to convert amounts between currencies in real-time using a free API and displays the corresponding country flags. Features include responsive design, currency swap, input validation, and a live calculation of exchange rates.",
    image: currency,
    tags: ["API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/sadikashik2/Currency-Converter",
    webapp: "https://sadikashik2.github.io/Currency-Converter/",
  },
];
