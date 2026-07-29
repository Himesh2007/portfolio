export type SkillCategory = 'Frontend' | 'Backend' | 'Databases' | 'Tools';

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

export interface NavItem {
  label: string;
  href: string;
}
