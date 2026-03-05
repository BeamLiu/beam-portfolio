export interface PersonalData {
  fullName?: string;
  avatar?: string;
  name: string;
  title: string;
  slogan: string;
  contact: {
    github: string;
    linkedin: string;
    wechat: string;
    email: string;
    resumePDF?: string;
  };
  metrics: {
    yearsOfExperience: string;
    patents: string;
    projectsValue: string;
    teamSize: string;
  };
  interests: {
    readingHours: number;
    books: number;
    hobbies: string[];
    bookList?: {
      technical?: string;
      philosophy?: string;
      management?: string;
      scifi?: string;
    };
  };
  education?: {
    university: string;
    degree: string;
    year: string;
  };
  languages?: string;
}

export interface Project {
  id: string;
  name: string;
  year: string;
  role: string;
  description: string;
  challenges: string;
  impact: string;
  tags: string[];
  media?: {
    image?: string;
    video?: string;
    videos?: Array<{ title: string; url: string }>;
    pdf?: string;
    pdfs?: Array<{ title: string; url: string }>;
    github?: string;
    weblink?: string;
  };
}

export interface Patent {
  id: string;
  title: string;
  number: string;
  year: string;
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  achievement: string;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  year: string;
  description: string;
}
