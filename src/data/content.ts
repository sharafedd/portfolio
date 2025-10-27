// /data/content.ts

export interface PortfolioItem {
  slug: string;
  title: string;
  img: string;
  desc: string;
  date?: string;
}

//
// Education
//
export const education: PortfolioItem[] = [
  {
    slug: "uob",
    title: "University of Birmingham",
    img: "/uob.jpg",
    date: "Sep 2022 – Jun 2026",
    desc: `
**Degree:** MSci Computer Science with a Year in Industry  
**Expected Classification:** First-Class Honours  
**Focus Areas:** Artificial Intelligence and Security  
**Notable Achievements:** Teaching Assistant for OOP, recipient of the International Excellence Scholarship. <br />
The University of Birmingham has provided me with an academically rigorous yet highly practical foundation in Computer Science. Across four years, I have developed expertise spanning software architecture, artificial intelligence, data systems, and dependable software engineering. The program’s structure encourages both research depth and interdisciplinary integration, combining algorithmic precision with large-scale system design. <br />
**Year 1**  
    - Object-Oriented Programming  
    - Mathematical and Logical Foundations of Computer Science  
    - Theories of Computation  
    - Data Structures and Algorithms  
    - Artificial Intelligence 1  
    - Full Stack Application Development  <br />
**Year 2**  
    - Functional Programming
    - Artificial Intelligence 2  
    - AI Team Project
    - Security and Networks  
    - Operating Systems in C
    - Software Engineering and Professional Practice  <br />
**Year 3**  
    - Machine Learning  
    - Neural Computation  
    - Natural Language Processing  
    - Evolutionary Computation
    - Security of Real World Systems  
    - Dependable and Distributed Systems  <br />
**Year 4**  
    - Computer Vision  
    - Secure Software and Hardware Systems  
    - Advanced Networking  <br />`,
  },
  {
    slug: "hkust",
    title: "Hong Kong University of Science and Technology (HKUST)",
    img: "/hkust.jpg",
    date: "Jun 2024 – Aug 2024",
    desc: `
**Program:** Global Exchange Program  
**Academic Standing:** Distinction  
**Focus Areas:** Database Systems, Innovation, and Entrepreneurship  <br />
My exchange at HKUST was a globally enriching experience that expanded my understanding of how technical innovation drives organizational growth. Immersed in one of Asia’s leading technological ecosystems, I explored how computing infrastructure, business models, and cross-cultural collaboration intersect in modern tech environments. <br />
**Modules Studied**  
    - Database Management Systems  
    - Business and Innovation in Technology <br />
These courses offered a comprehensive look into how data systems and business innovation co-evolve. The Database module strengthened my skills in query optimization, relational schema design, and concurrency control, while the Innovation module challenged me to evaluate how emerging technologies shape competitive advantage. <br />
**Projects and Research Highlights**  
    - Conducted a research-based analysis on Lockheed Martin’s technological diversification and R&D investment strategy.  
    - Developed a case study on data-driven entrepreneurship for Southeast Asian markets. <br />
Working within a diverse, international cohort helped refine my communication and collaboration skills while reinforcing my adaptability in multidisciplinary settings. <br />`
  },
  {
    slug: "ncuk",
    title: "NCUK Engineering International Foundation Year",
    img: "/ncuk.jpg",
    date: "Sep 2021 – Jun 2022",
    desc: `
**Award:** Valedictorian  
**Final Grade:** 81% average (A* in Mathematics, Physics, and Chemistry)  
**Distinction:** NCUK Prize for Academic Excellence  <br />
The NCUK Engineering International Foundation Year marked the beginning of my academic journey in computing. It introduced me to the discipline, precision, and analytical mindset essential for success in higher education. The program emphasized STEM integration, merging mathematical rigor, experimental reasoning, and problem-solving frameworks aligned with UK academic standards. <br />
**Modules Studied**  
    - Mathematics  
    - Physics 
    - Chemistry  
    - English for Academic Purposes  <br />
**Academic Achievements and Activities**  
    - Graduated as Valedictorian, maintaining top results across all subjects.  
    - Delivered the closing address at the Academic Excellence Ceremony.  
    - Represented NCUK at student outreach programs.  <br />
This foundation year established the intellectual discipline and curiosity that define my approach to computer science today. It built the bridge between raw problem-solving ability and structured innovation, preparing me for the challenges of advanced AI and systems engineering.`,
  },
];


