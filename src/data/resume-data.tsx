// Project: resume-builder
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "JAY SHIROYA",
  initials: "Jay",
  location: "Hamburg, Germany",
  locationLink: "https://maps.app.goo.gl/VrBN7SmhCeSvxjdR6",
  about:
    "Pursuing Master’s in Data Science while learning and understanding the world of Artificial Intelligence.",
  summary:
    "Passionate about transforming data into actionable insights using machine learning and AI techniques. Worked as a data science intern and currently contributing to the sports department at TH Deggendorf. Proficient in Python, SQL, and data visualization tools.",
  avatarUrl: "https://avatars.githubusercontent.com/u/121104652?s=400&u=6359b2cdaef46825bac0ae31f2edfa17601604f4&v=4",
  personalWebsiteUrl: "https://jayshiroya-portfolio.vercel.app/",
  contact: {
    email: "jayshiroya2813@gmail.com",
    tel: "+49 15754954344",
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
    },
    {
      school: "Technischen Hochschule Deggendorf, Germany",
      degree: "M.Sc. AI and Data Science",
      start: "Mar 2025",
      end: "Oct 2025",
    },
    {
      school: "Government Engineering College Gandhinagar, India",
      degree: "B.E. Computer Engineering",
      start: "2020",
      end: "  2024",
    },
  ],
  work: [
    {
      company: "TH Deggendorf - Hochschulsport",
      link: "https://www.th-deg.de/",
      badges: [],
      title: "Lead - Badminton",
      // logo: ParabolLogo,
      start: "Apr 2025",
      end: "Aug 2025",
      description:
        "Managed 30+ participants independently by handling planning, logistics, communication, attendance, performance feedback, and compliance using the iLearn platform.",
      certificate: "/certificates/hochsport-badminton.pdf"
      },
    {
      company: "Petpooja",
      link: "https://www.petpooja.com/",
      badges: [],
      title: "Data Science Intern",
      // logo: ParabolLogo,
      start: "Oct 2024",
      end: "Mar 2025",
      description: "Analyzed food-related datasets and optimized large language model prompts to improve Indian cuisine recognition accuracy by 5%. Helped improve the digital invoice data process to make model training faster and more efficient. Worked on a Power BI dashboard to create visualizations.",
      certificate: "https://drive.google.com/file/d/1d-LEkl-3O1c-0IvaxbCT0RHYw0sYTKxP/view?usp=sharing"
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
      title: "Website Builder: AI",
      year: "2025",
      techStack: ["Side Project", "JavaScript", "Next.js", "Tailwind CSS", 'Convex','Gemini'],
      description:
        "Developed an AI-powered website builder to generate content, code, and designs dynamically.",
      // logo: ConsultlyLogo,
      link: {
        label: "Website Builder",
        href: "https://github.com/ShiroyaJay/Website_Builder",
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
      title: "Netflix Clone",
      year: "2022",
      techStack: ["Side Project", "JavaScript", "React.js", "themoviedb API"],
      description:
        "Developed a Netflix clone using React.js and CSS, mimicking the popular streaming platform’s user interface.",
      // logo: MonitoLogo,
      link: {
        label: "Netflix Clone",
        href: "",
      },
    },
    {
      title: "House Price Predictor",
      year: "2022",
      techStack: ["Project", "Python", "Jupyter Notebook", "ML"],
      description:
        "Built a House Price Predictor using machine learning to estimate property prices based on features like location, size, and amenities. Implemented regression models and data preprocessing to achieve accurate predictions.",
      // logo: JarockiMeLogo,
      link: {
        label: "House Price Predictor",
        href: "https://github.com/ShiroyaJay/HosuePricePrediction",
      },
    },
  ],
  certifications: [
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
