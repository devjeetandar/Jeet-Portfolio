export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery?: string[];
  role: string;
  technologies: string[];
  features: string[];
  challenges?: string[];
  outcome: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  type?: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  verifiedLink?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    context: string;
    level?: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  organization?: string;
  category: 'National Winner' | 'Leadership' | 'Creative' | 'Certification';
  year: string;
  description: string;
}
