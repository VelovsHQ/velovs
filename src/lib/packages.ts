// app/lib/packages.ts

export type Package = {
  id: string;
  name: string;
  description: string;
  features: string[];
  isCustom?: boolean; // To identify the 'Custom' card
};

export const SERVICE_PACKAGES: Package[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Ideal for businesses beginning their autonomous journey.",
    features: [
      "Autonomous AI Agents for single-task automation",
      "AI-Powered Business Solutions for small workflows",
      "Basic Agentic Workflow Automation"
    ]
  },
  {
    id: "professional",
    name: "Professional",
    description: "Enhanced automation for scaling departments.",
    features: [
      "Multi-agent systems for cross-department automation",
      "Custom AI System integrations for internal tools",
      "Enhanced AI dashboards & predictive analytics"
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Complete neural infrastructure for global organizations.",
    features: [
      "Full-scale AI-powered business solutions",
      "End-to-end Retrieval-Augmented Generation systems",
      "AI Strategy & Architecture Design"
    ]
  },
  {
    id: "custom",
    name: "Custom",
    description: "Tailored intelligence built for unique challenges.",
    features: [
      "Bespoke integrations & multi-agent coordination",
      "Internal & customer-facing platforms",
      "Complete roadmap & workflow design"
    ],
    isCustom: true
  }
];