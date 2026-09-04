'use client';
import React from 'react';

interface ContactItem {
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
  isLink: boolean;
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className || 'w-5 h-5'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className || 'w-5 h-5'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className || 'w-5 h-5'} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className || 'w-5 h-5'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className || 'w-5 h-5'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

const contactItems: ContactItem[] = [
  {
    label: 'Name',
    value: 'Ogundipe Oluwabukola Olamide',
    isLink: false,
    icon: <ExternalLinkIcon />,
  },
  {
    label: 'Email',
    value: 'prudentelias@gmail.com',
    href: 'mailto:prudentelias@gmail.com',
    isLink: true,
    icon: <EmailIcon />,
  },
  {
    label: 'Phone',
    value: '(+234) 9077096480',
    href: 'tel:+2349077096480',
    isLink: true,
    icon: <PhoneIcon />,
  },
  {
    label: 'Location',
    value: '34, Campbell Street, Lagos',
    isLink: false,
    icon: <LocationIcon />,
  },
  {
    label: 'GitHub',
    value: 'github.com/prudentelias1024',
    href: 'https://github.com/prudentelias1024',
    isLink: true,
    icon: <GithubIcon />,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="font-mono text-2xl md:text-3xl font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>
            <span style={{ color: 'var(--color-text-muted)' }}>$</span> contact
          </h2>
          <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
            Let&apos;s build something together
          </p>
        </div>
        <div className="max-w-2xl">
          <p className="text-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            I&apos;m open to full-stack development roles, machine learning projects, API-driven product work,
            and production-ready application builds. Feel free to reach out!
          </p>
          <div className="space-y-4">
            {contactItems.map((item, idx) => {
              const content = (
                <>
                  <span style={{ color: 'var(--color-accent)' }}>{item.icon}</span>
                  <div>
                    <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                      {item.label}
                    </div>
                    <div
                      className="break-words transition-colors"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {item.value}
                    </div>
                  </div>
                </>
              );

              if (item.isLink && item.href) {
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target={item.href.startsWith('mailto') || item.href.startsWith('tel') ? undefined : '_blank'}
                    rel={item.href.startsWith('mailto') || item.href.startsWith('tel') ? undefined : 'noopener noreferrer'}
                    aria-label={`${item.label}: ${item.value}`}
                    className="flex items-center gap-4 p-4 rounded-lg border transition-colors group"
                    style={{
                      borderColor: 'var(--color-border)',
                      backgroundColor: 'var(--color-bg-secondary)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-bg-tertiary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-bg-secondary)')}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-lg border"
                  style={{
                    borderColor: 'var(--color-border)',
                    backgroundColor: 'var(--color-bg-secondary)',
                  }}
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
