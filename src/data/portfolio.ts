// Portfolio Data - Easy to update content

export const personalInfo = {
  name: "Sanskruti S.",
  tagline: "Final Year ENTC Student | Aspiring Software Engineer",
  bio: "Passionate about building elegant solutions to complex problems. I specialize in full-stack development with a focus on clean architecture and user-centric design.",
  email: "sanskruti@example.com",
  linkedin: "https://linkedin.com/in/sanskruti",
  github: "https://github.com/sanskruti",
  resumeUrl: "#", // Add resume PDF link
  photoUrl: "", // Optional: Add photo URL
};

export const projects = [
  {
    id: 1,
    title: "AI-Powered Code Analyzer",
    description: "A machine learning tool that analyzes code quality and suggests optimizations using natural language processing.",
    techStack: ["Python", "TensorFlow", "React", "FastAPI"],
    githubUrl: "https://github.com/sanskruti/code-analyzer",
    demoUrl: "https://demo.example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Distributed Task Scheduler",
    description: "Scalable microservices architecture for distributed task scheduling with real-time monitoring dashboard.",
    techStack: ["Go", "Redis", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/sanskruti/task-scheduler",
    demoUrl: "",
    featured: true,
  },
  {
    id: 3,
    title: "Smart IoT Dashboard",
    description: "Real-time IoT device management platform with data visualization and automated alerts.",
    techStack: ["TypeScript", "Node.js", "MQTT", "PostgreSQL"],
    githubUrl: "https://github.com/sanskruti/iot-dashboard",
    demoUrl: "https://iot-demo.example.com",
    featured: false,
  },
  {
    id: 4,
    title: "Blockchain Voting System",
    description: "Secure and transparent voting platform using blockchain technology for tamper-proof elections.",
    techStack: ["Solidity", "React", "Web3.js", "IPFS"],
    githubUrl: "https://github.com/sanskruti/blockchain-voting",
    demoUrl: "",
    featured: false,
  },
];

export const experiences = [
  {
    id: 1,
    company: "Tech Innovators Inc.",
    role: "Software Engineering Intern",
    duration: "May 2024 – Present",
    location: "Remote",
    highlights: [
      "Developed RESTful APIs serving 10,000+ daily requests",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Collaborated with cross-functional teams on agile sprints",
    ],
  },
  {
    id: 2,
    company: "StartupXYZ",
    role: "Full Stack Developer Intern",
    duration: "Jan 2024 – Apr 2024",
    location: "Pune, India",
    highlights: [
      "Built responsive web applications using React and Node.js",
      "Optimized database queries improving performance by 60%",
      "Mentored junior interns on best coding practices",
    ],
  },
  {
    id: 3,
    company: "University Research Lab",
    role: "Research Assistant",
    duration: "Aug 2023 – Dec 2023",
    location: "College Campus",
    highlights: [
      "Contributed to machine learning research on image recognition",
      "Published findings in international conference proceedings",
      "Developed data processing pipelines for large datasets",
    ],
  },
];

export const publications = [
  {
    id: 1,
    title: "Deep Learning Approaches for Real-Time Image Classification",
    venue: "International Conference on Machine Learning Applications",
    year: "2024",
    abstract: "A comprehensive study on optimizing CNN architectures for edge device deployment with minimal accuracy loss.",
    link: "https://doi.org/example",
  },
  {
    id: 2,
    title: "Blockchain-Based Identity Verification Systems",
    venue: "IEEE International Symposium on Security",
    year: "2023",
    abstract: "Novel approach to decentralized identity management using zero-knowledge proofs.",
    link: "https://doi.org/example2",
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
