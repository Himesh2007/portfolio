import type { Project } from '@/types/portfolio';

export const projects: Project[] = [
  {
    title: 'Nova Studio',
    description: 'A polished marketing site with a modern editorial layout and performance-focused build.',
    image: '/images/project-1.svg',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Insight Dashboard',
    description: 'A data-heavy analytics dashboard designed for quick decision-making and clear insights.',
    image: '/images/project-2.svg',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Pulse Commerce',
    description: 'A streamlined ecommerce storefront with smooth product browsing and checkout flows.',
    image: '/images/project-3.svg',
    tech: ['Next.js', 'PostgreSQL', 'Express'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Atlas Notes',
    description: 'A distraction-free note-taking app with rich organization and simple collaboration features.',
    image: '/images/project-4.svg',
    tech: ['React', 'Tailwind CSS', 'Docker'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];
