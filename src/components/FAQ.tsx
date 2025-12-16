'use client';

import { useState } from 'react';
import Image from 'next/image';

// Defines the structure of an FAQ item
type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

// Data extracted directly from the image
const faqData: FaqItem[] = [
  {
    id: '01',
    question: 'What do you actually build?',
    answer: 'Smart systems that solve real problems. Predictive models, automation workflows, intelligent search, recommendation engines, data pipelines—whatever makes your business think faster and move smarter.'
  },
  {
    id: '02',
    question: 'How long does AI development take?',
    answer: "Depends on complexity. Simple automation: weeks. Custom ML models: months. We'll give you honest timelines after discovery. No BS, no surprises."
  },
  {
    id: '03',
    question: 'What tech stack do you use?',
    answer: "Whatever works. Python for AI, Next.js for frontend, FastAPI for backend, PostgreSQL with pgvector for data. We're not married to tools—we're married to results."
  },
  {
    id: '04',
    question: 'Can you handle the full stack?',
    answer: "From data science to deployment, yes. We don't hand off between teams. One partner, end-to-end ownership."
  },
  {
    id: '05',
    question: 'What happens after launch?',
    answer: "We monitor, optimize, and scale. AI isn't set-and-forget—it's living technology that improves over time. We stick around to make it better."
  },
  {
    id: '06',
    question: 'How do you work with clients?',
    answer: "Total transparency. Weekly updates, shared roadmaps, direct access to our team. You're not just a client—you're a partner in building intelligence."
  },
];

export default function FaqSection() {
  // State to track which accordion item is open. Defaulting to '01' as per the image.
  const [openId, setOpenId] = useState<string | null>('01');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-black text-white min-h-screen w-full flex items-center justify-center p-6 md:p-12 lg:p-20">
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Heading and Image */}
        <div className="flex flex-col justify-center">
          {/* Portrait Image Placeholder */}
          <div className="mb-8 relative w-48 h-64 overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl">
            {/* Replace src with your actual image path */}
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" 
              alt="Portrait" 
              className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight">
            Clarifying Deliverable&apos;s <br />
            Before They Begin <br />
            with Real Process and <br />
            Honest <span className="font-light">ー</span>.
          </h1>
        </div>

        {/* Right Column: FAQ List */}
        <div className="flex flex-col justify-center">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div 
                key={item.id} 
                className="border-t border-white/20"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full py-8 flex items-start text-left group transition-all"
                >
                  {/* Number (01, 02...) */}
                  <span className="text-sm font-mono text-white/90 pt-1 w-12 shrink-0">
                    <span className="font-chakra font-bold text-white">{item.id}</span>
                  </span>
                  
                  {/* Question */}
                  <div className="flex-1 pr-8">
                    <h3 className="text-xl md:text-2xl font-normal group-hover:text-white/80 transition-colors">
                      <span className="font-chakra">{item.question}</span>
                    </h3>
                    
                    {/* Answer (Animated reveal) */}
                    <div 
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                          <span className="font-chakra">{item.answer}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Icon (+ / -) */}
                  <span className="text-2xl font-light shrink-0 ml-4">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
              </div>
            );
          })}
          
          {/* Bottom border for the last item */}
          <div className="border-t border-white/20"></div>
        </div>

      </div>
    </section>
  );
}