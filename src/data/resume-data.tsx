// Project: resume-builder
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { Certificate } from "crypto";

export const RESUME_DATA = {
  name: "JAY SHIROYA",
  initials: "Jay",
  location: "Hamburg, Germany",
  locationLink: "https://maps.app.goo.gl/VrBN7SmhCeSvxjdR6",
  about:
    "Pursuing Master’s in Data Science while learning and understanding the world of Artificial Intelligence.",
  summary:
    "Passionate about transforming data into actionable insights using machine learning and AI techniques. Worked as a data science intern at Petpooja. Proficient in Python, SQL, and data visualization tools. Enthusiastic about mathematics, with a particular interest in probability and statistics, and their applications in solving real-world problems.",
  avatarUrl: "https://avatars.githubusercontent.com/u/121104652?s=400&u=6359b2cdaef46825bac0ae31f2edfa17601604f4&v=4",
  personalWebsiteUrl: "https://jayshiroya-portfolio.vercel.app/",
  contact: {
    email: "jayshiroya2813@gmail.com",
    tel: "+49 15565352040",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ShiroyaJay",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jay-shiroya-44015024a/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Technische Universität Hamburg, Germany",
     
      degree: "M.Sc. Data Science",
      start: "Oct 2025",
      end: "Present",
      certificate: "https://drive.google.com/file/d/1MActEI2KdMzOzSasa4D5OjNLTuQ4KSZY/view?usp=sharing"
    },
    {
      school: "Government Engineering College Gandhinagar, India",
      degree: "B.E. Computer Engineering",
      start: "2020",
      end: "  2024",
      certificate: undefined
    },
  ],
  work: [
    {
      company: "Impossible Founders",
      link: "https://sprint.impossible-founders.com/",
      badges: [],
      title: "Future Founder Programme",
      // logo: ParabolLogo,
      start: "Oct 2025",
      end: "Jan 2026",
      description: "Top 4 of the Cohort: Selected as one of the top teams out of 9 ventures during the intensive 3-month program for building a viable startup concept. Developed a startup concept with a cross-functional team, progressing from ideation and validation to business modeling, prototyping, and investor pitching. Applied business modeling, teamwork, and problem-solving to build early-stage ventures.",
      certificate: "https://www.hamburg-startups.net/exaere-gewinnt-beim-dritten-future-founder-demo-day/"
    },
    {
      company: "Petpooja",
      link: "https://www.petpooja.com/",
      badges: [],
      title: "Data Science Intern",
      // logo: ParabolLogo,
      start: "Oct 2024",
      end: "Sep 2025",
      description: "Worked on a RAG-based analytics chatbot that enables restaurant owners to query sales and menu data in natural language, contributing to data preparation, retrieval pipeline setup, and testing. Contributed on a GAN-based food image generation system for restaurant menus, contributing to dataset organization of lab-captured images, text-image pairing, and model output evaluation. Designed Power BI dashboards to track team productivity including task assignments, progress, and completion rates.",
      certificate: "https://drive.google.com/file/d/1Vaxoo3ck_qvrojZHouAIRgEN4QTx5QOo/view?usp=drive_link"
    },
    {
      company: "Chegg Ind",
      link: "https://www.cheggindia.com/",
      badges: ["Remote"],
      title: "Subject Matter Expert - CS",
      // logo: ClevertechLogo,
      start: "Mar 2024",
      end: "Jun 2024",
      description: "Answered 40+ technical questions weekly on algorithms, data science, and programming topics with 80%+ consistency factor (CF). Developed concise and conceptually clear content to assist learners worldwide and enhance their learning efficiency."
      ,certificate: "https://drive.google.com/file/d/1WuGHM30d5ZtfsDVEY0iDnXUiHabPhJpx/view?usp=sharing"
    },
    {
      company: "Kintu Designs",
      link: "https://kintudesigns.com/",
      badges: [],
      title: "Data Science Intern",
      // logo: JojoMobileLogo,
      start: "Mar 2024",
      end: "sept 2024",
      description:
        "Built a simple AI chatbot for Indian law using basic LSTM models and legal data. Gathered and cleaned data from websites to create training datasets. Helped connect backend services using Django and created APIs for chatbot use. Worked with a team on AI projects focused on product development and digital twins.",
      certificate: "/certificates/hochsport-badminton.pdf"
      },
  ],
