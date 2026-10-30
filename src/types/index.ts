export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  keyBenefits: string[];
  bestFor: string;
  deliverables: string[];
  process: string[];
  faqs?: { question: string; answer: string }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
  };
  publishedDate: string;
  readTime: string;
  content: string[];
  keyTakeaways: string[];
  relatedServices: string[];
}

export interface ConsultationLead {
  id: string;
  fullName: string;
  businessEmail: string;
  companyWebsite: string;
  serviceRequired: string;
  monthlyBudget: string;
  projectDetails: string;
  targetMarket?: string;
  submittedAt: string;
  status: "new" | "reviewed" | "scheduled";
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface IndustryItem {
  name: string;
  slug: string;
  description: string;
  challenges: string;
  strategyFocus: string;
  placementSuitability: string;
}
