export interface Education {
  school: string;
  slug: string;
  degree: string;
  field: string;
  start: {
    month: string;
    year: string;
  };
  end: {
    month: string;
    year: string;
  };
  current: boolean;
  location: string;
  description: string;
}