//
// Experience
//
export const experience: PortfolioItem[] = [
  {
    slug: "sjtu",
    title: "Research Placement, Shanghai Jiao Tong University",
    img: "/sjtu.jpg",
    desc: `
Worked on deep learning methods for liver fibrosis detection using Whole Slide Images (WSIs), focusing on building segmentation and preprocessing pipelines for histopathological data. Integrated the StreamingCNN framework with multiresolution image access to handle large WSIs efficiently, and developed automated workflows for mask generation, color normalization, and artifact removal. Contributed to evaluating model performance across different architectures and magnifications, optimizing data throughput for gigapixel-scale slides. Collaborated with researchers to test and benchmark segmentation pipelines, ensuring reproducibility and dependable inference across datasets.  <br />
**Date:** Jun 2025 – Aug 2025  
**Link:** [Shanghai Jiao Tong University](https://www.sjtu.edu.cn)
`,
  },

  {
    slug: "ta",
    title: "Teaching Assistant, University of Birmingham",
    img: "/ta.jpg",
    desc: `
Supported over 80 Computer Science students in Object-Oriented Programming by assisting in lab sessions, debugging exercises, and explaining software design concepts. Helped improve student understanding of Java fundamentals through practical problem-solving.  <br />
**Date:** Sep 2024 – Dec 2024  
**Link:** [University of Birmingham](https://www.birmingham.ac.uk)
`,
  },

  {
    slug: "integra",
    title: "Full Stack Developer, Integra & Co",
    img: "/integra.jpg",
    desc: `
Developed the organisation's website and internal admin dashboard using React, Next.js, and Firebase. Implemented analytics, authentication, and responsive design components while ensuring clean UI performance.  <br />
**Date:** Dec 2024 – Feb 2025  
**Link:** [Integra & Co](https://integra-qis3j43cx-miaws-projects.vercel.app/)
`,
  },

  {
    slug: "research-assistant",
    title: "Research Assistant, University of Birmingham",
    img: "/neural.jpg",
    desc: `
Worked on surface EMG signal analysis for human activity recognition. Focused on collecting and preprocessing EMG data, preparing datasets for neural network training, and running experiments to observe signal variations during different movements. <br />
**Date:** Jan 2024 – May 2024  
**Link:** [University of Birmingham Research](https://www.birmingham.ac.uk)
`,
  },

  {
    slug: "clic",
    title: "Web Developer Intern, Clic Editions",
    img: "/clic.jpg",
    desc: `
Contributed to developing a legal document search platform by improving search logic, front-end accessibility, and overall performance. Focused on optimizing user experience and interface design through iterative updates.  <br />
**Date:** Jul 2023 – Aug 2023  
**Link:** [Clic Editions](https://www.cliceditions.com)
`,
  },

  {
    slug: "ncuk-ambassador",
    title: "Student Ambassador, NCUK – The University Consortium",
    img: "/ncuk.jpg",
    desc: `
Represented NCUK in international outreach programs and academic fairs, supporting incoming students and producing creative promotional materials for global engagement initiatives.  <br />
**Date:** Jul 2023 – Sep 2024  
**Link:** [NCUK](https://www.ncuk.ac.uk)
`,
  },
];


