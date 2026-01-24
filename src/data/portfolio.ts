// Portfolio Data - Easy to update content

export const personalInfo = {
  name: "Sanskruti S.",
  tagline: "Final Year ENTC Student | Aspiring Software Engineer",
  bio: "Polymath by day, Coder by night.",
  email: "sanskruti645@gmail.com",
  linkedin: "https://www.linkedin.com/in/sanskruti-shinde-9044a9253/",
  github: "https://github.com/sanskruti645",
  //resumeUrl: "#", // Add resume PDF link
  //photoUrl: "", // Optional: Add photo URL
};

export const projects = [
  {
    id: 1,
    title: "JobSearch AI",
    description: "An end to end AI tool that automatically finds relevant job openings, analyzes your resume, shows useful company insights and even sends you job alerts to make job searching faster and smarter. ",
    techStack: ["React", "Flask", "Python", "AWS", "NLP", "Groq AI", "Gemini AI", "PostgreSQL", "DynamoDB", "Selenium", "BeautifulSoup"],
    githubUrl: "https://github.com/sanskruti645/jobserach_ai",
    //demoUrl: "https://demo.example.com",
    featured: true,
  },
  {
    id: 2,
    title: "AI Document Analysis & Risk Assessment System ",
    description: "A tool that automatically summarizes legal documents, extracts key information, and highlights potential risks to save time and improve decision-making..",
    techStack: ["Python", "Flask", "React", "LangChain", "LangGraph", "Google Gemini AI", "Multi-Agent System", "TailwindCSS", "Vite", "REST API"],
    githubUrl: "https://github.com/sanskruti645/Doc-analyzer",
    //demoUrl: "",
    featured: true,
  },
  {
    id: 3,
    title: "Peer-to-Peer File Sharing System",
    description: "A peer-to-peer file sharing system that lets users directly send files to each other securely and efficiently, without using a central server.",
    techStack: ["Java", "Socket Programming", "Multithreading", "Docker", "AWS"],
    //githubUrl: "https://github.com/sanskruti/iot-dashboard",
    //demoUrl: "https://iot-demo.example.com",
    featured: false,
  },
  {
    id: 4,
    title: "Lit-compete",
    description: " An extension to keep an eye onfriends’ LeetCode stats and fuel some healthy coding rivalry",
    techStack: ["Chrome Storage API", "LeetCode GraphQL API", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/sanskruti645/LEET-COMPETE",
    //demoUrl: "",
    featured: false,
  },
];

export const experiences = [
  {
    id: 1,
    company: "Faclon Labs",
    role: "IoT Developer Intern",
    duration: "06/2025 – 08/2025",
    location: "Mumbai, India",
    highlights: [
      "Joined as an IoT intern and simultaneously worked across two domains, IoT and R&D contributing to backend development, data pipelines, automation workflows, device configuration, and troubleshooting, in a high paced startup environment.",

"Developed an Industrial IoT gateway that interfaces with Modbus RTU devices over RS485 and publishes structured sensor data to cloud platforms via MQTT, supporting 50+ device models, using Python.",

"Engineered a robust IoT data system, designing a thread-safe Modbus polling mechanism with locking and register batching (70–80% efficiency gain) and an offline-first SQLite + MQTT pipeline ensuring 100% data retention and seamless reconnection.",

"Provided cross-product technical support for 10+ enterprise clients, diagnosing issues in real-world deployments."

    ],
  }

  
];

export const publications = [
  {
    id: 1,
    title: "Advanced computer vision and deep learning for accurate fruit ripeness sorting: A multi-fruit approach",
    conference: "3rd International Conference for Advancement in Technology (ICONAT)",
    year: "2024",
    //abstract: "A comprehensive study on optimizing CNN architectures for edge device deployment with minimal accuracy loss.",
    link: "https://ieeexplore.ieee.org/abstract/document/10775178",
  },
  {
    id: 2,
    title: "Optimized Multithreaded Encryption for Enhanced Performance and Efficiency",
    conference: "3rd International Conference on Self Sustainable Artificial Intelligence Systems (ICSSAS)",
    year: "2025",
    //abstract: "Novel approach to decentralized identity management using zero-knowledge proofs.",
    link: "https://ieeexplore.ieee.org/abstract/document/11080805",
  },
];

export const extracurriculars = [
  {
    id: 1,
    title: "Technical Head",
    organization: "E-Cell, College Chapter",
    duration: "2023 – 2024",
    description: "Led a team of 15+ members organizing hackathons and technical workshops with 500+ participants.",
    icon: "rocket",
  },
  {
    id: 2,
    title: "Core Committee Member",
    organization: "Coding Club",
    duration: "2022 – Present",
    description: "Organized weekly coding sessions and competitive programming contests for 200+ students.",
    icon: "code",
  },
  {
    id: 3,
    title: "Event Coordinator",
    organization: "Technical Festival",
    duration: "2023",
    description: "Managed logistics and coordination for college's annual tech fest with 2000+ attendees.",
    icon: "calendar",
  },
  {
    id: 4,
    title: "Open Source Contributor",
    organization: "Various Projects",
    duration: "2022 – Present",
    description: "Active contributor to open source projects with 50+ merged pull requests.",
    icon: "git-branch",
  },
];

export const achievements = [
  {
    id: 1,
    title: "1st Place, National Hackathon",
    organization: "TechCrunch Disrupt India",
    year: "2024",
    description: "Built an AI-powered accessibility tool in 24 hours",
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    year: "2024",
    description: "Professional level certification",
  },
  {
    id: 3,
    title: "Top 1% on LeetCode",
    organization: "LeetCode Global",
    year: "2023",
    description: "Solved 500+ problems with contest rating 2100+",
  },
  {
    id: 4,
    title: "Google Summer of Code",
    organization: "Google Open Source",
    year: "2023",
    description: "Selected contributor for Mozilla Foundation",
  },
  {
    id: 5,
    title: "Dean's List",
    organization: "College of Engineering",
    year: "2022, 2023, 2024",
    description: "Consistent academic excellence",
  },
];

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Publications", href: "#publications" },
  { label: "Activities", href: "#extracurriculars" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
