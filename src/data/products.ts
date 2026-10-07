export type ProductStatus =
  | "Available"
  | "Early Access"
  | "In Development";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  industry: string;
  status: ProductStatus;
  accent: string;
  summary: string;
  capabilities: string[];
  preview:
    | {
        label: string;
        rows: {
          title: string;
          meta: string;
          value: string;
        }[];
      }
    | {
        label: string;
        image: string;
        alt: string;
      };
};

export const products: Product[] = [
  {
    slug: "motodeskos",
    name: "MotoDeskOS",
    tagline: "The operating system for powersports dealerships.",
    industry: "Powersports Operations",
    status: "In Development",
    accent: "var(--primary)",
    summary:
      "A complete dealership and service management platform that connects sales, service, parts, and customers inside one operational system.",
    capabilities: [
      "Service & repair orders",
      "Technician workflows",
      "Parts & inventory",
      "Purchase orders",
      "Unit management",
      "CRM & leads",
      "Scheduling",
      "Sales workflows",
      "Reporting & analytics",
      "Customer communication",
      "Multi-location operations",
      "Role-based access",
    ],
    preview: {
      label: "Operations Dashboard",
      image: "/images/MotoDeskOS_image.png",
      alt: "MotoDeskOS operations dashboard showing service, parts, and sales metrics",
    },
  },
  {
    slug: "worktraceos",
    name: "WorkTraceOS",
    tagline: "Field operations without the paperwork.",
    industry: "Field Service & Workforce",
    status: "In Development",
    accent: "var(--cyan)",
    summary:
      "A modern field-service and workforce operations platform for teams managing technicians, jobs, documents, expenses, and reporting in the field.",
    capabilities: [
      "Field service operations",
      "Job tracking",
      "Digital field reports",
      "Time tracking",
      "Expense tracking",
      "Documents",
      "Employee workflows",
      "Customer records",
      "Scheduling",
      "Reporting",
      "Operational analytics",
      "Mobile-first workflows",
    ],
    preview: {
      label: "Field Dashboard",
      image: "/images/WorkTraceOS_image.png",
      alt: "WorkTraceOS field dashboard showing work orders, dispatch status, and team activity",
    },
  },
  {
    slug: "propcoreos",
    name: "PropCoreOS",
    tagline: "Property operations. Unified.",
    industry: "Property Management & Accounting",
    status: "In Development",
    accent: "var(--violet)",
    summary:
      "A property management and accounting platform that consolidates the fragmented tools used by owners and management companies into one ledger-backed system.",
    capabilities: [
      "Property & unit management",
      "Tenant management",
      "Rent collection",
      "Tenant portal",
      "Maintenance requests",
      "Work orders",
      "Accounting & bookkeeping",
      "Expenses",
      "Financial reporting",
      "Owner reporting",
      "Documents",
      "Portfolio metrics",
    ],
    preview: {
      label: "Portfolio Dashboard",
      image: "/images/PropCoreOS_image.png",
      alt: "PropCoreOS portfolio dashboard showing occupancy, rent roll, and maintenance metrics",
    },
  },
];