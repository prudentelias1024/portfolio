'use client';
import React, { useEffect, useState } from 'react';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const fullText = "I build full-stack web applications using React, Next.js, Angular, Django, Node.js, and machine learning models — focused on clean architecture, real-world workflows, and production-ready products.";
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (charIndex < fullText?.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText?.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [charIndex, fullText]);

  return (
    <section id="hero" className="py-16 md:py-24 px-4 md:px-8 pt-32 md:pt-40">
      <div className="max-w-5xl mx-auto">
        <div
          className="transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          {/* Name & Title */}
          <div className="mb-8">
            <p
              className="font-mono text-sm mb-2"
              style={{ color: 'var(--color-accent)' }}
            >
              Hi, my name is
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Ogundipe Oluwabukola
            </h1>
            <h2
              className="text-2xl md:text-4xl font-semibold"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Full-Stack Developer &amp; ML Enthusiast
            </h2>
          </div>

          {/* Terminal Card */}
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
                <span
                  className="font-mono text-sm ml-2"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  ~/about.sh
                </span>
              </div>
              {/* Terminal Body */}
              <div className="p-4 md:p-6 font-mono text-sm md:text-base">
                <div style={{ color: 'var(--color-text-primary)' }}>
                  <span style={{ color: 'var(--color-accent)' }}>$</span>{' '}
                  <span style={{ color: 'var(--color-cyan)' }}>cat</span> intro.txt
                </div>
                <div
                  className="mt-4 leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {displayText}
                  <span
                    className="inline-block align-middle animate-blink"
                    style={{
                      width: '0.625rem',
                      height: '1.25rem',
                      backgroundColor: 'var(--color-accent)',
                      marginLeft: '0.125rem',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 font-medium rounded-lg transition-colors"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-bg-primary)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent-muted)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border font-medium rounded-lg transition-colors"
              style={{
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-primary)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-bg-secondary)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Contact Me
            </a>
          </div>

          {/* GitHub hint */}
          <div className="mt-8 max-w-md">
            <div className="border-t pt-6" style={{ borderColor: 'var(--color-border)' }}>
              <div className="font-mono text-sm space-y-1">
                <a
                  href="https://github.com/prudentelias1024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 cursor-pointer transition-colors"
                  style={{ color: 'var(--color-text-secondary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                >
                  <span style={{ color: 'var(--color-accent)' }}>&gt;</span>
                  <span>github.com/prudentelias1024</span>
                  <span className="opacity-0 group-hover:opacity-100 animate-blink transition-opacity">▌</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
