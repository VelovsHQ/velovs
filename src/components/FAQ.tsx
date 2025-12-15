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
    question: 'What services do you offer?',
    answer: 'We architect AI systems from strategy to deployment: custom machine learning models, intelligent automation, predictive analytics, natural language processing, computer vision, and seamless integration into your existing infrastructure. If it thinks, we build it.',
  },
  {
    id: '02',
    question: 'What is your typical turnaround time?',
    answer: 'AI strategy and planning: 2-3 weeks. Custom model development: 6-12 weeks depending on complexity. Integration and deployment: 3-6 weeks. We move fast, but intelligence can\'t be rushed. Quality over speed, always.',
  },
  {
    id: '03',
    question: 'Do you only work with specific technologies?',
    answer: 'No. We\'re framework-agnostic. Python, TensorFlow, PyTorch, FastAPI, Next.js, PostgreSQL—we choose the right tools for your challenge, not what\'s trendy. Your problem defines the stack, not the other way around.',
  },
  {
    id: '04',
    question: 'Can you handle both strategy and implementation?',
    answer: 'Absolutely. We don\'t just consult—we execute. From identifying AI opportunities to deploying production-ready systems, we own the entire journey. Strategy without implementation is just expensive advice.',
  },
  {
    id: '05',
    question: 'Do you offer ongoing support and optimization?',
    answer: 'Yes. AI systems learn and evolve. We provide continuous monitoring, model retraining, performance optimization, and scaling support. Intelligence requires maintenance, and we\'re here for the long term.',
  },
  {
    id: '06',
    question: "What's your process like?",
    answer: 'Discovery → Design → Develop → Deploy → Optimize. We start by understanding your business deeply, architect intelligent solutions, build custom models, integrate seamlessly, and continuously refine. Transparent. Collaborative. Results-driven.',
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
                    {item.id}
                  </span>
                  
                  {/* Question */}
                  <div className="flex-1 pr-8">
                    <h3 className="text-xl md:text-2xl font-normal group-hover:text-white/80 transition-colors">
                      {item.question}
                    </h3>
                    
                    {/* Answer (Animated reveal) */}
                    <div 
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                          {item.answer}
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

      {/* Floating Twitter/X Icon (Bottom Right) */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-neutral-900 p-3 rounded-full hover:bg-neutral-800 transition-colors">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
        </button>
      </div>
    </section>
  );
}