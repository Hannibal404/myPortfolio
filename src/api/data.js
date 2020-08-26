import one from "./../assets/images/me-1.svg";
import two from "./../assets/images/me-2.svg";
import three from "./../assets/images/me-3.svg";
import four from "./../assets/images/me-4.svg";
import five from "./../assets/images/me-5.svg";
import six from "./../assets/images/me-6.svg";
import seven from "./../assets/images/me-7.svg";
import eight from "./../assets/images/me-8.svg";
import nine from "./../assets/images/me-9.svg";
import ten from "./../assets/images/me-10.svg";

// Project Images
import sh from "./../assets/images/quote.svg";
import virus from "./../assets/images/virus.svg";



const aboutData = {
  title: "Hey, I'm ",
  myName: "Pradyumn!",
  description: [
    "I am an Electrical Engineering Student at Indian Institute of Technology, Delhi.",
    "I am passionate about Front-end, Back-end and Competitive programming. I participated in many programming competitions like Google KickStart, Google CodeJam, etc.",
  ]
};

const myImages = [one, two, three, four, five, six, seven, eight, nine, ten];

const mySkills = [
  {
    skillName: "HTML-5",
    class: "devicon-html5-plain"
  },
  {
    skillName: "CSS3",
    class: "devicon-css3-plain"
  },
  {
    skillName: "JS",
    class: "devicon-javascript-plain"
  },
  {
    skillName: "C++",
    class: "devicon-cplusplus-line"
  },
  {
    skillName: "PYTHON",
    class: "devicon-python-plain"
  },
  {
    skillName: "BOOTSTRAP",
    class: "devicon-bootstrap-plain"
  },
  {
    skillName: "GITHUB",
    class: "devicon-github-plain"
  }
];

const projectsCards = [
  {
    title: "Corona Virus Tracker",
    subtitle: "A beautiful flutter app to track the number of Corona Virus cases across the world.",
    image: virus,
    footerLink: [
      { name: "Github", url: "https://github.com/inductor69/Corona-Tracker" },
    ],
    language: "Flutter",
    langColor: "blue",
    stars: 1,
    forks: 0
  },
  {
    title: "Quotes App",
    subtitle: "An interesting app to motivate you by the collection of inspiring thoughts!",
    image: sh,
    footerLink: [
      { name: "Github", url: "https://github.com/inductor69/Quotes_App" },
    ],
    language: "Flutter",
    langColor: "blue",
    stars: 1,
    forks: 0
  },
  
];

const socialMedia = {
  github: "https://github.com/hannibal404",
  linkedin: "https://www.linkedin.com/in/pradyumn-singh-rahar-5767131a3/",
  gmail: "rvrahar@gmail.com",
  // codeforces: "https://codeforces.com/profile/hannibal404",
};

export { aboutData, myImages, mySkills, projectsCards, socialMedia };