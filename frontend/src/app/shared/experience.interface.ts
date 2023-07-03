export interface Technology {
  name: string;
}

export interface Skill {
  name: string;
}

export interface Experience {
  role: string;
  slug: string;
  description: string;
  company: string;
  place: 'on-site' | 'remote' | 'hybrid';
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  start: {
    month: string;
    year: string;
  };
  end?: {
    month: string;
    year: string;
  };
  current: boolean;
  location: string;
  skills: Skill[];
  technologies: Technology[];
}