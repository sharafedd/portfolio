// /data/content.ts

export interface PortfolioItem {
  slug: string;
  title: string;
  img: string;
  desc: string;
  date?: string;
}

export const education: PortfolioItem[] = [
  {
    slug: "uob",
    title: "University of Birmingham",
    img: "/uob.jpg",
    desc: "MSci Computer Science with a Year in Industry — First-class honours, AI & Security.",
    date: "2023 – 2027",
  },
  {
    slug: "hkust",
    title: "HKUST",
    img: "/hkust.jpg",
    desc: "Exchange Program (2024) — Studied DBMS & Innovation, led Lockheed Martin analysis.",
    date: "Spring 2024",
  },
  {
    slug: "ncuk",
    title: "NCUK Foundation Year",
    img: "/ncuk.jpg",
    desc: "Valedictorian (2022) — 81% average; A*s in Maths, Physics, Chemistry.",
    date: "2021 – 2022",
  },
];

export const experience: PortfolioItem[] = [
  {
    slug: "sjtu",
    title: "Research Placement – Shanghai Jiao Tong University",
    img: "/sjtu.jpg",
    desc: "Researched deep learning for liver fibrosis detection; developed whole-slide image segmentation pipelines for medical pathology. Collaborated with cross-disciplinary teams on AI model evaluation and performance analysis.",
    date: "Jun 2025 – Aug 2025",
  },
  {
    slug: "uob-ta",
    title: "Teaching Assistant – University of Birmingham",
    img: "/uob-ta.jpg",
    desc: "Guided over 80 students in Object-Oriented Programming and software design principles. Assisted with lab sessions, debugging exercises, and conceptual explanations to strengthen foundational coding skills.",
    date: "Sep 2024 – Dec 2024",
  },
  {
    slug: "integra",
    title: "Full Stack Developer – Integra & Co",
    img: "/integra.jpg",
    desc: "Built the company website and an internal admin dashboard using React, Next.js, and Firebase. Designed responsive UI components and implemented authentication and analytics integration for client management.",
    date: "Dec 2024 – Apr 2025",
  },
  {
    slug: "jpm",
    title: "Software Engineering Intern – JPMorgan Chase",
    img: "/jpm.jpg",
    desc: "Developed interactive trading and data-visualization dashboards using Python and Plotly. Contributed to GitHub Perspective automation and explored optimization of algorithmic trading insights.",
    date: "Aug 2023",
  },
  {
    slug: "clic",
    title: "Web Developer Intern – Clic Editions",
    img: "/clic.jpg",
    desc: "Created a jurisprudence search platform for law professionals. Improved search logic, front-end accessibility, and overall user experience through iterative UI testing and performance tuning.",
    date: "Jul 2023 – Aug 2023",
  },
  {
    slug: "ncuk-ambassador",
    title: "Student Ambassador – NCUK",
    img: "/ncuk.jpg",
    desc: "Represented NCUK during events and outreach programs. Produced creative media content, supported incoming students, and contributed to promotional initiatives across international education fairs.",
    date: "Jul 2023 – Sep 2024",
  },
];

export const projects: PortfolioItem[] = [
  {
    slug: "maxsat",
    title: "MaxSAT Problem Solver",
    img: "/maxsat.jpg",
    desc: "Developed a scalable MaxSAT solver integrating heuristic and stochastic optimization techniques for constraint satisfaction problems. Focused on improving computational efficiency and solution accuracy.",
  },
  {
    slug: "crew",
    title: "AI Crew Scheduling Optimiser",
    img: "/crew.jpg",
    desc: "Built an AI-driven crew scheduling system optimizing fairness, compliance, and efficiency using heuristic search and reinforcement learning principles.",
  },
  {
    slug: "drawly",
    title: "Drawly – AI Full Stack App",
    img: "/drawly.jpg",
    desc: "Created a full-stack social drawing platform using JHipster and Angular, integrating generative AI models and automated CI/CD pipelines for scalable deployment.",
  },
  {
    slug: "emg",
    title: "Human Activity Recognition",
    img: "/emg.jpg",
    desc: "Trained neural networks on sEMG signals to classify human activities and detect muscular fatigue using TensorFlow and signal preprocessing pipelines.",
  },
  {
    slug: "timeseries",
    title: "Neural Networks in Time Series",
    img: "/timeseries.jpg",
    desc: "Compared CNN, RNN, and LSTM architectures for financial time-series forecasting, evaluating temporal dependencies and prediction stability across datasets.",
  },
  {
    slug: "greenlife",
    title: "Green Life",
    img: "/greenlife.jpg",
    desc: "Led an agile team to design and prototype an eco-friendly mobile app for sustainable lifestyle tracking and community engagement.",
  },
];


export const certifications = [
  { title: "Deep Learning and Reinforcement Learning – IBM", date: "Oct 2024 – Present" },
  { title: "German Language Course – University of Birmingham", date: "Sep 2024 – Present" },
  { title: "Creating a Business Plan – LinkedIn Learning", date: "Aug 2023" },
  { title: "Kubernetes University Student Bootcamp – Red Hat", date: "Jul 2023" },
];

export const awards = [
  {
    title: "Computer Science International Excellence Scholarship",
    date: "Sep 2023",
    desc: "Awarded for outstanding academic achievement in undergraduate Computer Science.",
  },
  {
    title: "NCUK Prize Award",
    date: "May 2023",
    desc: "Recognized for academic excellence during 2021/22 NCUK qualification.",
  },
];

export const allItems = {
  education,
  experience,
  projects,
};
