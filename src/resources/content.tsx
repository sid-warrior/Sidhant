import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";

const person: Person = {
  firstName: "Sidhant",
  name: "Sidhant",
  role: "Design/Frontend dev",
  avatar: "/images/avatar.jpg",
  email: "sidhant2425@gmail.com",
  languages: ["English", "Hindi"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.name}'s Newsletter</>,
  description: (
    <>
      I occasionally share updates on my projects, backend development tips, and
      thoughts on building scalable systems.
    </>
  ),
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sid-warrior",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sidhant-%E2%80%8E-b99a12342/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Resume",
    icon: "Filecv",
    link: "https://drive.google.com/file/d/1yrKwFQ9H5jon8XMF8va01QfERkRz_VQN/view",
  },

];

const home: Home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name}'`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Sid Portfolio</>,
  featured: {
    display: true,
    title: (
      <>
        Recent Project: <strong className="ml-4">Coloration</strong>
      </>
    ),
    href: "/projects/automica",
  },
  subline: (
    <>
     Web developer with a really good eye for aesthetics and UI/UX
     You'll find me building cool stuff on the web and shitposting on X
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  image: "/images/og/about.png",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Web developer with a really good eye for aesthetics and UI/UX
        You'll find me building cool stuff on the web and shitposting on X
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Amigos Design",
        timeframe: "Sep 2025 - Nov 2025",
        role: "Junior Frontend/Graphic Develper",
        achievements: [
          <>
           Designed and produced marketing materials, including social media graphics, website
banners, and print advertisements, resulting in a 15% increase in click-through rates for
specific campaigns
          </>,
        ],
        images: [],
      },

    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Bachelor of Computer Applications",
        description: <>Panjab University, Chandigarh (2022-2025)</>,
      },
      {
        name: "High School",
        description: <> The Kendriya Vidyalaya Sangathan (2020–2022)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend Tech",
        tags: [
          {
            name: "React",
            icon: "React",
          },
          {
            name: "Next.js",
            icon: "next.js",
          },
          {
            name: "React Native",
            icon: "Native",
          },
          {
            name: "TypeScript",
            icon: "TypeScript",
          },
          {
            name: "Tailwind css",
            icon: "Tailwind css",
          },
          {
            name: "UI/UX Design",
            icon: "Tailwind css",
          },
          {
            name: "Motion",
            icon: "Motion",
          },
        ],
      },
      
      
      {
        title: "Design & Prototyping",
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
      },
    ],
  },
};

const work: Work = {
  path: "/projects",
  label: "Projects",
  image: "/images/og/projects.png",
  title: `Projects – ${person.name}`,
  description: `A collection of personal, freelance, and open-source projects by ${person.name}`,
};
export { person, social, newsletter, home, about, work };
