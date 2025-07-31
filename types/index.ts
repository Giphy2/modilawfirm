export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  services: string[];
  slug: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  qualifications: string[];
  specialties: string[];
  experience: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientCompany: string;
  content: string;
  rating: number;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  tags: string[];
  slug: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  practiceArea: string;
  message: string;
} 