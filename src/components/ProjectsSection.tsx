'use client';
import React from 'react';

interface Project {
  title: string;
  path: string;
  category: string;
  description: string;
  bullets: string[];
  tags: string[];
  link?: {
    href: string;
    label: string;
    type: 'external' | 'github';
  };
}

const projects: Project[] = [
  {
    title: 'Attendance Marker',
    path: '~/projects/attendance-marker',
    category: 'Web App · PHP + MySQL',
    description: 'PHP + Tailwind + MySQL attendance system with PDF reporting and visualizations; contributed at NPA for worker/marking workflows.',
    bullets: [
      'Built attendance tracking with PDF report generation and data visualizations.',
      'Contributed to NPA worker and marking workflows during industrial training.',
    ],
    tags: ['PHP', 'MySQL', 'Tailwind CSS', 'PDF Reporting'],
  },
  {
    title: 'Fastpoll',
    path: '~/projects/fastpoll',
    category: 'Full-Stack · Polling Platform',
    description: 'A full-stack vanilla PHP polling platform with authentication, real-time voting, and Tailwind UI.',
    bullets: [
      'Built authentication, real-time voting mechanics, and a clean Tailwind-based UI.',
      'Implemented poll creation, vote tracking, and result visualization features.',
    ],
    tags: ['PHP', 'Tailwind CSS', 'Authentication', 'Real-time Voting'],
  },
  {
    title: 'Flix Recommender',
    path: '~/projects/flix-recommender',
    category: 'React App · Movie Recommendations',
    description: 'React + Tailwind application for movie recommendations, deployed on Vercel.',
    bullets: [
      'Built a movie recommendation engine with React and Tailwind CSS.',
      'Deployed on Vercel with a clean, responsive UI for browsing recommendations.',
    ],
    tags: ['React', 'Tailwind CSS', 'Vercel'],
  },
  {
    title: 'PhotoAI',
    path: '~/projects/photoai',
    category: 'React App · AI Photo Features',
    description: 'React + Tailwind application for AI-powered photo features, deployed on Vercel.',
    bullets: [
      'Implemented AI-powered photo processing and enhancement features.',
      'Built with React and Tailwind CSS, deployed on Vercel.',
    ],
    tags: ['React', 'Tailwind CSS', 'AI', 'Vercel'],
  },
  {
    title: 'Writeup',
    path: '~/projects/writeup',
    category: 'Cross-Platform · Web + Android',
    description: 'Cross-platform (web + Android) application with authentication, dark mode, and in-app notifications using sockets.',
    bullets: [
      'Built cross-platform support for both web and Android with a unified codebase.',
      'Implemented real-time in-app notifications using WebSockets, authentication, and dark mode.',
    ],
    tags: ['Cross-Platform', 'WebSockets', 'Authentication', 'Dark Mode', 'Android'],
  },
  {
    title: 'Ink Up AI',
    path: '~/projects/ink-up-ai',
    category: 'ML Script · Content Moderation',
    description: 'An ML script for NSFW text detection and post-safety moderation.',
    bullets: [
      'Implemented NSFW text detection using machine learning models.',
      'Built post-safety moderation pipeline for content filtering.',
    ],
    tags: ['Machine Learning', 'NLP', 'Python', 'Content Moderation'],
  },
  {
    title: 'Renthub',
    path: '~/projects/renthub',
    category: 'Frontend · Rental Management Platform',
    description: 'Frontend of a rental and property management platform designed to streamline tenant/landlord workflows, property listings, and related operations.',
    bullets: [
      'Developed the complete frontend for tenant/landlord workflows and property listings.',
      'Built a clean, responsive UI for property management and rental operations.',
    ],
    tags: ['React', 'Frontend', 'Property Management', 'Tailwind CSS'],
    link: {
      href: 'https://rent-project-six.vercel.app',
      label: 'Preview',
      type: 'external',
    },
  },
  {
    title: 'Invoice Creator',
    path: '~/projects/invoice-creator',
    category: 'Tool · PDF Generation',
    description: 'A tool that converts spreadsheet-based invoice files into professional, downloadable PDF documents.',
    bullets: [
      'Converts structured spreadsheet data into professional, client-ready PDF invoices.',
      'Streamlines billing workflows with quick generation from structured data using SheetJS and jsPDF.',
    ],
    tags: ['JavaScript', 'jsPDF', 'SheetJS', 'PDF Generation'],
  },
];

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="font-mono text-2xl md:text-3xl font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>
            <span style={{ color: 'var(--color-text-muted)' }}>$</span> projects
          </h2>
          <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
            Selected projects spanning web, mobile, AI, and tooling
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="h-full">
              <div
                className="terminal-glow rounded-lg border overflow-hidden transition-colors duration-300 h-full"
                style={{ borderColor: 'var(--color-border)' }}
              >
                {/* Terminal Header */}
                <div
                  className="flex items-center gap-2 px-4 py-3 border-b"
                  style={{
                    backgroundColor: 'var(--color-bg-tertiary)',
                    borderColor: 'var(--color-border)',
                  }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f56' }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ffbd2e' }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#27ca40' }} />
                  </div>
                  <span className="font-mono text-sm ml-2" style={{ color: 'var(--color-text-muted)' }}>
                    {project.path}
                  </span>
                </div>
                {/* Terminal Body */}
                <div className="p-4 md:p-6 font-mono text-sm md:text-base">
                  <div className="flex h-full flex-col space-y-4">
                    <div>
                      <span style={{ color: 'var(--color-accent)' }}>$</span>{' '}
                      <span style={{ color: 'var(--color-cyan)' }}>cat</span> README.md
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs uppercase" style={{ color: 'var(--color-accent)' }}>
                        {project.category}
                      </p>
                      <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                        {project.title}
                      </h3>
                      <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                        {project.description}
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      {project.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-2 leading-relaxed">
                          <span style={{ color: 'var(--color-accent)' }} aria-hidden="true">-</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-1 text-xs rounded border"
                          style={{
                            backgroundColor: 'var(--color-bg-tertiary)',
                            color: 'var(--color-accent)',
                            borderColor: 'var(--color-border-accent)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <div className="mt-auto flex items-center gap-4 pt-2">
                        <a
                          href={project.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} ${project.link.label}`}
                          className="flex items-center gap-2 text-sm transition-colors"
                          style={{ color: 'var(--color-text-secondary)' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                        >
                          {project.link.type === 'github' ? <GithubIcon /> : <ExternalLinkIcon />}
                          <span>{project.link.label}</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