skills: [
  "Java", "Python", "JavaScript", "SQL",
  "LLMs", "GenAI", "LangGraph",
  "React", "Next.js", "FastAPI",
  "MySQL", "AWS",
  "Git", "GitHub Actions", "Docker",
  "Pandas", "NumPy", "Seaborn", "Matplotlib", "Jupyter Notebook", "Power BI",
  "Mathematics", "Statistical Analysis", "Analytical Thinking"
]

,
  projects: [
    {
      title: "NEXUS – ECIU Challange",
      year: "2025",
      techStack: ["Side Project", "Python", "Next.js", "Ollama", 'Socket.io','LLM'],
      description:
        "Developed an real-time AI guidance during live interactions",
      // logo: ConsultlyLogo,
      link: {
        label: "NEXUS",
        href: "7",
      },
    },
    {
      title: "Crop Predictor",
      year: "2024",
      techStack: ["Side Project", "Python","JavaScript"],
      description:
        "Developed a Crop Recommendation System using machine learning to predict suitable crops based on soil and climatic conditions.",
      // logo: ConsultlyLogo,
      link: {
        label: "Github Repo",
        href: "https://github.com/ShiroyaJay/OPTIMAL_CROP_PREDICTOR",
      },
    },
    {
      title: "IPL Data Analysis",
      year: "2024",
      techStack: ["Side Project", "Power BI", "Data Analysis"],
      description:
        "This project explores IPL (Indian Premier League) match data to uncover key trends and insights using Power BI.",
      // logo: MonitoLogo,
      link: {
        label: "IPL Dashboard",
        href: "https://github.com/ShiroyaJay/IPL_Dashboard",
      },
    },
    {
      title: "House Price Predictor",
      year: "2022",
      techStack: ["Project", "Python", "Jupyter Notebook", "ML"],
      description:
        "Built a House Price Predictor using machine learning to estimate property prices based on features like location, size, and amenities.",
      // logo: JarockiMeLogo,
      link: {
        label: "House Price Predictor",
        href: "https://github.com/ShiroyaJay/HosuePricePrediction",
      },
    },
  ],
  certifications: [
     {
    title: "Deutschlandstipendium (2026) – Academic Excellence & Social Responsibility",
    issuer: "TUHH",
    date: "2026",
    link: "https://drive.google.com/file/d/10eb8Xg_mxTEttc1wo1HhGAomn5ejpE35/view?usp=drive_link"
  },
    {
    title: "GATE Computer Science - Secured 95 percentile out of 123k+ students in india",
    issuer: "IISc Bangalore",
    date: "2024",
    link: "https://drive.google.com/file/d/10eb8Xg_mxTEttc1wo1HhGAomn5ejpE35/view?usp=drive_link"
  },
  {
    title: "The Data Science Course 2023",
    issuer: "365 CAREERS - Udemy",
    date: "2023",
    link: "http://ude.my/UC-3787be33-9734-4c79-b039-7edb9ffb8e50",
  },
  {
    title: "30 Days of Google Cloud Program",
    issuer: "Google Cloud",
    date: "2021",
    link: "https://drive.google.com/file/d/132oswiREO79n5jTH2JXOY6VQA4yjJVQ0/view?usp=sharing",
  },
  
  
  {
    title: "JEE Mains - ALL INDIA 92.4 percentile out of 1 Million+ students",
    issuer: "NTA",
    date: "2020",
    link: "https://drive.google.com/file/d/12cgOLnCcwhiMulijraNkD_YUgXe4lZMc/view?usp=sharing"
  }
],

} as const;
