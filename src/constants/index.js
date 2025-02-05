import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  Paypal,
  Timechain,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Java Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "DevOps",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Paypal",
    icon: Paypal,
    iconBg: "#383E56",
    date: "May 2024 - August 2024",
    points: [
      "Developed and implemented JUnit test cases, involved in functional testing and bug fixes, achieving 90% code coverage and ensuring robustness and reliability of software releases, impacting millions of users.",
      "Resolved high-priority critical bugs/Live issues in multiple applications, reducing downtime by 20%, ensuring uninterrupted operation, and successfully deployed them to production.",
      "Led the implementation of SNOW Polling integration for fetching and analyzing SNOW tickets, streamlining issue tracking andenabling proactive incident management.",
      "Collaborated with cross-functional teams during Agile practices, including daily standups, sprint planning, and sprint demos,contributing to 30% faster product delivery.",
    ],
  },
  {
    title: "Open Source Contributor",
    company_name: "Timechain Labs (TSOC)",
    icon: Timechain,
    iconBg: "#E6DEDD",
    date: "May 2023 - August 2023",
    points: [
      "Led the development of the Timechain Academy website, overseeing the process from system architecture design to final implementation",
      "Created robust backend APIs, including authentication and sign-up functionalities, to deliver seamless user experiences",
      "Implemented scalable and efficient backend solutions using Node.js, Express.js, and MongoDB",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "GIT FUND",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Web3",
        color: "blue-text-gradient",
      },
      {
        name: "BlockChain",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "FinCore-Micoreservices",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "RabbitMQ",
        color: "green-text-gradient",
      },
      // {
      //   name: "Configurations Management",
      //   color: "pink-text-gradient",
      // },
      {
        name: "Kubernetes",
        color: "pink-text-gradient",
      },
      {
        name: "Observability ",
        color: "blue-text-gradient",
      },
      {
        name: "Service Discovery & Service Registration",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "EasyConnect: Cloud-Based Contact Manager",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "OAuth,",
        color: "pink-text-gradient",
      },
      {
        name: "Spring Security",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript,",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "SkillCanvas",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "vercel",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Multithreaded-WebServer",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Core Java",
        color: "blue-text-gradient",
      },
      {
        name: "MultiThreading",
        color: "green-text-gradient",
      },
      {
        name: "Operating System",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },

  {
    name: "Printing Automation System",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Payment Gateway(PhonePe)",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
