// app/lib/testimonials.ts
import { StaticImageData } from "next/image";

// 1. Import your local images from the components folder
import man1 from "../../public/images/people/man1.jpg";
import man2 from "../../public/images/people/man2.jpg";
import man3 from "../../public/images/people/man3.jpg";

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: StaticImageData; // Changed from string to StaticImageData for local files
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Alexander Voss",
    role: "Director of Innovation",
    company: "Nexus Logistics",
    content: "Velovs & Co. transformed our fragmented supply chain into a synchronized autonomous engine. Their agentic systems aren't just tools; they are digital team members.",
    image: man1
  },
  {
    id: "2",
    name: "Elena Rodriguez",
    role: "Chief Technology Officer",
    company: "FinTech Global",
    content: "The level of precision in their RAG implementations is unmatched. We saw a 40% reduction in manual data retrieval within the first month of deployment.",
    image: man1
  },
  {
    id: "3",
    name: "Julian Thorne",
    role: "Founder & CEO",
    company: "Aether Systems",
    content: "Working with Oshada and the team was a masterclass in AI strategy. They didn't just give us a chatbot; they built an intelligent nervous system for our company.",
    image: man1
  },
  {
    id: "4",
    name: "John Doe",
    role: "Founder & CEO",
    company: "SyscoLabs",
    content: "Working with Oshada and the team was a masterclass in AI strategy. They didn't just give us a chatbot; they built an intelligent nervous system for our company.",
    image: man1
  }
];