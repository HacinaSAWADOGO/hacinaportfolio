import React from 'react';

/**
 * SectionHeader Component
 * @param {Object} props
 * @param {string} props.badge - Optional small label above title
 * @param {string} props.title - Primary section title
 * @param {string} props.subtitle - Optional description text
 * @param {string} props.className - Extra custom CSS classes
 */
export default function SectionHeader({
  badge,
  title,
  subtitle,
  className = ''
}) {
  return (
    <div className={`section-header ${className}`}>
      {badge && <span className="section-badge">{badge}</span>}
      <h2 className="section-title text-gradient">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
