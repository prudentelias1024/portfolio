import React from 'react';

export default function Footer() {
  return (
    <footer
      className="py-8 px-4 md:px-8 border-t"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-mono" style={{ color: 'var(--color-text-muted)' }}>
          <span style={{ color: 'var(--color-accent)' }}>$</span> echo &quot;&copy; 2024 Ogundipe Oluwabukola&quot;
        </p>
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          <i>Built with passion &amp; code</i>
        </p>
      </div>
    </footer>
  );
}
