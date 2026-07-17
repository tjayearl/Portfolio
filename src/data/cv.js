// Edit this file whenever your CV changes — the CV section and the
// downloadable PDF (via the Print button) both pull from here.

export const cv = {
  name: 'Tjay Earl',
  title: 'Product Manager | Full Stack Engineer',
  location: 'Nairobi, Kenya',
  email: 'iamtjayearl@gmail.com',
  phone: '+254 (0) 115 633 640',
  github: 'github.com/tjayearl',
  linkedin: 'linkedin.com/in/tjay-earl',
  site: 'tjay-earl-portfolio.vercel.app',

  summary:
    'I build and ship digital products from concept to deployment, bridging technical execution with product strategy to create user-centric solutions and drive growth.',

  skills: [
    {
      group: 'Project Management',
      items: [
        'Project Planning & Scheduling',
        'Task Prioritization & Resource Coordination',
        'Scope Definition & Requirements Gathering',
        'Risk Identification & Mitigation',
        'Agile & Sprint-Based Delivery (Scrum Fundamentals)',
        'Stakeholder & Client Communication',
        'Documentation & Reporting',
        'UX/UI Collaboration & Wireframing',
        'Quality Assurance & User Acceptance Testing',
      ],
    },
    {
      group: 'Technical & Digital Expertise',
      items: [
        'Frameworks: React, Next.js, Ruby on Rails',
        'Styling: TailwindCSS, SASS',
        'Languages: HTML, CSS, JavaScript, Python, TypeScript, SQL',
      ],
    },
    {
      group: 'Tools & Technologies',
      items: ['Git, GitHub, VS Code, Vercel'],
    },
  ],

  experience: [
    {
      role: 'Software Developer Intern',
      org: 'Kenya Broadcasting Corporation (KBC)',
      dates: 'April 17, 2026 – April 16, 2027',
      bullets: [
        'Participating in a one-year intensive internship focused on developing and maintaining digital broadcasting platforms.',
        'Collaborating with the engineering team to modernize internal systems and improve the delivery of digital content.',
        'Assisting in the full-stack development of web-based tools to streamline broadcasting workflows.',
      ],
    },
    {
      role: 'Independent Product Builder & Engineer',
      org: 'Independent Practice',
      dates: '2025 – Present',
      bullets: [
        'Built and shipped 5 production web applications, managing full product lifecycle from user research through deployment.',
        'Jelani-Africa Insurance Agency (Client Project): Delivered production website. Managed stakeholder communication and project scope. Tech: React, Next.js, Vercel.',
      ],
    },
  ],

  projects: [
    {
      name: 'Educore — Hybrid Database LMS (KBC Technical Assessment)',
      role: 'Full Stack Engineer',
      bullets: [
        'Designed and built a full-stack Learning Management System utilizing a hybrid database architecture (PostgreSQL and MongoDB) to optimize for both data integrity and content flexibility.',
        'Architected the system using a microservices-ready strategy, separating Identity, Catalog, and Content services.',
        'Implemented distinct Learner and Admin portals with JWT-based stateless authentication and real-time progress tracking.',
      ],
      stack: 'React 18, Node.js, Express, PostgreSQL, MongoDB, Tailwind CSS',
    },
    {
      name: 'BalanceIQ — Personal Finance Platform (Active Product)',
      role: 'Full Stack Engineer',
      bullets: [
        'Architected a full-stack personal finance platform, managing the entire product lifecycle from database schema to UI deployment.',
        'Built a secure REST API using Python and FastAPI for core services, including JWT-based authentication, transaction/debt management (CRUD), and automated user notifications.',
        'Developed a responsive React frontend featuring an interactive dashboard for real-time expense tracking, debt monitoring, and financial reporting.',
      ],
      stack: 'React, Python, FastAPI, PostgreSQL',
    },
    {
      name: 'E.A.R.L AI — Personal Assistant Concept',
      role: 'AI Integrator',
      bullets: [
        'Integrated AI logic to simulate a self-learning assistant capable of managing tasks.',
        'Built web-based validation prototype to test interaction models before scaling infrastructure.',
      ],
      stack: null,
    },
    {
      name: 'One More Lock — Web-Based Puzzle Game',
      role: 'Game Logic & UX Design',
      bullets: [
        'Designed and implemented a repeatable game loop with progressively harder puzzles to drive player engagement.',
        "Focused on a minimalist UI to keep the user's attention on the core puzzle-solving mechanic.",
      ],
      stack: null,
    },
    {
      name: 'Machines — Vehicle Marketplace Architecture',
      role: 'Frontend Architect',
      bullets: [
        'Designed and built complex CRUD operations for vehicle inventory management.',
        'Engineered frontend state management to handle dynamic filtering of 50+ vehicle assets without latency.',
      ],
      stack: null,
    },
  ],

  education: [
    {
      title: 'Intensive Software Engineering Program (500+ hours)',
      org: 'Moringa School',
      location: 'Nairobi, Kenya',
      dates: 'Feb 2025 – Nov 2025',
      bullets: [
        'Full-stack development program covering: React, Rails, PostgreSQL, JavaScript, Python, Agile methodologies, and product delivery.',
        'Built multiple real-world projects demonstrating problem-solving and technical execution.',
      ],
    },
    {
      title: 'High School Diploma',
      org: 'Weithaga Boys High School',
      location: 'Kenya',
      dates: 'Jan 2021 – Nov 2024',
      bullets: [],
    },
  ],

  additional: [
    'Strong understanding of Kenyan startup and SME digital needs',
    'Comfortable working with remote and cross-functional teams',
    'Open to Project Manager, Junior Project Manager, Technical Project Coordinator, Digital Project Manager roles',
  ],
};