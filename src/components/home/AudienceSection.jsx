import React from 'react';
import { siteConfig } from '@/config/siteConfig';
import SectionHeading from '../ui/SectionHeading';
import { GraduationCap, Briefcase, Building2, Heart } from 'lucide-react';

const iconMap = {
  GraduationCap: GraduationCap,
  Briefcase: Briefcase,
  Building2: Building2,
  Heart: Heart
};

export default function AudienceSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--accent-cream)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <SectionHeading
          badge="Tailored For Everyone"
          title="Who We Serve Daily"
          subtitle="From hostel students missing mom's food to busy corporate professionals needing nutritious lunch boxes."
        />

        <div className="grid-4">
          {siteConfig.targetAudiences.map((aud, idx) => {
            const IconComponent = iconMap[aud.icon] || GraduationCap;
            return (
              <div key={idx} className="card card-hover" style={{ backgroundColor: 'white', textAlign: 'center', alignItems: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--secondary-green-light)', color: 'var(--secondary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <IconComponent size={30} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.6rem' }}>
                  {aud.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                  {aud.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
