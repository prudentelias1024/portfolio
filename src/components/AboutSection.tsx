import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="font-mono text-2xl md:text-3xl font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>
            <span style={{ color: 'var(--color-text-muted)' }}>$</span> about
          </h2>
          <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
            A bit about my background and approach
          </p>
        </div>
        <div className="max-w-3xl">
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
                ~/about/background.md
              </span>
            </div>
            {/* Terminal Body */}
            <div className="p-4 md:p-6 font-mono text-sm md:text-base">
              <div className="space-y-4 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                <div>
                  <span style={{ color: 'var(--color-accent)' }}>$</span>{' '}
                  <span style={{ color: 'var(--color-cyan)' }}>cat</span> background.md
                </div>
                <p>
                  I&apos;m Ogundipe Oluwabukola Olamide, a Computer Science graduate from Lagos State University
                  (Second Class Upper, 4.20 GPA) based in Lagos, Nigeria. I build full-stack web applications
                  and machine learning solutions using React, Next.js, Angular, Django, Node.js, and more.
                </p>
                <p>
                  My work spans attendance systems, polling platforms, movie recommendation engines, AI-powered
                  photo tools, cross-platform applications with real-time notifications, NSFW content moderation
                  with ML, rental management platforms, and invoice generation tools. I care about clean
                  architecture, reliable APIs, authentication, and building products that work in production.
                </p>
                <div className="pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
                  <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                    <span style={{ color: 'var(--color-accent)' }}>&gt;</span>{' '}
                    Currently interested in:
                    <span className="ml-2" style={{ color: 'var(--color-text-primary)' }}>
                      full-stack development, machine learning, AI applications, and production-ready products
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
