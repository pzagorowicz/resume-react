export type Contact = {
  email: string;
  mobile: string;
  dateOfBirth: string;
};

export type Ability = {
  category: string;
  skills: string[];
};

export type Job = {
  company: string;
  timeSpan: string;
  role: string;
  description: string;
};

export type Education = {
  school: string;
  faculty: string;
  title: string;
  since: string;
  to: string;
};

export type ResumeModel = {
  name: string;
  description: string;
  contact: Contact;
  abilities: Ability[];
  experience: Job[];
  education: Education[];
};
