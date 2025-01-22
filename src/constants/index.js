import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  tailwind,
  mongodb,
  git,
  docker,
  carrent,
  jobit,
  tripguide,
  } from "../assets";

  // importing UBC, BCIT and BCITSA images
  import ubc from "../assets/company/ubc.png"; 
  import bcit from "../assets/company/bcit.png"; 
  import bcitsa from "../assets/company/bcitsa.png"; 

  // importing R, Python, SQL images
  import r from "../assets/tech/r.png";
  import python from "../assets/tech/python.png"
  import sql from "../assets/tech/sql.png"

  
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "R",
      icon: r,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "docker",
      icon: docker,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
  ];
  
  const experiences = [
    {
      title: "Data Scientist in the making",
      company_name: "UBC Master of Data Science",
      icon: ubc, 
      iconBg: "#e7dcf5",
      date: "September 2024 - June 2025",
      points: [
        "Mastered tools and techniques for cleaning, analyzing, and visualizing data using Python and R, ensuring actionable insights and effective communication.",
        "Developed, evaluated, and optimized predictive models and algorithms for classification, regression, and clustering tasks.",
        "Skilled in handling large datasets, performing SQL queries, and utilizing cloud-based and distributed computing systems for scalable data processing.",
        "Applied statistical methods and computational techniques to solve complex, real-world problems across various domains.",
      ],
    },
    {
      title: "Business Systems Specialist",
      company_name: "BCIT Student Association",
      icon: bcitsa,
      iconBg: "#e7dcf5",
      date: "August 2023 - August 2024",
      points: [
        "Conducted comprehensive process analysis, achieving significant improvements in efficiency through data-driven technology solutions.",
        "Designed and validated automated testing scripts using Python, ensuring reliable system deployment and functionality.",
        "Led training programs for enterprise-level software tools, enhancing adoption and user engagement across diverse teams.",
        "Provided project management support for cross-functional teams while optimizing resource tracking and management systems.",
        "Delivered technical support and troubleshooting, ensuring uninterrupted system performance and operational stability.",
      ],
    },
    {
      title: "Business Systems Analyst",
      company_name: "BCIT Student Association",
      icon: bcit,
      iconBg: "#e7dcf5",
      date: "June 2022 - July 2023",
      points: [
        "Automated operational workflows, increasing efficiency by 50% through process optimization and data-driven solutions.",
        "Consolidated data from multiple sources, delivering actionable insights through advanced visualizations and analytics tools.",
        "Improved resource allocation by implementing scheduling automation for streamlined team operations.",
        "Delivered technical support to ensure accuracy and efficiency in inventory and resource management systems.",
        "Enhanced data-driven decision-making by integrating automation and reporting tools for seamless analysis and reporting.",
      ],
    },
    {
      title: "Bachelors in Business Administration (Business Intelligence)",
      company_name: "British Columbia Institute of Technology",
      icon: bcit,
      iconBg: "#e7dcf5",
      date: "July 2022 - August 2023",
      points: [],
    },
    {
      title: "Diploma in Business IT Management (Artificial Intelligence Management)",
      company_name: "British Columbia Institute of Technology",
      icon: bcit,
      iconBg: "#e7dcf5",
      date: "September 2020 - June 2022",
      points: [],
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
