import React from 'react';

export default function SectionHeading({ badge, title, subtitle, centered = true }) {
  return (
    <div className={`section-title-wrapper ${centered ? 'text-center' : 'text-left'}`}>
      {badge && (
        <span className="badge badge-orange">
          {badge}
        </span>
      )}
      <h2 className="section-title">
        {title}
      </h2>
      {subtitle && (
        <p className="section-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
}
