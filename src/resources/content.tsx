import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "I Putu",
  lastName: "Arisgunarta",
  name: "I Putu Arisgunarta",
  role: "Climate Analyst | Applied Climatology",
  avatar: "/images/avatar-aris.svg",
  email: "putuaris.g@gmail.com",
  location: "Asia/Jakarta",
  languages: ["Bahasa Indonesia", "English"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Climate notes from {person.firstName}</>,
  description: <>Research, climate data, and practical climate action.</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/putuaris/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/mycarbonsteps/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/climate-og.png",
  label: "Home",
  title: `${person.name} — Climate Analyst`,
  description:
    "Portfolio of I Putu Arisgunarta: applied climatology, climate data analytics, air quality research, IoT, climate education, and community action.",
  headline: <>Turning climate data into action.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured research</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          AI climate modeling
        </Text>
      </Row>
    ),
    href: "/work/ai-based-climate-modeling",
  },
  subline: (
    <>
      I’m {person.firstName}, an applied climatology researcher working at the intersection of{" "}
      <Text as="span" size="xl" weight="strong">
        climate data, technology, and social impact
      </Text>
      . I translate evidence into tools, learning programs, and practical solutions for resilient
      communities.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Profile",
  title: `About — ${person.name}`,
  description: `${person.name} is a climate and air quality professional focused on applied climatology, data, education, and environmental action.`,
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
    title: "Climate data → real-world impact",
    description: (
      <>
        An early-career climate and air quality professional with hands-on experience in project
        coordination, data management, environmental programs, and research. My work combines
        applied climatology with data analysis, IoT, climate education, and stakeholder engagement
        to make environmental evidence more understandable and actionable.
      </>
    ),
  },
  work: {
    display: true,
    title: "Professional Experience",
    experiences: [
      {
        company: "Carbonaddons / Carbon Academy Vol. 3",
        timeframe: "Apr 2026 — Present",
        role: "Part-Time Facilitator — Climate Education Program",
        achievements: [
          <>Facilitate online climate education sessions and support program delivery.</>,
          <>Manage attendance, documentation, reporting, and participant engagement.</>,
        ],
        images: [],
      },
      {
        company: "MyCarbonSteps × Carbon Academy",
        timeframe: "Feb 2025 — Jun 2025",
        role: "Project Leader — Carbon Vlogger Workshop & Challenge",
        achievements: [
          <>Led a national climate education project with 30+ participants across Indonesia.</>,
          <>Managed timelines, deliverables, partners, monitoring and evaluation, and reporting.</>,
          <>Coordinated digital outputs reaching 20,000+ users and 30,000+ impressions.</>,
          <>Supported funding acquisition and project continuation planning.</>,
        ],
        images: [
          {
            src: "/images/projects/carbon-vlogger.svg",
            alt: "Carbon Vlogger climate education project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Rinjani Geopark × UNESCO Collaboration",
        timeframe: "Sep 2024 — Nov 2024",
        role: "Training & Program Support — Disaster Education",
        achievements: [
          <>Supported disaster education and training programs for 100+ students.</>,
          <>Coordinated logistics, documentation, attendance, facilitators, schools, and reporting.</>,
        ],
        images: [],
      },
      {
        company: "Yaksa Pelestari Bumi Berkelanjutan",
        timeframe: "Dec 2022 — Feb 2023",
        role: "Development & Planning Staff",
        achievements: [
          <>Supported Zero Waste City research and policy analysis.</>,
          <>Developed planning documents, environmental assessments, reports, and public education materials.</>,
        ],
        images: [],
      },
      {
        company: "IPB University — Climatology Lab",
        timeframe: "Apr 2018 — Sep 2019",
        role: "Air Quality Researcher — PM2.5 Monitoring Project",
        achievements: [
          <>Designed and assembled an IoT-based PM2.5 monitoring device for real-time data collection.</>,
          <>Managed data processing, database integration, analysis, and technical documentation.</>,
        ],
        images: [
          {
            src: "/images/projects/pm25-iot.svg",
            alt: "ESP32 PM2.5 monitoring system",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "IPB University",
        description: <>Master of Applied Climatology — final year, expected December 2026 · GPA 3.90</>,
      },
      {
        name: "IPB University",
        description: <>Bachelor of Science in Applied Meteorology — graduated July 2021</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Research & Technical Toolkit",
    skills: [
      {
        title: "Climate Data & Modeling",
        description: <>Time-series analysis, climate data analytics, statistical evaluation, and neural-network modeling.</>,
        tags: [
          { name: "Python", icon: "javascript" },
          { name: "Keras", icon: "document" },
          { name: "Pandas", icon: "document" },
          { name: "NumPy", icon: "document" },
        ],
        images: [
          {
            src: "/images/projects/ai-climate-modeling.svg",
            alt: "AI-based climate modeling visualization",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Environmental Monitoring & IoT",
        description: <>PM2.5 monitoring, Arduino/ESP32 prototyping, data logging, SQL, and web visualization.</>,
        tags: [
          { name: "PM2.5", icon: "eye" },
          { name: "Arduino", icon: "document" },
          { name: "ESP32", icon: "rocket" },
          { name: "SQL", icon: "document" },
        ],
      },
      {
        title: "Project, MEL & Communication",
        description: <>Project coordination, monitoring and evaluation, reporting, stakeholder communication, and climate storytelling.</>,
        tags: [
          { name: "MEL", icon: "document" },
          { name: "Climate Education", icon: "book" },
          { name: "Stakeholders", icon: "person" },
        ],
      },
      {
        title: "Spatial & Data Tools",
        description: <>ArcGIS, Python-based analysis, reporting, and evidence-based environmental planning.</>,
        tags: [
          { name: "ArcGIS", icon: "globe" },
          { name: "Python", icon: "javascript" },
          { name: "Data Analytics", icon: "eye" },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Notes",
  title: `Climate Notes — ${person.name}`,
  description: `Notes on climate data, resilience, air quality, and environmental communication by ${person.name}.`,
};

const work: Work = {
  path: "/work",
  label: "Research",
  title: `Research & Projects — ${person.name}`,
  description: `Selected climate research, environmental technology, and social impact projects by ${person.name}.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Fieldwork",
  title: `Fieldwork — ${person.name}`,
  description: `Selected visual documentation from climate and environmental work.`,
  images: [
    {
      src: "/images/projects/ai-climate-modeling.svg",
      alt: "AI-based climate modeling",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/pm25-iot.svg",
      alt: "PM2.5 IoT monitoring",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/carbon-vlogger.svg",
      alt: "Carbon Vlogger climate education",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