//
// Projects
//
export const projects: PortfolioItem[] = [
  {
    slug: "portfolio",
    title: "Digital Profile",
    img: "/portfolio.jpg",
    desc: `
Built a modular personal portfolio using Next.js 15 and Tailwind CSS v4. It dynamically loads content for education, experience, and projects from JSON data, ensuring easy scalability and consistent design. Includes Framer Motion for transitions and fully responsive layouts.  <br />
[****View Project****](https://github.com/sharafedd/portfolio)
`,
  },
  {
    slug: "mea-gpt",
    title: "MEA-GPT: AI Assistant for Research and Analytical Writing",
    img: "/mea-gpt.jpg",
    desc: `
Built an AI assistant that helps users summarize, structure, and analyze research writing. Integrated multiple Hugging Face models for text generation and summarization. Implemented a user-friendly interface with Next.js and Tailwind CSS, allowing users to input text and receive AI-generated insights.  
`,
  },
  {
    slug: "skilink",
    title: "Skilink: Service Marketplace Platform",
    img: "/skilink.jpg",
    desc: `
Created a Supabase-backed web app that connects clients with service providers. Implemented authentication, database storage, and real-time service listings with analytics dashboards, built using Next.js and TypeScript.  <br />
[**View Project**](https://github.com/sharafedd/skilink)
`,
  },
  {
    slug: "lela",
    title: "LELA: Story Sharing Platform",
    img: "/lela.jpg",
    desc: `
Built a story-sharing platform using Next.js and Supabase where users can write, publish, and interact with stories. Integrated story analytics, reactions, and responsive layouts for both readers and authors.  <br />
[**View Project**](https://github.com/sharafedd/lela)
`,
  },
  {
    slug: "karta",
    title: "The Karta Project: Closed-Loop Digital Payment System",
    img: "/karta.jpg",
    desc: `
Designed a secure closed-loop payment ecosystem for Algerian businesses using Kotlin and custom backend APIs. Supported NFC prepaid transactions with real-time balance synchronization and multi-role access. <br />    
`,
  },
  {
    slug: "maxsat",
    title: "MaxSAT Problem Solver",
    img: "/maxsat.jpg",
    desc: `
Implemented a Python-based solver for the Maximum Satisfiability problem combining stochastic optimization and local search strategies. Focused on efficiency and modular testing for constraint satisfaction instances.  <br />
[**View Project**](https://github.com/sharafedd/Solving_MAXSAT_Problems)
`,
  },
  {
    slug: "aircrew",
    title: "AI Crew Scheduling Optimiser",
    img: "/aircrew.jpg",
    desc: `
Developed an AI-based scheduling system using heuristic search to optimize crew assignments. Focused on fairness, workload distribution, and computational efficiency in scheduling tasks.  <br />
[**View Project**](https://github.com/sharafedd/Solving_Air_Crew_Scheduling_Problem)
`,
  },
  {
    slug: "drawly",
    title: "Drawly: AI Full Stack App",
    img: "/drawly.jpg",
    desc: `
Built a social drawing application using Angular and Spring Boot, integrating generative AI for art assistance. Included authentication, real-time collaboration, and CI/CD deployment pipelines.  <br />  
[**View Project**](https://github.com/sharafedd/Drawly)
`,
  },
  {
    slug: "timeseries",
    title: "Neural Networks in Time Series Analysis",
    img: "/fintech.jpg",
    desc: `
Compared CNN, RNN, and LSTM models for time-series forecasting and pattern recognition. Implemented evaluation pipelines to analyze model accuracy and temporal dependencies across financial datasets.  <br />
`,
  },
  {
    slug: "os",
    title: "Firewall Client–Server System",
    img: "/os.jpg",
    desc: `
Developed a C-based client-server firewall that filters packets, logs traffic, and enforces access rules. Focused on understanding low-level network communication and basic security architecture.  <br />
[**View Project**](https://github.com/sharafedd/OS-Firewall-Client-Server-System)
`,
  },
  {
    slug: "greenlife",
    title: "Green Life: Mobile App Proposal",
    img: "/greenlife.jpg",
    desc: `
Proposed a mobile app prototype that encourages sustainable living through gamified challenges, daily eco-friendly goals, and visual impact tracking. Designed using Figma with plans for Expo-based implementation. 
`,
  },
];




//
// Courses & Certifications
//
export const certifications = [
  { title: "Chinese Language Course – University of Birmingham", date: "Sep 2024 – Present" },
  { title: "Creating a Business Plan – LinkedIn Learning", date: "Aug 2023" },
  { title: "JPMorgan Chase Software Engineering Virtual Experience", date: "Aug 2023" },
  { title: "Kubernetes University Student Bootcamp – Red Hat", date: "Jul 2023" },
];

//
// Awards
//
export const awards = [
  {
    title: "Computer Science International Excellence Scholarship",
    date: "Sep 2023",
    desc: "Awarded for exceptional academic and research performance in Computer Science.",
  },
  {
    title: "NCUK Prize Award",
    date: "May 2023",
    desc: "Recognized as Valedictorian for academic excellence during the NCUK qualification year.",
  },
];

//
// Export all
//
export const allItems = {
  education,
  experience,
  projects,
  certifications,
  awards,
};
