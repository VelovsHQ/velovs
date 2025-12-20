import { StaticImageData } from "next/image";

// Import images moving up two levels (../../) from 'app/lib' to 'components'
import senukaImg from "../../components/Images/senuka.png";
import oshadaImg from "../../components/Images/oshada.png";
import asilaImg from "../../components/Images/asila.jpeg";

export type Founder = {
  id: string;
  name: string;
  role: string;
  bioHeadline: string; // The quote
  bio: string;         // The main text
  funFact: string;     // NEW: The fun fact
  image: StaticImageData;
  slug: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
};

export const FOUNDERS: Founder[] = [
  {
    id: "1",
    name: "Senuka Chandunu",
    role: "Co-Founder, CEO & Chief AI Strategist",
    bioHeadline: "He doesn’t just build intelligence — he decides what it should become.",
    bio: "Senuka Chandunu is the strategic mind behind Velovs’ intelligence layer. As CEO and Chief AI Strategist, he leads AI/ML research, model experimentation, and long-term technical vision, transforming cutting-edge models into real, business-aligned autonomous systems. With a BSc (Hons) in Computer Science from the University of Plymouth, UK, he bridges the gap between research and practical deployment, ensuring Velovs’ intelligence delivers tangible impact. Senuka’s expertise spans AI/ML research, model optimization, and agentic AI strategy, all driven by a relentless pursuit of innovation.",
    funFact: "He can spend hours tweaking a model for a single percentage improvement, believing that marginal gains define great intelligence.",
    image: senukaImg,
    slug: "senuka-chandunu",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "2",
    name: "Oshada Rashmika",
    role: "Co-Founder, CTO & Head of Autonomous Systems",
    bioHeadline: "If it runs, scales, and never breaks — he built it.",
    bio: "Oshada Rashmika is the backbone of Velovs’ systems and infrastructure. As CTO and Head of Autonomous Systems, he designs and builds the scalable platforms that enable autonomous AI agents to operate reliably in real-world conditions. With a BSc (Hons) in Computer Science from the University of Plymouth, UK, Oshada brings strong technical foundations to backend architecture, agent orchestration, production-grade system design, and infrastructure optimization. He turns complex AI ideas into fully operational systems, ensuring every Velovs solution is secure, scalable, and high-performing.",
    funFact: "Oshada enjoys breaking his own systems just to rebuild them stronger — stress-testing is his idea of fun.",
    image: oshadaImg,
    slug: "oshada-rashmika",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "3",
    name: "Asila Ranasinghe",
    role: "Co-Founder, CPO & Head of Business Solutions",
    bioHeadline: "He turns powerful technology into something people instantly understand.",
    bio: "Asila Ranasinghe leads product vision and business solution design at Velovs, ensuring that autonomous AI capabilities are intuitive, usable, and valuable. As CPO and Head of Business Solutions, he focuses on UI/UX, agent behavior, and product strategy, shaping how users interact with AI and how businesses extract meaningful value. With a BSc (Hons) in Computer Science from the University of Plymouth, UK, he bridges technology and market needs, translating complex AI into elegant, client-ready solutions.",
    funFact: "Asila often redesigns products in his head while using them — even apps he’s never worked on.",
    image: asilaImg,
    slug: "asila-ranasinghe",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
];

// Helper function to get a single founder by slug
export function getFounderBySlug(slug: string): Founder | undefined {
  return FOUNDERS.find((founder) => founder.slug === slug);
}