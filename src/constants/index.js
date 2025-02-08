import {
  mobile,
  fincore,
  easyconnect,
  print,
  Multiserver,
  skillcanvas,
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
  Spring,
  java,
  meta,
  Paypal,
  Timechain,
  shopify,
  Gitfund,
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
    title: "Backend Development",
    icon: mobile,
  },
  {
    title: "DevOps Enthusiast",
    icon: backend,
  },
  {
    title: "Full Stack Development",
    icon: creator,
  },
];

const technologies = [

  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: Spring,
  },
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
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
      "Your dedication, hard work, and eagerness to learn have been truly inspiring Sahil . Proud of your accomplishments and contributions to our Paypal SRE team, excited to see what you will achieve in the future.All the very best!",
    name: "Deepa Elumalai",
    designation: "Engineering Manager",
    company: "Paypal",
    image: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg",
  },
  {
    testimonial:
      "Sahil’s journey is a testament to the power of skill-building and perseverance. Securing an off-campus internship at PayPal in his 2nd year is no small feat—his dedication and hard work set an example for aspiring engineers. No matter where you come from, if you focus on learning and growth, wonders happen!",
    name: "Shradha Khapra",
    designation: "Co-Founder",
    company: "Apna College",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHGNAxeyJhZbQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1685972237021?e=1744243200&v=beta&t=dR2GYZKm6YvDkefNLFnRuYmIfkSlS3-PV0uK3HY9hhY",
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "GIT FUND",
    description:
      "This project is a voting-based decentralized crowdfunding platform designed to support social impact projects. Built using React for the frontend and Solidity for the backend, it leverages DAO mechanisms to ensure secure, tamper-proof, and democratic fund allocation.",
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
    image: Gitfund,
    source_code_link: "https://github.com/Sahil1694/GITFUND.git",
  },
  {
    name: "FinCore-Micoreservices",
    description:
      "This project is a comprehensive guide to building, deploying, and managing microservices using Spring Boot, Docker, Kubernetes, and cloud-native technologies. It covers key concepts such as service discovery, routing, resilience, observability, security, and event-driven architecture using RabbitMQ and Kafka. Additionally, it explores container orchestration with Kubernetes, Helm, and Istio, ensuring scalable and resilient microservices deployments.",
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
    image: fincore,
    source_code_link: "https://github.com/Sahil1694/FinCore-Microservices.git",
  },
  {
    name: "EasyConnect: Cloud-Based Contact Manager",
    description:
      "EasyConnect is a cloud-based contact management solution designed to help users efficiently manage their contacts with seamless integration of cloud storage, email services, and user authentication via social login. This platform is feature-rich, secure, and offers both dark and light themes for an enhanced user experience.",
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
    image: easyconnect,
    source_code_link: "https://github.com/Sahil1694/EasyConnect.git",
  },
  {
    name: "SkillCanvas",
    description:
      "SkillCanvas is an e-learning platform that allows users to purchase and manage online courses, featuring videos, lectures, and PDFs. Built using the MERN stack, it provides secure authentication, payment processing via Razorpay, and a dynamic admin dashboard for managing courses, users, and transactions. The backend ensures seamless functionality with Express.js, MongoDB, JWT authentication, and Cloudinary for media storage, creating a scalable and efficient learning experience.",
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
    image: skillcanvas,
    source_code_link: "https://github.com/Sahil1694/SkillCanvas-MERN-.git",
  },
  {
    name: "Multithreaded-WebServer",
    description:
      "This project is a multithreaded web server built using Java, designed to handle multiple client requests concurrently. It efficiently manages HTTP request processing, static file serving, and connection handling using multithreading, ensuring high performance and responsiveness. The server provides a lightweight yet scalable solution for web applications.",
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
    image: Multiserver,
    source_code_link: "https://github.com/Sahil1694/Multithreaded-WebServer.git",
  },

  {
    name: "Printing Automation System",
    description:
      "A fully automated campus printing service. Users can upload files via a web portal, make payments through PhonePe, and have documents printed automatically. Features include shop registration, print queue management, and auto file deletion post-printing.",
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
    image: print,
    source_code_link: "https://github.com/Sahil1694/Nirmman-Hackathon.git",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
