export type Service = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  capabilities: string[];
  cta: string;
  stage: string;
};

export const services: Service[] = [
  {
    slug: "custom-software",
    name: "Custom Software Development",
    headline: "Software built around the way you work.",
    description:
      "Design and development of applications tailored to specific business processes, from internal operations tools to commercial platforms.",
    capabilities: [
      "Web applications",
      "Internal business applications",
      "SaaS platforms",
      "Customer portals",
      "Employee portals",
      "Dashboards",
      "Workflow systems",
      "Database applications",
      "API development",
      "Legacy software modernization",
    ],
    cta: "Build Something",
    stage: "Software",
  },
  {
    slug: "software-consulting",
    name: "Software Consulting",
    headline: "Decide what to build before you pay to build it.",
    description:
      "We evaluate systems, workflows, and data before a line of code is written, so investment goes toward the software that actually changes operations.",
    capabilities: [
      "Software architecture",
      "Technology strategy",
      "System evaluation",
      "Workflow analysis",
      "Digital transformation",
      "Application modernization",
      "Database architecture",
      "SaaS strategy",
      "Technical roadmaps",
      "Integration planning",
    ],
    cta: "Start a Conversation",
    stage: "Strategy",
  },
  {
    slug: "ai-integration",
    name: "AI & Intelligent Integrations",
    headline: "AI should do work — not just generate text.",
    description:
      "We connect language models and automation to the systems, documents, and data your business already runs on, then measure the output.",
    capabilities: [
      "AI workflow automation",
      "AI assistants",
      "Internal knowledge systems",
      "Document intelligence",
      "Data extraction",
      "Automated reporting",
      "Customer support automation",
      "AI-powered search",
      "CRM integrations",
      "Email automation",
      "API-based AI integrations",
      "Custom AI interfaces",
    ],
    cta: "Explore AI Integration",
    stage: "AI",
  },
  {
    slug: "systems-integration",
    name: "Systems Integration & Automation",
    headline: "Your technology shouldn't operate in silos.",
    description:
      "The connective layer between applications, databases, hardware, and vendors — so information moves without a person retyping it.",
    capabilities: [
      "REST APIs",
      "Third-party integrations",
      "CRM integrations",
      "Accounting & QuickBooks integrations",
      "Database integration",
      "IoT & industrial data",
      "Operational dashboards",
      "Automation workflows",
      "Legacy system connectivity",
    ],
    cta: "Connect Your Systems",
    stage: "Integration",
  },
  {
    slug: "business-websites",
    name: "Business Websites",
    headline: "Websites that do more than exist online.",
    description:
      "High-performance marketing sites and portals engineered for speed, search visibility, and measurable lead generation.",
    capabilities: [
      "Corporate websites",
      "Small-business websites",
      "Landing pages",
      "Customer portals",
      "Lead generation",
      "SEO foundations",
      "Analytics",
      "CMS integration",
      "Custom functionality",
    ],
    cta: "Start a Project",
    stage: "Software",
  },
  {
    slug: "personal-websites",
    name: "Personal & Professional Websites",
    headline: "A digital presence with the same engineering standard.",
    description:
      "Modern sites for professionals, consultants, entrepreneurs, portfolios, and independent businesses.",
    capabilities: [
      "Professionals",
      "Consultants",
      "Entrepreneurs",
      "Portfolios",
      "Personal brands",
      "Independent businesses",
    ],
    cta: "Start a Project",
    stage: "Software",
  },
  {
    slug: "it-infrastructure",
    name: "IT & Infrastructure",
    headline: "The layer everything else depends on.",
    description:
      "Network architecture, hardware, cloud, and backup for small and growing businesses — designed rather than accumulated.",
    capabilities: [
      "Business networking",
      "Wi-Fi & network architecture",
      "VLAN segmentation",
      "Hardware deployment",
      "Workstations, servers, NAS",
      "Cloud services",
      "Microsoft 365",
      "Backup systems",
      "Remote access",
      "Cybersecurity coordination",
    ],
    cta: "Talk Infrastructure",
    stage: "Infrastructure",
  },
  {
    slug: "home-automation",
    name: "Home Automation & Smart Technology",
    headline: "Engineered residential technology.",
    description:
      "Designed smart-home systems built on open platforms, with real network architecture behind them — not a drawer of consumer gadgets.",
    capabilities: [
      "Smart home systems",
      "Home Assistant",
      "Lighting automation",
      "Environmental monitoring",
      "Smart access & garage automation",
      "Energy monitoring",
      "Network integration",
      "Security integrations",
      "Custom dashboards",
      "IoT & custom sensor systems",
    ],
    cta: "Design a System",
    stage: "Automation",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Discover",
    body: "Understand the business, users, problems, workflows, and existing systems.",
  },
  {
    n: "02",
    title: "Architect",
    body: "Design the software architecture, data model, integrations, security, and user experience.",
  },
  {
    n: "03",
    title: "Build",
    body: "Develop the application using modern, scalable technology.",
  },
  {
    n: "04",
    title: "Integrate",
    body: "Connect software, APIs, databases, infrastructure, AI, and existing business systems.",
  },
  {
    n: "05",
    title: "Deploy",
    body: "Launch production infrastructure and migrate users and data.",
  },
  {
    n: "06",
    title: "Evolve",
    body: "Continue improving the platform as the business grows.",
  },
];

export const techStack = [
  {
    group: "Frontend",
    items: ["React", "TanStack", "TypeScript", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Server functions"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "Prisma", "SQL", "Cloud databases"],
  },
  {
    group: "Infrastructure",
    items: [
      "Docker",
      "Cloud hosting",
      "Linux",
      "Microsoft 365",
      "Networking",
    ],
  },
  {
    group: "Automation",
    items: [
      "IoT",
      "Home Assistant",
      "Industrial systems",
      "Workflow automation",
    ],
  },
  {
    group: "Artificial Intelligence",
    items: [
      "LLM APIs",
      "AI agents",
      "Document processing",
      "Knowledge systems",
    ],
  },
];