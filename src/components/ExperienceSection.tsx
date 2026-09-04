'use client';
import React from 'react';

interface ExperienceItem {
  company: string;
  path: string;
  role: string;
  type: string;
  period: string;
  summary: string;
  bullets: string[];
  link?: {
    href: string;
    label: string;
  };
}

const experiences: ExperienceItem[] = [
  {
    company: 'Nigerian Ports Authority (NPA)',
    path: '~/experience/NPA',
    role: 'System Analyst (Industrial Training)',
    type: 'Nigerian Ports Authority (NPA) | 6-Month Industrial Training',
    period: '6 Months',
    summary:
      'Contributed to the analysis and development of a Staff Appraisal Management System, supporting system design and database management at the Nigerian Ports Authority.',
    bullets: [
      'Contributed to the analysis and development of a Staff Appraisal Management System, gathering requirements and supporting system design.',
      'Assisted with database management tasks, including data maintenance, validation, and ensuring the accuracy of employee records.',
      'Collaborated with developers and end users during system testing, troubleshooting, and documentation to support successful project implementation.',
    ],
  },
];

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="font-mono text-2xl md:text-3xl font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>
            <span style={{ color: 'var(--color-text-muted)' }}>$</span> experience
          </h2>
          <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
            Work experience and industrial training
          </p>
        </div>

        {/* Education Card */}
        <div className="mb-6">
          <div
            className="terminal-glow rounded-lg border overflow-hidden transition-colors duration-300"
            style={{ borderColor: 'var(--color-border)' }}
          >
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
                ~/education/LASU
              </span>
            </div>
            <div className="p-4 md:p-6 font-mono text-sm md:text-base">
              <div className="space-y-4">
                <div>
                  <span style={{ color: 'var(--color-accent)' }}>$</span>{' '}
                  <span style={{ color: 'var(--color-cyan)' }}>cat</span> education.md
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                        BSc Computer Science
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                        Lagos State University
                      </p>
                    </div>
                    <p className="text-sm md:text-right" style={{ color: 'var(--color-accent)' }}>
                      Graduated November 2023
                    </p>
                  </div>
                  <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    Second Class Upper — CGPA: 4.20
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx}>
              <div
                className="terminal-glow rounded-lg border overflow-hidden transition-colors duration-300"
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
                    {exp.path}
                  </span>
                </div>
                {/* Terminal Body */}
                <div className="p-4 md:p-6 font-mono text-sm md:text-base">
                  <div className="space-y-4">
                    <div>
                      <span style={{ color: 'var(--color-accent)' }}>$</span>{' '}
                      <span style={{ color: 'var(--color-cyan)' }}>cat</span> role.md
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                            {exp.role}
                          </h3>
                          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                            {exp.type}
                          </p>
                        </div>
                        <p className="text-sm md:text-right" style={{ color: 'var(--color-accent)' }}>
                          {exp.period}
                        </p>
                      </div>
                      <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                        {exp.summary}
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-2 leading-relaxed">
                          <span style={{ color: 'var(--color-accent)' }} aria-hidden="true">-</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    {exp.link && (
                      <a
                        href={exp.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${exp.company}`}
                        className="inline-flex items-center gap-2 text-sm transition-colors"
                        style={{ color: 'var(--color-text-secondary)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                      >
                        <ExternalLinkIcon />
                        <span>{exp.link.label}</span>
                      </a>
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
