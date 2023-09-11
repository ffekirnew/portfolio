export interface Technology {
  name: string;
}

export interface Project {
  name: string;
  slug?: string;
  description: string;
  status?: 'active' | 'inactive';
  createdAt?: Date;
  technologies?: Technology[];
  image?: string;
  link?: string;
}
